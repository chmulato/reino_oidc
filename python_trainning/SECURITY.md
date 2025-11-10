# 🔐 Configuração de Segurança - Python Training

## ⚠️ IMPORTANTE: Repositório Público

Este repositório é **público** no GitHub. Por isso, informações sensíveis como senhas **NUNCA** devem ser commitadas.

## 🛡️ Sistema de Proteção Implementado

### Arquivos Protegidos pelo .gitignore

Os seguintes arquivos/pastas **NÃO** são versionados:

```
secrets.txt                              # Senha em texto plano
python_trainning/testes/testar_senha.py  # Script com senha hardcoded
python_trainning/testes/certificados/    # Certificados gerados
*.png (exceto assets/img/)               # Imagens de certificados
```

### Arquivos Seguros (Versionados)

Estes arquivos **SÃO** versionados mas **não contêm a senha**:

```
assets/js/scripts.js                     # ✅ Contém apenas hash SHA-256
testes/gerar_certificado.py              # ✅ Contém apenas hash SHA-256
secrets.txt.example                      # ✅ Apenas exemplo, sem senha real
```

## 📝 Como Configurar a Senha

### 1. Criar arquivo de senha local

```bash
# Copiar o exemplo
cp python_trainning/secrets.txt.example python_trainning/secrets.txt

# Editar e definir sua senha
# Exemplo: password=minhasenha123
```

### 2. Gerar o hash SHA-256 da sua senha

**Opção A - Python:**
```python
import hashlib
senha = "SUA_SENHA_AQUI"
hash_sha256 = hashlib.sha256(senha.encode()).hexdigest()
print(f"Hash SHA-256: {hash_sha256}")
```

**Opção B - Terminal (Linux/Mac):**
```bash
echo -n "SUA_SENHA_AQUI" | sha256sum
```

**Opção C - PowerShell (Windows):**
```powershell
$senha = "SUA_SENHA_AQUI"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($senha)
$hash = [System.Security.Cryptography.SHA256]::Create().ComputeHash($bytes)
[System.BitConverter]::ToString($hash).Replace("-", "").ToLower()
```

**Opção D - Online:**
https://emn178.github.io/online-tools/sha256.html

### 3. Atualizar o hash nos arquivos

**Arquivo 1: `assets/js/scripts.js` (linha ~277)**
```javascript
const correctPasswordHash = 'SEU_HASH_SHA256_AQUI';
```

**Arquivo 2: `testes/gerar_certificado.py` (linha ~376)**
```python
HASH_ESPERADO = "SEU_HASH_SHA256_AQUI"
```

## 🔒 Boas Práticas de Segurança

### ✅ FAÇA:

- ✅ Use senhas fortes (mínimo 12 caracteres)
- ✅ Mantenha `secrets.txt` apenas localmente
- ✅ Verifique se o `.gitignore` está funcionando:
  ```bash
  git status
  # secrets.txt NÃO deve aparecer
  ```
- ✅ Use hashes SHA-256 no código versionado
- ✅ Atualize a senha periodicamente

### ❌ NÃO FAÇA:

- ❌ Nunca commite `secrets.txt`
- ❌ Nunca coloque senha em comentários
- ❌ Nunca compartilhe senha em issues/PRs
- ❌ Nunca use senhas fracas como "123456"
- ❌ Nunca deixe senha em texto plano no código

## 🔍 Verificação de Segurança

Execute estes comandos para garantir que nenhuma senha foi exposta:

```bash
# Verificar se secrets.txt está ignorado
git status | grep secrets.txt
# Deve retornar vazio

# Buscar por possíveis senhas hardcoded
grep -r "password=" --exclude-dir=.git --exclude="*.md"
# Deve mostrar apenas secrets.txt.example

# Verificar histórico do Git
git log --all --full-history --source --oneline -- secrets.txt
# Deve retornar vazio
```

## 🚨 Em Caso de Exposição Acidental

Se você acidentalmente commitou a senha:

1. **Mude a senha IMEDIATAMENTE**
2. Gere um novo hash SHA-256
3. Atualize os arquivos JavaScript e Python
4. Remova o arquivo do histórico do Git:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch python_trainning/secrets.txt" \
   --prune-empty --tag-name-filter cat -- --all
   ```
5. Force push (cuidado!):
   ```bash
   git push origin --force --all
   ```

## 📚 Recursos Adicionais

- [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)
- [SHA-256 Hash Generator](https://emn178.github.io/online-tools/sha256.html)

## 📞 Suporte

Para dúvidas sobre segurança:
- **Email**: contato@caracore.com.br
- **Site**: www.caracore.com.br

---

**Última atualização**: Novembro 2025  
**Versão**: 1.0.0
