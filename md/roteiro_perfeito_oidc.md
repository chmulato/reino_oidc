# Roteiro Técnico para Validação do Caminho Feliz OIDC com OAuth 2.1

Segue um roteiro técnico enumerado para validar o caminho feliz do fluxo OpenID Connect (OIDC) utilizando OAuth 2.1 dentro da aplicação existente:

## 1. Pré-requisitos

1.1. Aplicação cliente configurada com client_id, redirect_uri registrado e autorizado no provedor OIDC.

1.2. Provedor OIDC configurado para suportar OAuth 2.1 (authorization code flow com PKCE).

1.3. Ambiente de testes ou homologação com usuário(s) válidos cadastrados.

## 2. Início da autenticação

2.1. Acesse a aplicação e acione o botão/link de login.

2.2. Verifique no navegador se o redirecionamento para o endpoint de autorização do IdP ocorre com os parâmetros corretos:
- `response_type=code`
- `scope` contendo ao menos "openid"
- `client_id` correto
- `redirect_uri` exato e registrado
- Código PKCE (`code_challenge` e `code_challenge_method`)

## 3. Autenticação e consentimento

3.1. Realize login no IdP com credenciais válidas.

3.2. Confirme se a tela de consentimento (se houver) é apresentada e aceita.

## 4. Recebimento do código de autorização

4.1. Certifique-se que após o login o navegador redireciona para o `redirect_uri` com o parâmetro `code`.

4.2. Validar que não há erros no redirecionamento.

## 5. Troca do código por tokens

5.1. Confira a chamada de backend do cliente para o endpoint de token do IdP, passando:
- O código de autorização recebido
- O código PKCE original (`code_verifier`)
- Client credentials (se aplicável)

5.2. Verifique a resposta contém:
- ID Token (JWT contendo informações do usuário)
- Access Token
- Refresh Token (se habilitado)

## 6. Validação dos tokens

6.1. No cliente, valide:
- Assinatura JWT do ID Token
- Claims essenciais: `iss` (issuer), `aud` (audience), `exp` (expiry), `sub` (subject)
- Confirme scope e escopo "openid"

## 7. Estabelecer sessão

7.1. Crie a sessão do usuário com os dados do ID Token.

7.2. Garanta que a aplicação está autenticando o usuário conforme esperado.

## 8. Acesso protegido

8.1. Use o Access Token para realizar chamadas autenticadas a recursos protegidos (APIs).

8.2. Verifique respostas bem-sucedidas e permissões corretas.

## 9. Renovação (opcional)

9.1. Teste refresh token para garantir renovação segura sem pedir login novamente.

## 10. Logs e erros

10.1. Analise logs da aplicação e do provedor para quaisquer falhas ou alertas.

10.2. Assegure mensagens e comportamento consistente em todos os passos.

## Checklist Final

- [ ] O fluxo segue padrão Authorization Code com PKCE
- [ ] Tokens são recebidos, validados e utilizados corretamente
- [ ] Usuário autenticado e autorizado com sucesso
- [ ] Não há exposição de tokens sensíveis em URLs ou logs
- [ ] Fluxo testado em condições normais (caminho feliz)

## Conclusão

Com esse roteiro enumerado, é possível validar técnica e funcionalmente se o caminho feliz do fluxo OIDC + OAuth 2.1 está corretamente implementado dentro da aplicação atual.