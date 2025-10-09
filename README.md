# FacilitaPJE - Sistema de Peticionamento Eletrônico

## 📋 Sobre o Projeto

O **FacilitaPJE** é um sistema web desenvolvido para simplificar e facilitar o processo de peticionamento eletrônico no PJe (Processo Judicial Eletrônico). O sistema oferece um guia completo e interativo com tutoriais visuais, passo a passo detalhado e recursos educativos para advogados e cidadãos.

## 🚀 Funcionalidades

### ✨ Principais Recursos

- **📖 Guia Passo a Passo Interativo**
  - Menu de seleção de tipo de processo (Inicial, Juntada, Consulta)
  - Galeria de imagens com visualização expandida
  - Navegação entre imagens com botões anterior/próximo
  - Controles de teclado (ESC, setas)

- **🎥 Tutoriais em Vídeo**
  - Modal de reprodução de vídeos
  - Vídeo tutorial "Primeiro Acesso ao PJe"
  - Interface responsiva para diferentes dispositivos

- **📱 Design Responsivo**
  - Otimizado para desktop, tablet e mobile
  - Interface moderna e intuitiva
  - Animações suaves e transições elegantes

- **🔍 Sistema de Consulta**
  - Guia completo para consulta de processos
  - Informações sobre processos em segredo de justiça
  - Instruções para habilitação nos autos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript (ES6+)** - Funcionalidades interativas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 📁 Estrutura do Projeto

```
FacilitaPJE/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Funcionalidades JavaScript
├── README.md               # Documentação
├── imagens/                # Imagens do PJe
│   ├── PJE Home.png
│   ├── PJE login.png
│   ├── PJE Menu Rapido.png
│   └── ... (outras imagens)
└── videos/                 # Vídeos tutoriais
    └── primeiro acesso/
        └── Primeiro acesso PJE.mp4
```

## 🎯 Como Usar

### 1. Acesso ao Sistema
- Abra o arquivo `index.html` em qualquer navegador moderno
- Navegue pelas seções usando o menu superior

### 2. Passo a Passo
- Selecione o tipo de processo desejado
- Clique nas imagens para visualização expandida
- Use os botões de navegação ou teclas de seta

### 3. Tutoriais
- Acesse a seção "Tutoriais"
- Clique em "Assistir" para reproduzir os vídeos
- Use os controles nativos do player

## 🔧 Instalação e Configuração

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação Local
1. Clone o repositório:
```bash
git clone https://github.com/JarlecyPj/FacilitaPJE.git
```

2. Navegue até o diretório:
```bash
cd FacilitaPJE
```

3. Abra o arquivo `index.html` no navegador

### Servidor Local (Desenvolvimento)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

## 📱 Responsividade

O sistema foi desenvolvido com foco na responsividade:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação automática do layout
- **Mobile**: Layout em coluna única com botões otimizados

## 🎨 Características do Design

- **Paleta de Cores**: Gradientes azul/roxo com acentos dourados
- **Tipografia**: Segoe UI para melhor legibilidade
- **Ícones**: Font Awesome para consistência visual
- **Animações**: Transições suaves e efeitos hover
- **Acessibilidade**: Suporte a navegação por teclado

## 📚 Seções do Sistema

### 🏠 Início
- Apresentação do sistema
- Botões de ação principal
- Design hero atrativo

### ℹ️ Sobre o Sistema
- Informações sobre o PJe
- Benefícios do sistema eletrônico
- Lista de vantagens

### 📋 Passo a Passo
- **Como Fazer Inicial**: Processo de primeira instância
- **Juntada**: Adição de documentos ao processo
- **Consulta**: Pesquisa e visualização de processos

### 🎥 Tutoriais
- Vídeos educativos
- Modal de reprodução
- Controles de vídeo

### ❓ FAQ
- Perguntas frequentes
- Respostas detalhadas
- Interface accordion

### 📞 Contato
- Formulário de contato
- Informações de suporte
- Validação de campos

## 🔄 Funcionalidades JavaScript

### Modal de Imagens
- Visualização expandida
- Navegação entre imagens
- Controles de teclado
- Contador de posição

### Modal de Vídeos
- Reprodução de vídeos
- Controles nativos
- Pausa automática ao fechar
- Reset do vídeo

### Navegação
- Sistema de abas
- Scroll suave
- Detecção de seção ativa
- Menu mobile responsivo

## 🚀 Deploy

### GitHub Pages
1. Faça push do código para o repositório
2. Ative o GitHub Pages nas configurações
3. Selecione a branch main
4. Acesse: `https://jarlecypj.github.io/FacilitaPJE/`

### Netlify
1. Conecte o repositório GitHub
2. Configure o build (sem build necessário)
3. Deploy automático

### Vercel
1. Importe o repositório
2. Configure como projeto estático
3. Deploy automático

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**JarlecyPj**
- GitHub: [@JarlecyPj](https://github.com/JarlecyPj)

## 📞 Suporte

Para suporte e dúvidas:
- Abra uma issue no GitHub
- Entre em contato através do formulário do site

## 🔮 Roadmap

### Próximas Funcionalidades
- [ ] Mais tutoriais em vídeo
- [ ] Sistema de busca avançada
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Integração com APIs do PJe
- [ ] Sistema de notificações
- [ ] Relatórios de uso

---

**FacilitaPJE** - Simplificando o peticionamento eletrônico para advogados e cidadãos. 🏛️⚖️
