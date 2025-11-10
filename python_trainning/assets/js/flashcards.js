class FlashcardManager {
    constructor() {
        this.flashcards = [];
        this.currentIndex = 0;
        this.isLoading = true;
        this.container = null;
        this.counter = null;
        this.prevBtn = null;
        this.nextBtn = null;
    }

    async init() {
        try {
            // Initialize DOM elements
            this.container = document.getElementById('flashcard-container');
            this.counter = document.getElementById('flashcard-counter');
            this.prevBtn = document.getElementById('prev-flashcard');
            this.nextBtn = document.getElementById('next-flashcard');

            // Show loading state
            this.showLoading();

            // Load flashcards from JSON
            await this.loadFlashcards();

            // Randomize order
            this.shuffleArray(this.flashcards);

            // Generate HTML for all flashcards
            this.generateFlashcards();

            // Setup event listeners
            this.setupEventListeners();

            // Show first flashcard
            this.showFlashcard(0);

            // Hide loading state
            this.hideLoading();

        } catch (error) {
            console.error('Erro ao carregar flashcards:', error);
            this.showError();
        }
    }

    async loadFlashcards() {
        try {
            const response = await fetch('assets/json/flashcards.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.flashcards = data.flashcards;
        } catch (error) {
            throw new Error('Falha ao carregar perguntas: ' + error.message);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateFlashcards() {
        this.container.innerHTML = '';

        this.flashcards.forEach((card, index) => {
            const flashcardElement = this.createFlashcardElement(card, index);
            this.container.appendChild(flashcardElement);
        });
    }

    createFlashcardElement(card, index) {
        const flashcardDiv = document.createElement('div');
        flashcardDiv.className = 'flashcard';
        flashcardDiv.style.display = index === 0 ? 'block' : 'none';

        flashcardDiv.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <span class="badge bg-primary mb-2">Questão ${index + 1}/30 - ${card.module}</span>
                    <h3 class="text-responsive">${card.question}</h3>
                    <p class="text-muted">(Toque para ver a resposta)</p>
                </div>
                <div class="flashcard-back">
                    <span class="badge bg-success mb-2">Resposta</span>
                    <h4>Para Leigos:</h4>
                    <p class="text-responsive">${card.answer_beginner}</p>
                    ${card.answer_technical !== card.answer_beginner ? 
                        `<h4>Para Técnicos:</h4>
                         <p class="text-responsive">${card.answer_technical}</p>` : 
                        ''}
                </div>
            </div>
        `;

        // Add click handler for flipping
        flashcardDiv.addEventListener('click', () => {
            flashcardDiv.classList.toggle('flipped');
        });

        return flashcardDiv;
    }

    setupEventListeners() {
        // Previous button
        this.prevBtn.addEventListener('click', () => {
            this.previousFlashcard();
        });

        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.nextFlashcard();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousFlashcard();
            } else if (e.key === 'ArrowRight') {
                this.nextFlashcard();
            } else if (e.key === ' ') {
                e.preventDefault();
                this.flipCurrentFlashcard();
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let startY = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.container.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const diffX = startX - endX;
            const diffY = startY - endY;

            // Only handle horizontal swipes
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next flashcard
                    this.nextFlashcard();
                } else {
                    // Swipe right - previous flashcard
                    this.previousFlashcard();
                }
            }

            startX = 0;
            startY = 0;
        });
    }

    showFlashcard(index) {
        // Hide all flashcards
        const allFlashcards = this.container.querySelectorAll('.flashcard');
        allFlashcards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
            // Reset flip state
            card.classList.remove('flipped');
        });

        // Update counter
        this.counter.textContent = `${index + 1} / ${this.flashcards.length}`;

        // Update button states
        this.prevBtn.disabled = index === 0;
        this.nextBtn.disabled = index === this.flashcards.length - 1;

        this.currentIndex = index;
    }

    nextFlashcard() {
        if (this.currentIndex < this.flashcards.length - 1) {
            this.showFlashcard(this.currentIndex + 1);
        }
    }

    previousFlashcard() {
        if (this.currentIndex > 0) {
            this.showFlashcard(this.currentIndex - 1);
        }
    }

    flipCurrentFlashcard() {
        const currentFlashcard = this.container.querySelector('.flashcard:not([style*="display: none"])');
        if (currentFlashcard) {
            currentFlashcard.classList.toggle('flipped');
        }
    }

    showLoading() {
        this.container.innerHTML = `
            <div class="text-center py-5 flashcard-loading">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Carregando...</span>
                </div>
                <p class="mt-3">Carregando perguntas...</p>
            </div>
        `;
        
        this.counter.textContent = '0 / 0';
        this.prevBtn.disabled = true;
        this.nextBtn.disabled = true;
    }

    hideLoading() {
        this.isLoading = false;
    }

    showError() {
        this.container.innerHTML = `
            <div class="alert alert-danger text-center flashcard-error">
                <h4>⚠️ Erro ao carregar perguntas</h4>
                <p>Não foi possível carregar as perguntas. Verifique se:</p>
                <ul class="text-start">
                    <li>O arquivo JSON existe em <code>assets/json/flashcards.json</code></li>
                    <li>O servidor web está funcionando corretamente</li>
                    <li>Não há erros de CORS</li>
                </ul>
                <button class="btn btn-light mt-3" onclick="location.reload()">🔄 Tentar Novamente</button>
            </div>
        `;
    }

    // Public method to restart with new randomization
    restart() {
        this.shuffleArray(this.flashcards);
        this.generateFlashcards();
        this.showFlashcard(0);
    }

    // Get current progress
    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.flashcards.length,
            percentage: Math.round(((this.currentIndex + 1) / this.flashcards.length) * 100)
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.flashcardManager = new FlashcardManager();
    window.flashcardManager.init();
});

// Add utility functions
function restartQuiz() {
    if (window.flashcardManager) {
        window.flashcardManager.restart();
    }
}

function getQuizProgress() {
    if (window.flashcardManager) {
        return window.flashcardManager.getProgress();
    }
    return { current: 0, total: 0, percentage: 0 };
}
