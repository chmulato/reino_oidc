# 🔭 Observatório do Futuro - Sistema de Flash Cards

## Visão Geral

O **Observatório do Futuro** é um sistema interativo de revisão baseado em flash cards para revisar os conceitos aprendidos em cada módulo do curso Python Training.

## Estrutura de Arquivos

```
estudos/
├── observatorio_modulo_01.html    # Página de flash cards do Módulo 1
└── assets/
    └── json/
        └── modulo_01_questoes.json # 15 questões do Módulo 1
```

## Características

### 🎴 Flash Cards Interativos
- **15 questões** cobrindo todo o conteúdo do Módulo 1
- Cards com **frente** (pergunta) e **verso** (resposta)
- Animação 3D ao virar o card
- Design responsivo para mobile e desktop

### 📊 Sistema de Progresso
- Indicador visual do progresso (questão X de 15)
- Dots clicáveis para navegar entre questões
- Marcação de cards visualizados vs não visualizados
- Banner de conclusão ao revisar todas as questões

### 🎯 Categorias das Questões

As 15 questões cobrem os seguintes tópicos do Módulo 1:

1. **Conceitos Básicos** (3 questões)
   - Variáveis
   - Operadores
   - Algoritmos

2. **Tipos de Dados** (1 questão)
   - int, float, str, bool, list, tuple, dict

3. **Lógica de Programação** (2 questões)
   - Algoritmos
   - Fluxogramas

4. **Estruturas de Controle** (1 questão)
   - if/else

5. **Loops** (1 questão)
   - for vs while

6. **Python Básico** (3 questões)
   - Sintaxe
   - print()
   - input()

7. **Sintaxe Python** (1 questão)
   - Indentação

8. **Ambiente de Desenvolvimento** (1 questão)
   - IDEs (Thonny, VS Code)

9. **Boas Práticas** (1 questão)
   - Comentários

10. **História do Python** (1 questão)
    - Por que Python é bom para iniciantes

### 🎮 Navegação

- **Botões**: Anterior, Virar Card, Próximo
- **Teclado**: ← → para navegar, Espaço/Enter para virar
- **Dots**: Clique para ir direto a uma questão específica
- **Mobile-friendly**: Touch otimizado

### ✨ Animações

- Pulse effect nos números dos cards
- Flip 3D ao virar os cards
- Bounce effect no hint de flip
- Gradientes animados de fundo
- Transições suaves

### 🎨 Design

- **Cores**: Gradientes azul/roxo e verde
- **Tipografia**: Fontes do sistema Python Training
- **Acessibilidade**: Alto contraste, navegação por teclado
- **Responsivo**: Adapta-se a todos os tamanhos de tela

## Formato do JSON

```json
{
  "modulo": "01",
  "titulo": "Fundamentos da Programação",
  "descricao": "Revisão dos conceitos fundamentais",
  "questoes": [
    {
      "id": 1,
      "pergunta": "Pergunta aqui?",
      "resposta": "Resposta detalhada aqui.",
      "categoria": "Categoria"
    }
  ]
}
```

## Como Adicionar Novos Módulos

1. Crie o arquivo JSON em `estudos/assets/json/modulo_XX_questoes.json`
2. Duplique `observatorio_modulo_01.html` para `observatorio_modulo_XX.html`
3. Atualize o caminho do JSON no JavaScript
4. Atualize os links de navegação
5. Adicione o link no final do módulo correspondente

## Integração com os Módulos

Cada página de módulo (modulo_01.html, modulo_02.html, etc.) deve ter um link para o Observatório do Futuro correspondente no final da página, antes da navegação para o próximo módulo.

```html
<div class="alert-success-custom mb-4">
    <h4>🔭 Pronto para Revisar?</h4>
    <p>Visite o Observatório do Futuro para revisar os conceitos!</p>
    <a href="estudos/observatorio_modulo_XX.html" class="btn btn-success btn-lg">
        🔭 Ir para o Observatório do Futuro
    </a>
</div>
```

## Benefícios Pedagógicos

✅ **Retenção**: Flash cards são comprovadamente eficazes para memorização  
✅ **Engajamento**: Interface interativa mantém o interesse  
✅ **Autoavaliação**: Estudante pode testar seu conhecimento  
✅ **Revisão Ativa**: Incentiva recall ativo em vez de leitura passiva  
✅ **Progresso Visual**: Motivação através de indicadores de progresso  

## Tecnologias Utilizadas

- HTML5
- CSS3 (Animations, Transforms, Flexbox)
- JavaScript Vanilla (Fetch API, DOM Manipulation)
- Bootstrap 5.3.3
- JSON para dados estruturados

---

**Desenvolvido para**: Python Training - Programação, Jogos e IA para Jovens  
**Copyright**: © 2025 Cara Core Informática  
**Licença**: Material proprietário - consulte LICENSE_PT.md
