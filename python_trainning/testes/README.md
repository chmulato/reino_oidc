# 🧪 Script de Teste - Gerador de Certificados

## Cara Core Informática

**Razão Social:** Christian Vladimir Uhdre Mulato  
**CNPJ:** 23.969.028/0001-37  
**Site:** [www.caracore.com.br](https://www.caracore.com.br)

---

⚠️ **IMPORTANTE**: Este script é apenas para **testes e desenvolvimento**.  
A geração oficial de certificados é feita através da interface web em `conclusao.html`, que inclui:
- 🔐 Autenticação por senha criptografada (SHA-256)
- 🖼️ Logotipos da empresa integrados
- 🖨️ Impressão direta em formato A4 paisagem
- 📱 Interface responsiva e amigável

---

## Sobre o Script

Este script Python gera certificados personalizados em formato PNG de alta resolução (300 DPI) para os concluintes do **Python Training**.

**Recursos:**

- ✅ Logotipos Cara Core (topo e rodapé)
- ✅ Dados da empresa (CNPJ, Razão Social)
- ✅ Código de verificação único SHA-256
- ✅ Design profissional com bordas decorativas
- ✅ 6 módulos do curso (40 horas totais)
- ✅ Formato A4 paisagem @ 300 DPI

## Requisitos

```bash
pip install pillow
```

## Como Usar

### 🔐 Modo Normal (Com Autenticação)

Execute o script e digite a senha quando solicitado:

```bash
python gerar_certificado.py
```

O script solicitará a senha de administrador (SHA-256) e, se correta, gerará 3 certificados de exemplo.

**Segurança:**
- ✅ Hash SHA-256 (mesmo algoritmo do site)
- ✅ 3 tentativas permitidas
- ✅ Senha nunca exibida na tela (getpass)

### 🧪 Modo Teste (Sem Autenticação)

Para testes automatizados, use o argumento `--no-auth`:

```bash
python gerar_certificado.py --no-auth
```

⚠️ **Atenção**: Este modo bypassa a autenticação e deve ser usado apenas em ambiente de desenvolvimento.

Isso irá criar uma pasta `certificados/` com 3 exemplos.

### Uso Programático (Requer importação direta)

**Nota**: O uso programático não requer autenticação, pois assume que você já tem acesso ao código.

```python
from gerar_certificado import GeradorCertificado

# Criar instância do gerador
gerador = GeradorCertificado()

# Gerar e salvar certificado
caminho, codigo = gerador.salvar_certificado(
    nome_aluno="Seu Nome Completo",
    data_conclusao="10/11/2025",  # Opcional, usa data atual se não informado
    email="seuemail@exemplo.com"  # Opcional
)

print(f"Certificado salvo em: {caminho}")
print(f"Código de verificação: {codigo}")
```

### Gerar apenas a imagem (sem salvar)

```python
from gerar_certificado import GeradorCertificado

gerador = GeradorCertificado()
img, codigo = gerador.criar_certificado("João Silva")

# Fazer algo com a imagem (img é um objeto PIL Image)
img.show()  # Mostra no visualizador padrão
```

## 🔐 Sistema de Autenticação

### Como Funciona

O script utiliza **SHA-256** para verificar a senha, idêntico ao sistema do site:

1. **Senha original**: Armazenada em `secrets.txt` (não versionado)
2. **Hash SHA-256**: `138a091551bfb09a921f8af3b0b4c7bfc3f25cde6b0fd390ab00e00388e84390`
3. **Verificação**: Compara o hash da senha digitada com o hash esperado

### Testar Verificação

Use o script `testar_senha.py` para verificar o funcionamento:

```bash
python testar_senha.py
```

Este script mostra:
- ✅ Hash gerado vs. hash esperado
- ✅ Comparação de hashes
- ✅ Testes com senhas incorretas

### Segurança

- 🔒 Senha nunca armazenada em texto plano no código
- 🔒 Hash SHA-256 de 256 bits
- 🔒 Getpass oculta a senha durante digitação
- 🔒 Limite de 3 tentativas
- 🔒 Mesmo algoritmo usado no frontend (conclusao.html)

## Características do Certificado

- **Formato:** PNG em alta resolução (1920x1358 pixels)
- **DPI:** 300 (qualidade para impressão)
- **Elementos:**
  - Nome do aluno em destaque
  - Data de conclusão
  - Lista dos 6 módulos concluídos
  - Carga horária (40 horas)
  - Código único de verificação (MD5)
  - Assinatura da Cara Core Informática
  - Link do site

## Estrutura de Pastas

```text
testes/
├── gerar_certificado.py    # Script principal
├── README.md               # Este arquivo
└── certificados/           # Pasta criada automaticamente
    ├── certificado_joao_silva_PT-2025-XXXXXXXX.png
    ├── certificado_maria_santos_PT-2025-XXXXXXXX.png
    └── ...
```

## Código de Verificação

Cada certificado gera um código único no formato:

```text
PT-2025-XXXXXXXX
```

O código é gerado usando MD5 hash de:

- Nome do aluno
- Data de conclusão
- Nome da empresa

Isso garante que cada certificado é único e verificável.

## Personalização

### Alterar cores

Edite as cores no método `criar_certificado()`:

```python
# Cores atuais:
'#4A90E2'  # Azul primário (título, nome)
'#50C878'  # Verde secundário (bordas)
'#FFB84D'  # Laranja (decoração)
```

### Alterar fontes

Modifique os tamanhos no bloco de fontes:

```python
font_titulo = ImageFont.truetype("arial.ttf", 80)      # Título
font_nome = ImageFont.truetype("arialbd.ttf", 100)     # Nome do aluno
font_texto = ImageFont.truetype("arial.ttf", 32)       # Textos gerais
```

### Alterar empresa/site

Modifique no construtor `__init__`:

```python
self.empresa = "Cara Core Informática"
self.site = "www.caracore.com.br"
```

## Exemplo de Saída

```text
============================================================
🎓 GERADOR DE CERTIFICADOS - PYTHON TRAINING
   Cara Core Informática - www.caracore.com.br
============================================================

Gerando certificados de teste...

[1/3] Gerando certificado para João Silva...
   ✅ Certificado salvo: certificados/certificado_joao_silva_PT-2025-A1B2C3D4.png
   🔐 Código de verificação: PT-2025-A1B2C3D4

[2/3] Gerando certificado para Maria Santos...
   ✅ Certificado salvo: certificados/certificado_maria_santos_PT-2025-E5F6G7H8.png
   🔐 Código de verificação: PT-2025-E5F6G7H8

[3/3] Gerando certificado para Pedro Oliveira...
   ✅ Certificado salvo: certificados/certificado_pedro_oliveira_PT-2025-I9J0K1L2.png
   🔐 Código de verificação: PT-2025-I9J0K1L2

============================================================
✨ Geração concluída!
📁 Certificados salvos na pasta: certificados/
============================================================
```

## Suporte

**Cara Core Informática**  

Site: [www.caracore.com.br]

---

Desenvolvido para o projeto Python Training
