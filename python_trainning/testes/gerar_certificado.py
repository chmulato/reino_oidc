"""
Script para gerar certificados do Python Training
Cara Core Informática - www.caracore.com.br

IMPORTANTE: Este script simula o comportamento da interface web,
incluindo autenticação por senha SHA-256 (mesma do site).

Uso: python gerar_certificado.py
"""

from PIL import Image, ImageDraw, ImageFont
from datetime import datetime
import os
import hashlib
import getpass

class GeradorCertificado:
    def __init__(self):
        self.largura = 1920
        self.altura = 1358  # Formato A4 landscape em pixels (300 DPI)
        self.empresa = "Cara Core Informática"
        self.cnpj = "23.969.028/0001-37"
        self.razao_social = "Christian Vladimir Uhdre Mulato"
        self.site = "www.caracore.com.br"
        self.logo_path = "../assets/img/logo.png"
        self.logo_small_path = "../assets/img/logo_p.png"
        
    def gerar_codigo_verificacao(self, nome, data):
        """Gera código único de verificação (mesmo algoritmo do frontend)"""
        texto = f"{nome}{data}CaraCoreInformática"
        hash_obj = hashlib.sha256(texto.encode())
        codigo_curto = hash_obj.hexdigest()[:8].upper()
        return f"PT-2025-{codigo_curto}"
    
    def criar_certificado(self, nome_aluno, data_conclusao=None, email=""):
        """Cria o certificado em formato PNG"""
        
        if data_conclusao is None:
            data_conclusao = datetime.now().strftime("%d/%m/%Y")
        
        # Criar imagem base com gradiente
        img = Image.new('RGB', (self.largura, self.altura), color='white')
        draw = ImageDraw.Draw(img)
        
        # Adicionar gradiente de fundo (simulado com retângulos)
        for i in range(self.altura):
            r = int(245 + (i / self.altura) * 10)
            g = int(250 + (i / self.altura) * 5)
            b = 255
            draw.rectangle([(0, i), (self.largura, i+1)], fill=(r, g, b))
        
        # Carregar e adicionar logotipo principal (topo) com efeito de marca d'água
        try:
            logo = Image.open(self.logo_path)
            # Redimensionar logo para 200px de largura mantendo proporção
            logo_width = 200
            aspect_ratio = logo.height / logo.width
            logo_height = int(logo_width * aspect_ratio)
            logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
            
            # Aplicar efeito de marca d'água (30% de opacidade)
            if logo.mode != 'RGBA':
                logo = logo.convert('RGBA')
            
            # Criar uma nova imagem com transparência ajustada
            logo_watermark = Image.new('RGBA', logo.size, (0, 0, 0, 0))
            for x in range(logo.width):
                for y in range(logo.height):
                    r, g, b, a = logo.getpixel((x, y))
                    # Reduzir opacidade para 30% (77 de 255)
                    logo_watermark.putpixel((x, y), (r, g, b, int(a * 0.3)))
            
            # Posicionar logo no centro superior
            logo_x = (self.largura - logo_width) // 2
            logo_y = 100
            
            # Colar com transparência
            img.paste(logo_watermark, (logo_x, logo_y), logo_watermark)
                
        except Exception as e:
            print(f"⚠️ Aviso: Não foi possível carregar o logo principal: {e}")
        
        # Borda decorativa
        margem = 80
        draw.rectangle(
            [(margem, margem), (self.largura - margem, self.altura - margem)],
            outline='#4A90E2',
            width=8
        )
        
        draw.rectangle(
            [(margem + 20, margem + 20), (self.largura - margem - 20, self.altura - margem - 20)],
            outline='#50C878',
            width=4
        )
        
        # Tentar carregar fontes, se não conseguir, usar fonte padrão
        try:
            font_titulo = ImageFont.truetype("arial.ttf", 80)
            font_subtitulo = ImageFont.truetype("arial.ttf", 40)
            font_nome = ImageFont.truetype("arialbd.ttf", 100)
            font_texto = ImageFont.truetype("arial.ttf", 32)
            font_pequeno = ImageFont.truetype("arial.ttf", 24)
        except:
            print("⚠️  Fonte Arial não encontrada, usando fonte padrão")
            font_titulo = ImageFont.load_default()
            font_subtitulo = ImageFont.load_default()
            font_nome = ImageFont.load_default()
            font_texto = ImageFont.load_default()
            font_pequeno = ImageFont.load_default()
        
        # Título
        titulo = "🎓 CERTIFICADO DE CONCLUSÃO"
        bbox = draw.textbbox((0, 0), titulo, font=font_titulo)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 150),
            titulo,
            fill='#4A90E2',
            font=font_titulo
        )
        
        # Subtítulo
        subtitulo = "Python Training - Curso Completo de Desenvolvimento"
        bbox = draw.textbbox((0, 0), subtitulo, font=font_subtitulo)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 260),
            subtitulo,
            fill='#333333',
            font=font_subtitulo
        )
        
        # Decoração
        decoracao = "✨ ⭐ ✨"
        bbox = draw.textbbox((0, 0), decoracao, font=font_subtitulo)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 330),
            decoracao,
            fill='#FFB84D',
            font=font_subtitulo
        )
        
        # Texto "Certificamos que"
        texto_cert = "Certificamos que"
        bbox = draw.textbbox((0, 0), texto_cert, font=font_texto)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 420),
            texto_cert,
            fill='#333333',
            font=font_texto
        )
        
        # Nome do aluno (destaque)
        bbox = draw.textbbox((0, 0), nome_aluno, font=font_nome)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 480),
            nome_aluno,
            fill='#4A90E2',
            font=font_nome
        )
        
        # Linha decorativa sob o nome
        linha_y = 600
        draw.line(
            [(self.largura/2 - 300, linha_y), (self.largura/2 + 300, linha_y)],
            fill='#50C878',
            width=3
        )
        
        # Texto descritivo
        texto_desc = "concluiu com êxito o Python Training, curso abrangente de"
        bbox = draw.textbbox((0, 0), texto_desc, font=font_texto)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 640),
            texto_desc,
            fill='#333333',
            font=font_texto
        )
        
        texto_desc2 = "programação Python com carga horária de 40 horas, abordando:"
        bbox = draw.textbbox((0, 0), texto_desc2, font=font_texto)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 680),
            texto_desc2,
            fill='#333333',
            font=font_texto
        )
        
        # Módulos (duas colunas)
        modulos_esq = [
            "✅ Fundamentos da Programação",
            "✅ Desenvolvimento de Jogos com Pygame",
            "✅ Projetos Interativos (Minecraft + Animações)"
        ]
        
        modulos_dir = [
            "✅ Inteligência Artificial e Automação",
            "✅ Segurança Digital e Autenticação (OIDC)",
            "✅ Boas Práticas e Portfólio Profissional"
        ]
        
        y_modulos = 750
        x_esq = 200
        x_dir = self.largura / 2 + 50
        
        for i, modulo in enumerate(modulos_esq):
            draw.text(
                (x_esq, y_modulos + i * 40),
                modulo,
                fill='#333333',
                font=font_pequeno
            )
        
        for i, modulo in enumerate(modulos_dir):
            draw.text(
                (x_dir, y_modulos + i * 40),
                modulo,
                fill='#333333',
                font=font_pequeno
            )
        
        # Data de conclusão
        texto_data = f"Concluído em: {data_conclusao}"
        bbox = draw.textbbox((0, 0), texto_data, font=font_texto)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, 950),
            texto_data,
            fill='#333333',
            font=font_texto
        )
        
        # Assinatura
        y_assinatura = 1050
        
        # Linha de assinatura
        draw.line(
            [(self.largura/2 - 200, y_assinatura), (self.largura/2 + 200, y_assinatura)],
            fill='#333333',
            width=2
        )
        
        # Texto da assinatura
        assinatura = self.empresa
        bbox = draw.textbbox((0, 0), assinatura, font=font_texto)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, y_assinatura + 10),
            assinatura,
            fill='#333333',
            font=font_texto
        )
        
        cargo = "Coordenação do Curso"
        bbox = draw.textbbox((0, 0), cargo, font=font_pequeno)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, y_assinatura + 50),
            cargo,
            fill='#666666',
            font=font_pequeno
        )
        
        # Site
        site_texto = self.site
        bbox = draw.textbbox((0, 0), site_texto, font=font_pequeno)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, y_assinatura + 85),
            site_texto,
            fill='#4A90E2',
            font=font_pequeno
        )
        
        # CNPJ e Razão Social (rodapé)
        rodape_y = self.altura - 150
        
        # Carregar e adicionar logo pequeno (rodapé) com efeito de marca d'água
        try:
            logo_small = Image.open(self.logo_small_path)
            # Redimensionar logo pequeno para 80px de largura mantendo proporção
            logo_small_width = 80
            aspect_ratio_small = logo_small.height / logo_small.width
            logo_small_height = int(logo_small_width * aspect_ratio_small)
            logo_small = logo_small.resize((logo_small_width, logo_small_height), Image.Resampling.LANCZOS)
            
            # Aplicar efeito de marca d'água (30% de opacidade)
            if logo_small.mode != 'RGBA':
                logo_small = logo_small.convert('RGBA')
            
            # Criar uma nova imagem com transparência ajustada
            logo_small_watermark = Image.new('RGBA', logo_small.size, (0, 0, 0, 0))
            for x in range(logo_small.width):
                for y in range(logo_small.height):
                    r, g, b, a = logo_small.getpixel((x, y))
                    # Reduzir opacidade para 30% (77 de 255)
                    logo_small_watermark.putpixel((x, y), (r, g, b, int(a * 0.3)))
            
            # Posicionar logo pequeno no canto inferior esquerdo
            logo_small_x = 120
            logo_small_y = rodape_y - 20
            
            # Colar com transparência
            img.paste(logo_small_watermark, (logo_small_x, logo_small_y), logo_small_watermark)
                
        except Exception as e:
            print(f"⚠️ Aviso: Não foi possível carregar o logo pequeno: {e}")
        
        # Texto do rodapé com CNPJ e Razão Social
        rodape_texto1 = self.razao_social
        bbox = draw.textbbox((0, 0), rodape_texto1, font=font_pequeno)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, rodape_y),
            rodape_texto1,
            fill='#333333',
            font=font_pequeno
        )
        
        rodape_texto2 = f"CNPJ: {self.cnpj}"
        bbox = draw.textbbox((0, 0), rodape_texto2, font=font_pequeno)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, rodape_y + 30),
            rodape_texto2,
            fill='#666666',
            font=font_pequeno
        )
        
        # Código de verificação
        codigo = self.gerar_codigo_verificacao(nome_aluno, data_conclusao)
        texto_codigo = f"Código de Verificação: {codigo}"
        bbox = draw.textbbox((0, 0), texto_codigo, font=font_pequeno)
        w = bbox[2] - bbox[0]
        draw.text(
            ((self.largura - w) / 2, self.altura - 100),
            texto_codigo,
            fill='#999999',
            font=font_pequeno
        )
        
        return img, codigo

    def salvar_certificado(self, nome_aluno, data_conclusao=None, email="", pasta_saida="certificados"):
        """Gera e salva o certificado"""
        
        # Criar pasta de saída se não existir
        if not os.path.exists(pasta_saida):
            os.makedirs(pasta_saida)
        
        # Gerar certificado
        img, codigo = self.criar_certificado(nome_aluno, data_conclusao, email)
        
        # Nome do arquivo
        nome_arquivo = f"certificado_{nome_aluno.replace(' ', '_').lower()}_{codigo}.png"
        caminho_completo = os.path.join(pasta_saida, nome_arquivo)
        
        # Salvar
        img.save(caminho_completo, 'PNG', dpi=(300, 300))
        
        return caminho_completo, codigo


def verificar_senha():
    """Verifica a senha de administrador usando SHA-256 (mesmo algoritmo do frontend)"""
    import getpass
    
    # Hash SHA-256 da senha administrativa
    # A senha original está armazenada em secrets.txt (não versionado)
    HASH_ESPERADO = "138a091551bfb09a921f8af3b0b4c7bfc3f25cde6b0fd390ab00e00388e84390"
    
    print("🔐 AUTENTICAÇÃO NECESSÁRIA")
    print("=" * 60)
    
    tentativas = 3
    while tentativas > 0:
        senha = getpass.getpass("Digite a senha de administrador: ")
        
        # Gerar hash SHA-256 da senha digitada
        hash_digitado = hashlib.sha256(senha.encode()).hexdigest()
        
        if hash_digitado == HASH_ESPERADO:
            print("✅ Senha correta! Acesso autorizado.\n")
            return True
        else:
            tentativas -= 1
            if tentativas > 0:
                print(f"❌ Senha incorreta. Você tem {tentativas} tentativa(s) restante(s).\n")
            else:
                print("❌ Número máximo de tentativas excedido.")
                print("🚫 Acesso negado.\n")
                return False
    
    return False


def main():
    """Função principal para testar a geração de certificados
    
    ⚠️ NOTA: Este script simula o comportamento da interface web,
    incluindo autenticação por senha SHA-256.
    """
    
    print("=" * 60)
    print("🎓 GERADOR DE CERTIFICADOS - PYTHON TRAINING")
    print(f"   {GeradorCertificado().razao_social}")
    print(f"   CNPJ: {GeradorCertificado().cnpj}")
    print(f"   {GeradorCertificado().site}")
    print("=" * 60)
    print()
    
    # Verificar senha antes de prosseguir
    if not verificar_senha():
        print("\n❌ Operação cancelada por falta de autenticação.")
        return
    
    print("=" * 60)
    print()
    
    gerador = GeradorCertificado()
    
    # Exemplos de certificados para teste
    alunos_teste = [
        {"nome": "João Silva", "email": "joao@exemplo.com"},
        {"nome": "Maria Santos", "email": "maria@exemplo.com"},
        {"nome": "Pedro Oliveira", "email": "pedro@exemplo.com"}
    ]
    
    print("Gerando certificados de teste...\n")
    
    for i, aluno in enumerate(alunos_teste, 1):
        print(f"[{i}/{len(alunos_teste)}] Gerando certificado para {aluno['nome']}...")
        
        try:
            caminho, codigo = gerador.salvar_certificado(
                nome_aluno=aluno['nome'],
                email=aluno['email']
            )
            
            print(f"   ✅ Certificado salvo: {caminho}")
            print(f"   🔐 Código de verificação: {codigo}")
            print()
            
        except Exception as e:
            print(f"   ❌ Erro ao gerar certificado: {e}")
            print()
    
    print("=" * 60)
    print("✨ Geração concluída!")
    print(f"📁 Certificados salvos na pasta: certificados/")
    print("=" * 60)


if __name__ == "__main__":
    import sys
    
    # Verificar se foi passado argumento --no-auth para testes automatizados
    if "--no-auth" in sys.argv:
        print("\n⚠️  MODO DE TESTE: Autenticação desabilitada\n")
        # Executar sem verificação de senha (remover --no-auth da lista)
        sys.argv.remove("--no-auth")
        
        # Criar versão simplificada do main sem autenticação
        print("=" * 60)
        print("🎓 GERADOR DE CERTIFICADOS - PYTHON TRAINING")
        print(f"   {GeradorCertificado().razao_social}")
        print(f"   CNPJ: {GeradorCertificado().cnpj}")
        print(f"   {GeradorCertificado().site}")
        print("=" * 60)
        print()
        
        gerador = GeradorCertificado()
        alunos_teste = [
            {"nome": "João Silva", "email": "joao@exemplo.com"},
            {"nome": "Maria Santos", "email": "maria@exemplo.com"},
            {"nome": "Pedro Oliveira", "email": "pedro@exemplo.com"}
        ]
        
        print("Gerando certificados de teste...\n")
        
        for i, aluno in enumerate(alunos_teste, 1):
            print(f"[{i}/{len(alunos_teste)}] Gerando certificado para {aluno['nome']}...")
            try:
                caminho, codigo = gerador.salvar_certificado(
                    nome_aluno=aluno['nome'],
                    email=aluno['email']
                )
                print(f"   ✅ Certificado salvo: {caminho}")
                print(f"   🔐 Código de verificação: {codigo}")
                print()
            except Exception as e:
                print(f"   ❌ Erro ao gerar certificado: {e}")
                print()
        
        print("=" * 60)
        print("✨ Geração concluída!")
        print(f"📁 Certificados salvos na pasta: certificados/")
        print("=" * 60)
    else:
        # Modo normal com autenticação
        main()
