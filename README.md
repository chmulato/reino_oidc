# Reino OIDC - Reino da Identidade Federada
# Visualize a história completa em: [https://chmulato.github.io/reino_oidc/](https://chmulato.github.io/reino_oidc/)

Este projeto é um material **aberto e lúdico** para aprendizado sobre **OAuth 2.1** e **OpenID Connect (OIDC)**, utilizando metáforas, narrativa épica e personagens cativantes para facilitar a compreensão dos conceitos de autenticação e autorização modernos.

## 🎭 Objetivo

O objetivo é tornar o entendimento de protocolos de identidade federada mais acessível e memorável, por meio de:

- **Personagens únicos** que representam conceitos técnicos
- **Histórias envolventes** que explicam fluxos complexos 
- **Exemplos práticos** com código funcional
- **Troubleshooting gamificado** para problemas comuns
- **Conteúdo interativo** para diferentes níveis de conhecimento

Todo o conteúdo pode ser utilizado livremente para fins educacionais.

## 🏰 Estrutura do Projeto

### 📖 Narrativa Principal

- **[Página Inicial](index.html)** - Portal de entrada para o Reino
- **[Personagens](personagens.html)** - Conheça os habitantes do Reino da Identidade Federada
- **[História Parte I](historia_p1.html)** - A Era das Senhas e a Chegada de Lady OAuth
- **[História Parte II](historia_p2.html)** - A Era da Confiança e o Mago OIDC  
- **[História Parte III](historia_p3.html)** - A Nova Ordem Digital e a Aprendiz Devia
- **[Conclusão](conclusao.html)** - As lições aprendidas e o futuro do Reino

### 🌟 Conteúdo Educativo Avançado

- **[Mundo do Conhecimento](mundo_do_conhecimento.html)** - Guia técnico completo com:
  - Mini-histórias para cada tópico usando os personagens
  - Conceitos desde básicos até avançados
  - Exemplos de código funcional em JavaScript e Python
  - Troubleshooting com cenários do Reino
  - Ferramentas e recursos recomendados
  - Boas práticas de segurança

- **[Glossário Ilustrado](glossario.html)** - Dicionário completo com:
  - Explicações para leigos e técnicos
  - Metáforas usando personagens do Reino
  - Definições precisas e exemplos de código
  - Índice alfabético para consulta rápida
  - Termos OAuth 2.1, OIDC, JWT e segurança

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

- **[Documentação em Markdown](md/)** - Versões texto das histórias
- **[Assets](assets/)** - Estilos CSS customizados
- **[Imagens](img/)** - Ilustrações dos personagens e cenários

## 🚀 Como Usar

### Para Estudantes/Desenvolvedores

1. Comece pela **[página inicial](index.html)** para entender o contexto
2. Conheça os **[personagens](personagens.html)** - cada um representa um conceito técnico
3. Acompanhe a **narrativa sequencial** (Parte I → II → III)
4. Aprofunde-se no **[Mundo do Conhecimento](mundo_do_conhecimento.html)** para detalhes técnicos
5. Use as **mini-histórias** para lembrar de conceitos específicos

### Para Educadores

- Use os **personagens como metáforas** em suas aulas
- Aproveite as **histórias por seções** para explicar conceitos graduais
- Utilize os **exemplos de código** como material prático
- Adapte o **conteúdo lúdico** para diferentes audiências

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

## 🎯 Público-Alvo

- **Desenvolvedores** iniciantes em autenticação/autorização
- **Estudantes** de segurança digital e protocolos web
- **Arquitetos de software** que precisam implementar OIDC
- **Educadores** que buscam material didático criativo
- **Qualquer pessoa** curiosa sobre como funcionam os logins modernos

## 🆕 Novidades da Versão Atual

### Rex Token - O Renovador Eterno

- Novo personagem representando **Refresh Tokens**
- Integrado à narrativa das três partes da história
- Explicação completa sobre **ciclos de renovação**
- **Boas práticas** de armazenamento e rotação

### Mundo do Conhecimento Enriquecido

- **Mini-histórias** para cada tópico técnico
- **12 seções** cobrindo desde conceitos básicos até troubleshooting
- **Exemplos de código** funcionais e testados
- **Cenários de implementação** do mundo real
- **Glossário expandido** com contextos dos personagens

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

- [ ] **Personagens adicionais** (SAML, Session Management)
- [ ] **Histórias interativas** com escolhas do usuário
- [ ] **Versão em inglês** completa
- [ ] **Vídeos animados** dos personagens
- [ ] **Quiz interativo** para testar conhecimentos
- [ ] **Simulador de fluxos** OIDC visual

## 📜 Licença

Este projeto está sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub! ⭐**

*Feito com 💝 para a comunidade de desenvolvedores*

</div>