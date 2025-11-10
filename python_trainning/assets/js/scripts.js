// ===================================
// Python Training - Scripts JavaScript
// ===================================

// Função para virar flashcards
function initFlashcards() {
    const flashcards = document.querySelectorAll('.flashcard');
    
    flashcards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// Função para salvar progresso do checklist no localStorage
function initChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const storageKey = 'python_training_progress';
    
    // Carregar progresso salvo
    const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');
    
    checkboxes.forEach((checkbox, index) => {
        const checkboxId = checkbox.id || `checkbox-${index}`;
        checkbox.id = checkboxId;
        
        // Restaurar estado salvo
        if (savedProgress[checkboxId]) {
            checkbox.checked = true;
        }
        
        // Salvar ao mudar
        checkbox.addEventListener('change', function() {
            savedProgress[checkboxId] = this.checked;
            localStorage.setItem(storageKey, JSON.stringify(savedProgress));
            updateProgress();
        });
    });
    
    updateProgress();
}

// Atualizar indicador de progresso
function updateProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
    
    const progressElement = document.getElementById('progress-indicator');
    if (progressElement && total > 0) {
        const percentage = Math.round((checked / total) * 100);
        progressElement.textContent = `Progresso: ${checked}/${total} (${percentage}%)`;
        progressElement.className = `alert ${percentage === 100 ? 'alert-success' : 'alert-info'}`;
    }
}

// Controle de flashcards com teclado
function initFlashcardNavigation() {
    let currentFlashcard = 0;
    const flashcards = document.querySelectorAll('.flashcard');
    
    if (flashcards.length === 0) return;
    
    // Mostrar apenas o primeiro flashcard inicialmente
    flashcards.forEach((card, index) => {
        if (index !== 0) {
            card.style.display = 'none';
        }
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        // Espaço ou Enter para virar
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            flashcards[currentFlashcard].classList.toggle('flipped');
        }
        
        // Seta direita para próximo
        if (e.code === 'ArrowRight') {
            if (currentFlashcard < flashcards.length - 1) {
                flashcards[currentFlashcard].style.display = 'none';
                flashcards[currentFlashcard].classList.remove('flipped');
                currentFlashcard++;
                flashcards[currentFlashcard].style.display = 'block';
                updateFlashcardCounter();
            }
        }
        
        // Seta esquerda para anterior
        if (e.code === 'ArrowLeft') {
            if (currentFlashcard > 0) {
                flashcards[currentFlashcard].style.display = 'none';
                flashcards[currentFlashcard].classList.remove('flipped');
                currentFlashcard--;
                flashcards[currentFlashcard].style.display = 'block';
                updateFlashcardCounter();
            }
        }
    });
    
    // Botões de navegação
    const prevBtn = document.getElementById('prev-flashcard');
    const nextBtn = document.getElementById('next-flashcard');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentFlashcard > 0) {
                flashcards[currentFlashcard].style.display = 'none';
                flashcards[currentFlashcard].classList.remove('flipped');
                currentFlashcard--;
                flashcards[currentFlashcard].style.display = 'block';
                updateFlashcardCounter();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentFlashcard < flashcards.length - 1) {
                flashcards[currentFlashcard].style.display = 'none';
                flashcards[currentFlashcard].classList.remove('flipped');
                currentFlashcard++;
                flashcards[currentFlashcard].style.display = 'block';
                updateFlashcardCounter();
            }
        });
    }
    
    function updateFlashcardCounter() {
        const counter = document.getElementById('flashcard-counter');
        if (counter) {
            counter.textContent = `Cartão ${currentFlashcard + 1} de ${flashcards.length}`;
        }
    }
    
    updateFlashcardCounter();
}

// Scroll suave para âncoras
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animação de fade-in ao rolar
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section, .card').forEach(element => {
        observer.observe(element);
    });
}

// Destacar item do menu atual
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Tooltip Bootstrap
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Gerar certificado com nome do aluno
async function generateCertificate() {
    const nameInput = document.getElementById('student-name');
    const passwordInput = document.getElementById('admin-password');
    const certificateName = document.getElementById('certificate-name');
    const dateElement = document.getElementById('certificate-date');
    
    if (nameInput && certificateName) {
        const studentName = nameInput.value.trim();
        const password = passwordInput ? passwordInput.value : '';
        
        if (!studentName) {
            alert('Por favor, digite seu nome para gerar o certificado.');
            return;
        }
        
        // Verificar senha administrativa
        const isAuthorized = await verifyAdminPassword(password);
        if (!isAuthorized) {
            alert('❌ Senha administrativa incorreta! Apenas instrutores autorizados podem gerar certificados.');
            if (passwordInput) passwordInput.value = '';
            return;
        }
        
        // Senha correta, gerar certificado
        certificateName.textContent = studentName;
        
        // Data atual
        const today = new Date();
        const formattedDate = today.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        if (dateElement) {
            dateElement.textContent = formattedDate;
        }
        
        // Gerar código de verificação único
        const verificationCode = await generateVerificationCode(studentName, formattedDate);
        const codeElement = document.getElementById('cert-code');
        if (codeElement) {
            codeElement.textContent = verificationCode;
        }
        
        // Salvar no localStorage
        localStorage.setItem('python_training_certificate_name', studentName);
        localStorage.setItem('python_training_certificate_date', formattedDate);
        localStorage.setItem('python_training_certificate_code', verificationCode);
        
        // Limpar senha
        if (passwordInput) passwordInput.value = '';
        
        // Mostrar certificado
        const certElement = document.getElementById('certificado');
        const formElement = document.getElementById('certificate-form');
        const actionsElement = document.getElementById('certificate-actions');
        
        if (certElement) certElement.classList.remove('d-none');
        if (formElement) formElement.style.display = 'none';
        if (actionsElement) actionsElement.classList.remove('d-none');
        
        // Scroll para o certificado
        setTimeout(() => {
            certElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // Feedback de sucesso
        console.log('✅ Certificado gerado com sucesso!');
    }
}

// Verificar senha administrativa (hash SHA-256)
async function verifyAdminPassword(inputPassword) {
    // Hash SHA-256 armazenado (senha definida pelo administrador)
    // A senha original não está no código por segurança
    const correctPasswordHash = '138a091551bfb09a921f8af3b0b4c7bfc3f25cde6b0fd390ab00e00388e84390';
    
    if (!inputPassword) {
        return false;
    }
    
    // Gerar hash da senha digitada
    const inputHash = await hashPassword(inputPassword);
    
    // Comparar hashes
    return inputHash === correctPasswordHash;
}

// Função para gerar hash SHA-256 de uma string
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Gerar código de verificação único para o certificado
async function generateVerificationCode(name, date) {
    const text = `${name}${date}CaraCoreInformática`;
    const hash = await hashPassword(text);
    const shortCode = hash.substring(0, 8).toUpperCase();
    return `PT-2025-${shortCode}`;
}

// Baixar certificado como imagem
function downloadCertificate() {
    // Esta função pode ser expandida para usar html2canvas ou similar
    alert('💡 Dica: Use a função "Imprimir" para salvar como PDF ou imprimir o certificado em formato A4 paisagem.');
}

// Imprimir certificado
function printCertificate() {
    window.print();
}

// Gerar novo certificado
function generateNewCertificate() {
    // Ocultar certificado
    document.getElementById('certificado').classList.add('d-none');
    document.getElementById('certificate-actions').classList.add('d-none');
    
    // Mostrar formulário
    document.getElementById('certificate-form').style.display = 'block';
    
    // Limpar campos
    document.getElementById('student-name').value = '';
    document.getElementById('admin-password').value = '';
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initFlashcards();
    initChecklist();
    initFlashcardNavigation();
    initSmoothScroll();
    initScrollAnimations();
    highlightCurrentPage();
    initTooltips();
    
    // Botão de gerar certificado
    const generateBtn = document.getElementById('generate-certificate-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateCertificate);
    }
    
    // Botão de download certificado
    const downloadBtn = document.getElementById('download-certificate');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadCertificate);
    }
    
    // Botão de imprimir certificado
    const printBtn = document.getElementById('print-certificate');
    if (printBtn) {
        printBtn.addEventListener('click', printCertificate);
    }
    
    // Botão de novo certificado
    const newBtn = document.getElementById('new-certificate');
    if (newBtn) {
        newBtn.addEventListener('click', generateNewCertificate);
    }
    
    // Permitir Enter para gerar certificado
    const nameInput = document.getElementById('student-name');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                generateCertificate();
            }
        });
    }
});

// Função auxiliar para embaralhar array (útil para flashcards)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
