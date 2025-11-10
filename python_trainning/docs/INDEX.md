# 📚 Documentação - Python Training

Bem-vindo à documentação do projeto **Python Training**! Este é um sistema educacional interativo para ensinar Python através de flashcards e exercícios práticos.

## 🎯 Visão Geral do Projeto

O **Python Training** é uma aplicação web educacional que oferece:
- 📋 Flashcards interativos com 30 perguntas sobre Python
- 🎲 Randomização automática das perguntas  
- 📱 Interface responsiva (desktop e mobile)
- 🧠 Dois níveis de resposta: iniciante e técnico
- 🎮 Navegação por teclado e touch

## 📁 Estrutura do Projeto

```
c:\dev\workspace_oidc\
├── 🐍 server.py                       # Servidor de desenvolvimento
├── 🖥️ run_server.bat                  # Script Windows para iniciar
├── 📂 python_trainning/               # Aplicação principal
│   ├── 🏠 index.html                  # Página inicial
│   ├── 🧠 mundo_do_conhecimento.html  # Flashcards interativos
│   ├── 📂 assets/                     # Recursos estáticos
│   │   ├── 🎨 css/                    # Estilos
│   │   │   ├── style.css              # Estilos gerais
│   │   │   └── flashcards.css         # Estilos específicos
│   │   ├── ⚙️ js/                     # JavaScript
│   │   │   └── flashcards.js          # Lógica dos flashcards
│   │   └── 📊 json/                   # Dados
│   │       └── flashcards.json        # Perguntas e respostas
│   └── 📖 docs/                       # Documentação
│       ├── INDEX.md                   # Este arquivo
│       └── README_SERVER.md           # Documentação do servidor
```

## 🚀 Como Começar

### 1️⃣ Pré-requisitos
- Python 3.x instalado
- Navegador web moderno
- Editor de código (recomendado: VS Code)

### 2️⃣ Executar o Servidor
```bash
# Opção 1: Linha de comando
cd c:\dev\workspace_oidc
python server.py

# Opção 2: Windows (duplo clique)
run_server.bat
```

### 3️⃣ Acessar a Aplicação
- 🏠 **Página Principal**: http://localhost:8000
- 🧠 **Flashcards**: http://localhost:8000/mundo_do_conhecimento.html

## 📋 Funcionalidades

### 🧠 Mundo do Conhecimento (Flashcards)
- **30 perguntas** cobrindo 6 módulos de Python
- **Randomização** automática a cada carregamento
- **Dois níveis** de resposta (iniciante/técnico)
- **Navegação** por botões, teclado ou touch
- **Interface responsiva** para mobile e desktop

### 🎮 Controles Disponíveis
- **Mouse/Touch**: Clique no card para virar
- **Teclado**: 
  - `←` `→` Navegar entre cards
  - `Espaço` Virar card atual
- **Botões**: Anterior/Próximo
- **Swipe**: Deslize no mobile

### 📊 Módulos Cobertos
1. **Módulo 1** - Fundamentos (variáveis, loops, input)
2. **Módulo 2** - Jogos com Pygame (coordenadas, colisões, FPS)
3. **Módulo 3** - Projetos Interativos (Minecraft, Pillow)
4. **Módulo 4** - IA e Automação (ML, bots, algoritmos)
5. **Módulo 5** - Segurança Digital (OAuth, OIDC, JWT)
6. **Módulo 6** - Desenvolvimento (Git, portfolios, code review)

## 🔧 Arquivos Principais

### 🏠 HTML
- **[index.html](../index.html)**: Página inicial com navegação
- **[mundo_do_conhecimento.html](../mundo_do_conhecimento.html)**: Interface dos flashcards

### 🎨 CSS  
- **[style.css](../assets/css/style.css)**: Estilos gerais da aplicação
- **[flashcards.css](../assets/css/flashcards.css)**: Estilos específicos dos cards

### ⚙️ JavaScript
- **[flashcards.js](../assets/js/flashcards.js)**: Lógica completa dos flashcards

### 📊 Dados
- **[flashcards.json](../assets/json/flashcards.json)**: Base de dados com as 30 questões

## 🛠️ Desenvolvimento

### Adicionar Nova Pergunta
1. Edite `assets/json/flashcards.json`
2. Adicione objeto com formato:
```json
{
  "id": 31,
  "module": "Módulo X",
  "question": "Sua pergunta aqui?",
  "answer_beginner": "Resposta para iniciantes",
  "answer_technical": "Resposta técnica detalhada"
}
```

### Modificar Estilos
- **Cores dos cards**: Edite gradientes em `flashcards.css`
- **Responsividade**: Ajuste media queries
- **Animações**: Modifique transitions e transforms

### Personalizar JavaScript
- **Randomização**: Função `shuffleArray()`
- **Navegação**: Event listeners em `setupEventListeners()`
- **Criação de cards**: Método `createFlashcardElement()`

## 📖 Documentação Técnica

### 🖥️ Servidor de Desenvolvimento
- **[Guia do Servidor](README_SERVER.md)** - Configuração e troubleshooting

### 🏗️ Arquitetura
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Python HTTP Server (desenvolvimento)
- **Dados**: JSON estático
- **Estilo**: Bootstrap 5 + CSS customizado

### 🔧 APIs Utilizadas
- **Fetch API**: Carregamento do JSON
- **Touch Events**: Interação mobile
- **Keyboard Events**: Navegação por teclado
- **CSS Transforms**: Animação 3D dos cards

## 🎯 Casos de Uso

### 👨‍🎓 Para Estudantes
1. Acesse os flashcards para revisar conceitos
2. Use modo aleatório para testar conhecimento
3. Compare respostas iniciante vs. técnica
4. Pratique navegação por teclado

### 👨‍🏫 Para Professores  
1. Use como ferramenta de revisão em aula
2. Projete na tela para discussões em grupo
3. Personalize perguntas editando o JSON
4. Acompanhe progresso dos alunos

### 👨‍💻 Para Desenvolvedores
1. Estude o código como exemplo de projeto
2. Fork e customize para outros temas
3. Contribua com novas funcionalidades
4. Use como base para projetos similares

## 🔍 Troubleshooting

### ❌ Problemas Comuns

**Flashcards não carregam**
- Verifique se o servidor está rodando
- Confirme se `flashcards.json` existe
- Veja console do navegador para erros

**Servidor não inicia**  
- Confirme que está na pasta correta
- Verifique se Python está instalado
- Tente uma porta diferente

**Layout quebrado no mobile**
- Limpe cache do navegador
- Verifique se CSS foi carregado
- Teste em modo incógnito

### 🔗 Links Úteis
- [Python.org](https://www.python.org/) - Download do Python
- [MDN Web Docs](https://developer.mozilla.org/) - Referência web
- [Bootstrap](https://getbootstrap.com/) - Framework CSS

## 📞 Suporte

Para dúvidas e problemas:
1. Consulte este INDEX.md
2. Verifique [README_SERVER.md](README_SERVER.md)
3. Examine logs do servidor
4. Inspione console do navegador

---

**📝 Última atualização**: Janeiro 2025  
**🔖 Versão**: 1.0  
**👤 Autor**: Python Training Team
