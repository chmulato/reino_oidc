# Reino OIDC - Reino da Identidade Federada
## 🌐 Visualize a história completa em: [https://chmulato.github.io/reino_oidc/](https://chmulato.github.io/reino_oidc/)

Este projeto é um material **aberto e lúdico** para aprendizado sobre **OAuth 2.1** e **OpenID Connect (OIDC)**, utilizando metáforas, narrativa épica e personagens cativantes para facilitar a compreensão dos conceitos de autenticação e autorização modernos.

## 🎭 Objetivo

O objetivo é tornar o entendimento de protocolos de identidade federada mais acessível e memorável, por meio de:

- **Personagens únicos** que representam conceitos técnicos
- **Histórias envolventes** que explicam fluxos complexos 
- **Exemplos práticos** com código funcional estilo escola
- **Glossário ilustrado** para leigos e especialistas
- **Troubleshooting gamificado** para problemas comuns
- **Conteúdo interativo** para diferentes níveis de conhecimento

Todo o conteúdo pode ser utilizado livremente para fins educacionais.

## 🏰 Estrutura do Projeto

### 📖 Narrativa Principal

- **[Página Inicial](https://chmulato.github.io/reino_oidc/index.html)** - Portal de entrada para o Reino
- **[Personagens](https://chmulato.github.io/reino_oidc/personagens.html)** - Conheça os habitantes do Reino da Identidade Federada
- **[História Parte I](https://chmulato.github.io/reino_oidc/historia_p1.html)** - A Era das Senhas e a Chegada de Lady OAuth
- **[História Parte II](https://chmulato.github.io/reino_oidc/historia_p2.html)** - A Era da Confiança e o Mago OIDC  
- **[História Parte III](https://chmulato.github.io/reino_oidc/historia_p3.html)** - A Nova Ordem Digital e a Aprendiz Devia
- **[Conclusão](https://chmulato.github.io/reino_oidc/conclusao.html)** - As lições aprendidas e o futuro do Reino

### 🗺️ Mapas e Diagramas Técnicos

- **[Mapas Técnicos](https://chmulato.github.io/reino_oidc/mapas.html)** - Página dedicada com diagramas de arquitetura (Mermaid/PNG) que ilustram fluxos OAuth/OIDC e topologias de implantação

### 🌟 Conteúdo Educativo Avançado

- **[Academia do Reino OIDC](https://chmulato.github.io/reino_oidc/aprendiz.html)** - Sistema de aprendizagem interativo com:
  - **3 caminhos de dificuldade**: Iniciante, Aventureiro e Mestre
  - **60 perguntas flashcards** (20 por caminho) com randomização
  - **Sistema de progressão gamificado** com badges e certificações
  - **Armazenamento local** do progresso do usuário
  - **Explicações duplas** (para leigos e técnicos) em cada pergunta
  - **Premiações específicas** por caminho completado
  - **Navegação inteligente** entre os níveis de dificuldade

- **[Mundo do Conhecimento](https://chmulato.github.io/reino_oidc/mundo_do_conhecimento.html)** - Guia técnico completo com:
  - Mini-histórias para cada tópico usando os personagens
  - Conceitos desde básicos até avançados
  - Exemplos de código estilo escola (quadros verdes educativos)
  - Troubleshooting com cenários do Reino
  - Ferramentas e recursos recomendados
  - Boas práticas de segurança

- **[Caminho Feliz OIDC](https://chmulato.github.io/reino_oidc/caminho_feliz.html)** - Tutorial interativo do fluxo ideal com:
  - **Passo a passo detalhado** do Authorization Code Flow
  - **Explicações duplas** (para leigos e técnicos) em cada etapa
  - **Exemplos de código** em quadros educativos verdes
  - **Cronometria real** do processo (2-5 segundos)
  - **Dicas de segurança** (PKCE, State, HTTPS, Validações)
  - **Interface accordion** para navegação organizada

- **[Glossário Ilustrado](https://chmulato.github.io/reino_oidc/glossario.html)** - Dicionário educacional com:
  - **16+ termos técnicos** explicados em detalhes
  - **Duas abordagens** para cada conceito: leigos e técnicos
  - **Metáforas consistentes** usando personagens do Reino
  - **Índice alfabético** para consulta rápida
  - **Exemplos de código** e definições precisas
  - **Interface accordion** para navegação organizada

### 🎭 Personagens Principais

- **Lady OAuth** - A Guardiã das Portas (Autorização)
- **Lord OIDC** - O Mago da Identidade (Autenticação)
- **Alex Client** - O Mensageiro Confiável (Cliente/Aplicação)
- **Pixie PKCE** - A Guardiã dos Códigos Secretos (Segurança)
- **IDA Token** - A Mensageira da Verdade (ID Token)
- **Ace Token** - O Guerreiro das Permissões (Access Token)
- **Rex Token** - O Renovador Eterno (Refresh Token) ⭐ *Novo!*
- **Seraph Resource** - O Guardião dos Dados (Resource Server)
- **Devia** - A Aprendiz Integradora (Desenvolvedora)

### 📁 Arquivos de Apoio

- **[Documentação em Markdown](md/)** - Versões texto das histórias e documentação técnica

### 🖼️ Impressões e Prompts de Imagem

- **`img/`** - Contém prompts detalhados para geração das ilustrações do projeto (usadas para criar `assets/images/*.png`). Arquivos notáveis:
  - `prompt-historia-reino-oidc.md` — prompt geral da história
  - `prompt_todos_os_personagens.txt` — prompt para retrato de todos os personagens
  - `prompt_historia_parte_i.txt` — prompt da Parte I
  - `prompt_historia_parte_ii.txt` — prompt da Parte II
  - `prompt_historia_parte_iii.txt` — prompt da Parte III
  - `prompt_conclusao.txt` — prompt para a imagem de conclusão

> Observação: os arquivos em `img/` são prompts prontos para uso em geradores de imagem IA (Stable Diffusion, Midjourney, DALL·E, etc.). Os PNGs gerados foram colocados em `assets/images/`.

### 📋 Documentação Técnica (Markdown)

A pasta `md/` contém documentação técnica detalhada em formato Markdown para desenvolvedores e implementadores:

#### 📖 Narrativa e Conceitos

- **[A História](md/a_historia.md)** - Narrativa completa do Reino OIDC em formato texto
- **[Os Personagens](md/os_personagens.md)** - Descrição detalhada de todos os personagens e seus papéis técnicos
- **[Conclusão](md/conclusao.md)** - Síntese final e próximos passos do projeto

#### 🔧 Implementação e Validação

- **[Roteiro Perfeito OIDC](md/roteiro_perfeito_oidc.md)** - Guia passo a passo para validação do caminho feliz
- **[Checklist](md/checklist.md)** - Lista de verificação para implementação OIDC

> 💡 **Dica**: Os arquivos Markdown são ideais para consulta técnica rápida, integração em documentação de projetos e uso em wikis internas.

## 🚀 Como Usar

### Para Estudantes/Desenvolvedores

1. Comece pela **[página inicial](https://chmulato.github.io/reino_oidc/index.html)** para entender o contexto
2. Conheça os **[personagens](https://chmulato.github.io/reino_oidc/personagens.html)** - cada um representa um conceito técnico
3. Acompanhe a **narrativa sequencial** (Parte I → II → III)
4. **NOVO!** Pratique com a **[Academia do Reino OIDC](https://chmulato.github.io/reino_oidc/aprendiz.html)**:
   - Comece pelo **Caminho Iniciante** (20 perguntas básicas)
   - Avance para o **Caminho Aventureiro** (conceitos intermediários)
   - Domine o **Caminho Mestre** (conhecimento avançado)
   - Ganhe badges e certificações conforme progride
5. Aprofunde-se no **[Mundo do Conhecimento](https://chmulato.github.io/reino_oidc/mundo_do_conhecimento.html)** para detalhes técnicos
6. **Pratique com o **[Caminho Feliz](https://chmulato.github.io/reino_oidc/caminho_feliz.html)** - fluxo ideal passo a passo
7. Consulte o **[Glossário Ilustrado](https://chmulato.github.io/reino_oidc/glossario.html)** para definições específicas
8. Use as **mini-histórias** para lembrar de conceitos específicos

### Para Educadores

- Use os **personagens como metáforas** em suas aulas
- Aproveite as **histórias por seções** para explicar conceitos graduais
- Utilize os **exemplos de código em quadros verdes** como material prático
- Explore o **glossário duplo** (leigos + técnicos) para diferentes audiências
- Adapte o **conteúdo lúdico** para workshops e treinamentos

### Para Profissionais

- Consulte as **definições técnicas** no glossário para implementações
- Use os **exemplos de código** como base para projetos reais
- Revise as **boas práticas OAuth 2.1** para atualizações de segurança
- Aproveite o **troubleshooting gamificado** para resolver problemas

## 🌐 Como Publicar

### GitHub Pages

1. Vá para **Settings** do seu repositório
2. Em **Pages**, selecione **Deploy from a branch**
3. Escolha a branch **main/master** e pasta **root**
4. Aguarde alguns minutos e acesse via: `https://[seu-usuario].github.io/reino_oidc/`

### Localmente

```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/reino_oidc.git

# Abra qualquer servidor HTTP local
cd reino_oidc
python -m http.server 8000
# ou
npx serve .

# Acesse: http://localhost:8000
```

### Gerar/Regenerar Imagens a partir dos Prompts

1. Edite ou revise o prompt desejado em `img/`.
2. Use a sua ferramenta de geração (por exemplo, Stable Diffusion, Midjourney, DALL·E).
3. Gere imagens em resolução mínima 1920x1080 (ideal 4K) e salve em `assets/images/` com nomes coerentes, por exemplo:

- `assets/images/imagem_parte_i.png`
- `assets/images/imagem_parte_ii.png`
- `assets/images/imagem_parte_iii.png`
- `assets/images/imagem_conclusao.png`

4.Atualize o prompt em `img/` quando quiser novas variações visuais.

> Dica rápida: mantenha versões das imagens se quiser voltar a uma variante específica (ex.: `imagem_parte_i_v1.png`).

## 🎯 Público-Alvo

- **Desenvolvedores** iniciantes em autenticação/autorização
- **Estudantes** de segurança digital e protocolos web
- **Arquitetos de software** que precisam implementar OIDC
- **Educadores** que buscam material didático criativo
- **Profissionais de TI** migrando para OAuth 2.1
- **Qualquer pessoa** curiosa sobre como funcionam os logins modernos

## 🛠️ Recursos Técnicos

### Características Educacionais

- **Narrativa gamificada** com personagens representando conceitos técnicos
- **Progressão gradual** do básico ao avançado
- **Exemplos visuais** com quadros estilo escola para códigos
- **Glossário duplo** (explicações para leigos + definições técnicas)
- **Interface responsiva** compatível com mobile e desktop

### Tecnologias Utilizadas

- **HTML5/CSS3** com design responsivo
- **Bootstrap 5.3.3** para componentes visuais
- **JavaScript ES6+** para sistema de aprendizagem interativo
- **LocalStorage API** para persistência de progresso do usuário
- **Accordion interfaces** para organização do conteúdo
- **CSS customizado** com tema medieval/fantasia
- **Algoritmo Fisher-Yates** para randomização de perguntas
- **GitHub Pages** para hospedagem gratuita

### Cobertura de Conteúdo

- **OAuth 2.1** com foco em segurança e boas práticas
- **OpenID Connect** para autenticação e identidade
- **JWT (JSON Web Tokens)** estrutura e validação
- **PKCE** implementação obrigatória
- **Refresh Token Rotation** ciclos seguros de renovação
- **Exemplos de código** JavaScript e Python funcionais

## 🆕 Novidades da Versão Atual

### ✨ Grandes Atualizações 2025

#### � Academia do Reino OIDC - NOVO Sistema de Aprendizagem!

- **Sistema interativo de flashcards** com 60 perguntas organizadas em 3 níveis
- **Caminho Iniciante** (20 perguntas): Fundamentos com Lady OAuth, Lord OIDC e Alex Client
- **Caminho Aventureiro** (20 perguntas): Conceitos intermediários com PKCE e tokens
- **Caminho Mestre** (20 perguntas): Conhecimento avançado em fluxos e segurança
- **Randomização completa** das perguntas a cada sessão para melhor aprendizado
- **Sistema de progressão gamificado** com badges e certificações por nível
- **Armazenamento local** do progresso do usuário entre sessões
- **Explicações duplas** (para leigos e técnicos) em cada flashcard
- **Premiações específicas** por caminho completado com sugestão de próximo nível
- **Congratulações finais** ao dominar todos os 3 caminhos
- **Interface responsiva** com navegação intuitiva entre níveis

#### 🎯 Caminho Feliz Interativo

- **Tutorial passo a passo** do Authorization Code Flow ideal
- **Interface accordion** com navegação intuitiva
- **Explicações duplas** (leigos + técnicos) para cada etapa
- **Códigos em quadros educativos** para visualização clara
- **Cronometria real** do processo de autenticação (2-5 segundos)
- **Dicas de segurança** integradas (PKCE, State, HTTPS)

#### 📚 Glossário Ilustrado Dedicado

- **Arquivo separado** (`glossario.html`) para melhor organização
- **16+ termos técnicos** com explanações duplas (leigos + técnicos)
- **Metáforas consistentes** usando todos os personagens do Reino
- **Navegação integrada** em todas as páginas do site
- **Índice alfabético** para consulta rápida

#### 🎨 Visual Educativo Aprimorado

- **Quadros verdes estilo escola** para exemplos de código
- **Cabeçalhos temáticos** com ícones para cada linguagem
- **Copyright padronizado** em todas as páginas
- **Estilos CSS organizados** para melhor manutenção

#### 🔄 OAuth 2.1 - Conteúdo Especializado

- **Seção dedicada** explicando diferenças do OAuth 2.0
- **Guia de migração** com práticas recomendadas
- **Foco em segurança** e simplificação do protocolo

### Rex Token - O Renovador Eterno

- Novo personagem representando **Refresh Tokens**
- Integrado à narrativa das três partes da história
- Explicação completa sobre **ciclos de renovação**
- **Boas práticas** de armazenamento e rotação

### Mundo do Conhecimento Enriquecido

- **Mini-histórias** para cada tópico técnico
- **11 seções** cobrindo desde conceitos básicos até exemplos práticos
- **Códigos em quadros educativos** estilo escola
- **Cenários de implementação** do mundo real
- **Referência direta** ao glossário dedicado

## 🤝 Contribuição

Contribuições são muito bem-vindas! Você pode:

- 🐛 **Reportar bugs** ou sugerir melhorias
- 📝 **Adicionar conteúdo** educativo
- 🎨 **Melhorar o design** ou ilustrações  
- 🌍 **Traduzir** para outros idiomas
- 💡 **Propor novos personagens** ou histórias
- 🔧 **Aprimorar exemplos** de código

### Como Contribuir

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-historia`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova história sobre...'`)
4. **Push** para a branch (`git push origin feature/nova-historia`)
5. Abra um **Pull Request**

## 📋 Roadmap

### ✅ Concluído

- [x] **Academia do Reino OIDC** - Sistema completo de aprendizagem interativo
- [x] **60 perguntas flashcards** organizadas em 3 níveis de dificuldade
- [x] **Sistema de progressão gamificado** com badges e certificações
- [x] **Randomização de perguntas** usando algoritmo Fisher-Yates
- [x] **Armazenamento local** de progresso entre sessões
- [x] **Premiações específicas** por caminho completado
- [x] **Glossário ilustrado dedicado** com 16+ termos técnicos
- [x] **OAuth 2.1 seção especializada** com guia de migração
- [x] **Quadros de código estilo escola** para melhor visualização
- [x] **Rex Token personagem** integrado à narrativa completa
- [x] **Copyright padronizado** em todas as páginas
- [x] **Navegação integrada** com glossário em todo o site
- [x] **Estrutura de assets organizada** (CSS e JS em pastas dedicadas)
- [x] **Mapas técnicos (mapas.html)** adicionados com diagramas de arquitetura
- [x] **Prompts de imagem** adicionados em `img/` e imagens finais colocadas em `assets/images/`
- [x] **Menus uniformizados**: todas as páginas (história I/II/III, conclusão) têm o mesmo menu incluindo links para Glossário e Mapas

### 🔄 Em Andamento

- [ ] **Versão em inglês** completa do conteúdo
- [ ] **Melhorias de acessibilidade** (WCAG compliance)

### 🚀 Próximas Funcionalidades

- [ ] **Relatórios de progresso** detalhados por usuário
- [ ] **Modo competitivo** entre usuários
- [ ] **Novas categorias de perguntas** (JWT, SAML, Session Management)
- [ ] **Sistema de conquistas** mais elaborado
- [ ] **Exportação de certificados** em PDF
- [ ] **Personagens adicionais** (SAML, Session Management)
- [ ] **Histórias interativas** com escolhas do usuário
- [ ] **Vídeos animados** dos personagens
- [ ] **Simulador de fluxos** OIDC visual
- [ ] **Dark mode** para melhor experiência noturna
- [ ] **APIs REST** para integração com outros sistemas

## 📜 Licença

Este projeto está licenciado sob a **MIT License** - uma das licenças open source mais permissivas.

### 🎯 O que isso significa?

- ✅ **Uso livre** para fins educacionais, comerciais e pessoais
- ✅ **Modificação permitida** - adapte para suas necessidades
- ✅ **Distribuição livre** - compartilhe suas versões
- ✅ **Sem royalties** - use sem custos adicionais

### 📋 Arquivos de licenciamento

- [LICENSE](LICENSE) - Texto completo da licença MIT
- [LICENSING.md](LICENSING.md) - Guia detalhado de uso e permissões

**Para educadores:** Este material foi criado especificamente para uso educacional. Sintam-se livres para usar em aulas, cursos e treinamentos!

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub! ⭐**

*Feito com 💝 para a comunidade de desenvolvedores*

</div>
