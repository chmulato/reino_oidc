# Python Training Development Server

## Como usar

### Opção 1: Executar diretamente
```bash
# Na pasta raiz do workspace
cd c:\dev\workspace_oidc
python server.py
```

### Opção 2: Windows Batch (duplo clique)
```
# Execute na pasta raiz: c:\dev\workspace_oidc
run_server.bat
```

## Acesso

- **Página Principal**: http://localhost:8000
- **Mundo do Conhecimento**: http://localhost:8000/mundo_do_conhecimento.html

## Recursos do Servidor

✅ **CORS habilitado** - Permite carregamento de arquivos JSON  
✅ **MIME types corretos** - CSS, JS, JSON servidos adequadamente  
✅ **Cache desabilitado** - Mudanças aparecem imediatamente  
✅ **Logging personalizado** - Vê quais arquivos estão sendo acessados  
✅ **Verificação de arquivos** - Alerta sobre arquivos em falta  

## Estrutura do Projeto

```
c:\dev\workspace_oidc\
├── server.py                          # Servidor de desenvolvimento
├── run_server.bat                     # Script para Windows
├── python_trainning/                  # Aplicação web
│   ├── index.html                     # Página inicial (auto-gerada)
│   ├── mundo_do_conhecimento.html     # Flashcards interativos
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css              # Estilos gerais
│   │   │   └── flashcards.css         # Estilos dos flashcards
│   │   ├── js/
│   │   │   └── flashcards.js          # Lógica dos flashcards
│   │   └── json/
│   │       └── flashcards.json        # Dados das perguntas
│   └── docs/                          # Documentação
│       ├── INDEX.md                   # Índice da documentação
│       └── README_SERVER.md           # Este arquivo
```

## Localização dos Arquivos

### Servidor (pasta raiz)
- `c:\dev\workspace_oidc\server.py`
- `c:\dev\workspace_oidc\run_server.bat`

### Aplicação Web
- `c:\dev\workspace_oidc\python_trainning\` (servido pelo servidor)

### Documentação
- `c:\dev\workspace_oidc\python_trainning\docs\` (esta pasta)

## Troubleshooting

### Porta 8000 em uso
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Linux/Mac  
lsof -ti:8000 | xargs kill -9
```

### Erro "Directory 'python_trainning' not found"
- Certifique-se de executar o servidor da pasta raiz: `c:\dev\workspace_oidc\`
- Não execute de dentro da pasta `python_trainning`

### Arquivos não carregam
1. Verifique se estão na pasta `python_trainning/`
2. Veja o console do servidor para logs de erro
3. Confirme a estrutura de diretórios
4. Verifique se os caminhos estão corretos

### Erro de CORS
- ✅ Este servidor já inclui headers CORS
- Não precisa de configuração adicional

## Comandos Úteis

### Iniciar servidor
```bash
# Método 1 - Linha de comando
cd c:\dev\workspace_oidc
python server.py

# Método 2 - Batch file (Windows)
# Duplo clique em run_server.bat
```

### Parar servidor
```
Ctrl + C (no terminal onde está rodando)
```

### Verificar se está funcionando
```bash
# Teste básico
curl http://localhost:8000

# Teste JSON
curl http://localhost:8000/assets/json/flashcards.json
```

## Desenvolvimento

Para modificar o servidor (`server.py`):

1. **Mudar porta**: Altere `PORT = 8000`
2. **Adicionar rotas**: Modifique o método `do_GET`
3. **Headers personalizados**: Modifique `end_headers`
4. **Logging**: Ajuste `log_message`
5. **Diretório base**: Modifique `directory="python_trainning"`

### Exemplo de modificação da porta:
```python
# Em server.py, linha ~XXX
PORT = 3000  # Mude de 8000 para 3000
```

## Segurança

⚠️ **APENAS PARA DESENVOLVIMENTO!**

Este servidor:
- Não tem autenticação
- Permite CORS de qualquer origem  
- Desabilita cache completamente
- Serve arquivos estáticos sem proteção
- Não deve ser usado em produção

Para produção, considere:
- Apache/Nginx
- Node.js com Express
- Python com Flask/Django
- IIS (Windows)

## Links Relacionados

- [Documentação Principal](INDEX.md)
- [Flashcards JSON](../assets/json/flashcards.json)
- [Aplicação Principal](../mundo_do_conhecimento.html)
