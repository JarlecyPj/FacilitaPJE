# 📧 Configuração do EmailJS para Formulário de Contato

## 🎯 Objetivo
Configurar o envio de emails do formulário de contato para `suporte.facilita.pje@gmail.com` usando EmailJS.

## 📋 Passo a Passo

### 1. **Criar Conta no EmailJS**
1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"**
3. Crie uma conta gratuita
4. Confirme seu email

### 2. **Configurar Serviço de Email**
1. No dashboard, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"**
4. Configure:
   - **Service Name**: `gmail`
   - **Gmail Address**: `suporte.facilita.pje@gmail.com`
   - Siga as instruções para conectar sua conta Gmail

### 3. **Criar Template de Email**
1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Template ID**: `contact_form`

**Subject**: `Nova mensagem do FacilitaPJE - {{subject}}`

**Content**:
```
Nova mensagem recebida através do site FacilitaPJE:

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado automaticamente pelo sistema FacilitaPJE
```

### 4. **Obter Chaves de Configuração**
1. Vá para **"Account"** → **"General"**
2. Anote sua **Public Key**
3. Anote o **Service ID** (criado no passo 2)
4. Anote o **Template ID** (criado no passo 3)

### 5. **Atualizar o Código**
No arquivo `assets/js/script.js`, substitua:

```javascript
// Linha 83
emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua Public Key

// Linha 131
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Exemplo:**
```javascript
emailjs.init("user_abc123def456");
emailjs.send('service_xyz789', 'contact_form', templateParams)
```

### 6. **Configurações de Segurança**
1. No EmailJS, vá para **"Account"** → **"Security"**
2. Configure **"Allowed Origins"**:
   - `https://jarlecypj.github.io`
   - `http://localhost:8000` (para testes locais)

### 7. **Testar o Formulário**
1. Abra o site
2. Vá para a seção "Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique se o email chegou em `suporte.facilita.pje@gmail.com`

## 🔧 Configuração Alternativa (Sem EmailJS)

Se preferir não usar EmailJS, você pode:

### **Opção 1: Formspree**
1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Substitua o action do form:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### **Opção 2: Netlify Forms**
1. Se hospedar no Netlify
2. Adicione `netlify` ao form:

```html
<form id="contact-form" name="contact" method="POST" netlify>
```

### **Opção 3: Backend Próprio**
- Criar API com Node.js/PHP/Python
- Usar SendGrid/Mailgun
- Configurar SMTP direto

## 📊 Monitoramento

### **EmailJS Dashboard**
- Acesse: https://dashboard.emailjs.com/
- Monitore envios em **"Activity"**
- Verifique logs em **"Logs"**

### **Gmail**
- Configure filtros para emails do FacilitaPJE
- Crie etiquetas para organização
- Configure notificações

## 🚨 Solução de Problemas

### **Email não chega:**
1. Verifique se as chaves estão corretas
2. Confirme se o Gmail está conectado
3. Verifique logs no EmailJS
4. Teste com email diferente

### **Erro de CORS:**
1. Adicione domínio nas configurações de segurança
2. Verifique se está usando HTTPS em produção

### **Template não funciona:**
1. Verifique sintaxe do template
2. Confirme nomes das variáveis
3. Teste com template simples

## 📈 Limites Gratuitos

### **EmailJS Free:**
- 200 emails/mês
- 2 serviços de email
- 2 templates
- Suporte básico

### **Upgrade (se necessário):**
- $15/mês para 1.000 emails
- $30/mês para 10.000 emails
- Recursos avançados

## ✅ Checklist Final

- [ ] Conta EmailJS criada
- [ ] Serviço Gmail configurado
- [ ] Template criado
- [ ] Chaves obtidas
- [ ] Código atualizado
- [ ] Teste realizado
- [ ] Email recebido
- [ ] Configurações de segurança

---

**FacilitaPJE** - Sistema de contato configurado! 📧✨
