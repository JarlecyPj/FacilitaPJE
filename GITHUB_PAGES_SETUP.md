# 🚀 Configuração do FacilitaPJE para GitHub Pages

## 📁 Estrutura Organizada

O projeto foi reorganizado seguindo as melhores práticas para GitHub Pages:

```
FacilitaPJE/
├── index.html                    # Página principal
├── README.md                     # Documentação
├── .gitignore                    # Arquivos ignorados
├── .nojekyll                     # Configuração GitHub Pages
├── _config.yml                   # Configuração Jekyll
├── assets/                       # Recursos organizados
│   ├── css/
│   │   └── styles.css           # Estilos CSS
│   ├── js/
│   │   └── script.js            # JavaScript
│   ├── images/                  # Imagens do PJe
│   │   ├── PJE Home.png
│   │   ├── PJE login.png
│   │   ├── PJE Menu Rapido.png
│   │   └── ... (15 imagens)
│   └── videos/                  # Vídeos tutoriais
│       └── primeiro acesso/
│           └── Primeiro acesso PJE.mp4
└── GITHUB_PAGES_SETUP.md        # Este arquivo
```

## 🔧 Configuração do GitHub Pages

### 1. **Upload dos Arquivos**

**Opção A - Upload Manual:**
1. Acesse: https://github.com/JarlecyPj/FacilitaPJE
2. Clique em **"Add file"** → **"Upload files"**
3. Arraste e solte todos os arquivos da pasta organizada
4. Commit: `"Initial commit: FacilitaPJE - Estrutura organizada para GitHub Pages"`

**Opção B - Git (se instalado):**
```bash
git init
git add .
git commit -m "Initial commit: FacilitaPJE - Estrutura organizada para GitHub Pages"
git branch -M main
git remote add origin https://github.com/JarlecyPj/FacilitaPJE.git
git push -u origin main
```

### 2. **Ativar GitHub Pages**

1. Vá para **Settings** do repositório
2. Role até **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch
5. Clique em **Save**

### 3. **Configurações Adicionais**

**Branch Protection (Recomendado):**
1. Vá para **Settings** → **Branches**
2. Clique em **Add rule**
3. Configure proteção para a branch main

**Custom Domain (Opcional):**
1. Em **Pages**, adicione um domínio personalizado
2. Configure DNS conforme instruções

## 🌐 Acesso ao Site

Após a configuração, o site estará disponível em:
- **URL Principal**: https://jarlecypj.github.io/FacilitaPJE/
- **Tempo de Deploy**: 1-10 minutos após push

## ✅ Verificações Pós-Deploy

### 1. **Teste de Funcionalidades**
- [ ] Página carrega corretamente
- [ ] Menu de navegação funciona
- [ ] Imagens carregam na galeria
- [ ] Modal de imagens funciona
- [ ] Vídeo reproduz no modal
- [ ] Design responsivo funciona

### 2. **Teste de Performance**
- [ ] Site carrega rapidamente
- [ ] Imagens otimizadas
- [ ] Vídeos carregam corretamente
- [ ] Sem erros no console

### 3. **Teste de Compatibilidade**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile (iOS/Android)

## 🔧 Solução de Problemas

### **Imagens não carregam:**
- Verifique se a pasta `assets/images/` foi enviada
- Confirme os caminhos no JavaScript
- Teste URLs diretas das imagens

### **Vídeo não reproduz:**
- Verifique se a pasta `assets/videos/` foi enviada
- Confirme o caminho no HTML
- Teste URL direta do vídeo

### **CSS não aplica:**
- Verifique se `assets/css/styles.css` foi enviado
- Confirme o caminho no HTML
- Limpe cache do navegador

### **JavaScript não funciona:**
- Verifique se `assets/js/script.js` foi enviado
- Confirme o caminho no HTML
- Verifique console para erros

## 📊 Monitoramento

### **GitHub Pages Status:**
- Acesse: https://github.com/JarlecyPj/FacilitaPJE/actions
- Verifique status dos deploys

### **Analytics (Opcional):**
- Adicione Google Analytics
- Configure GitHub Pages analytics
- Monitore performance

## 🚀 Melhorias Futuras

### **Performance:**
- [ ] Minificar CSS/JS
- [ ] Otimizar imagens
- [ ] Implementar lazy loading
- [ ] Adicionar service worker

### **SEO:**
- [ ] Meta tags otimizadas
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph tags

### **Funcionalidades:**
- [ ] Mais tutoriais em vídeo
- [ ] Sistema de busca
- [ ] Modo escuro
- [ ] PWA

## 📞 Suporte

Se encontrar problemas:
1. Verifique este guia
2. Consulte a documentação do GitHub Pages
3. Abra uma issue no repositório
4. Entre em contato via formulário do site

---

**FacilitaPJE** - Estrutura otimizada para GitHub Pages 🚀
