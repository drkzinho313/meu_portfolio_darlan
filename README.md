<div align="center">

# Darlan Silva — Portfólio — D'ark Designer

**Portfólio pessoal de Darlan Silva — desenvolvedor e designer focado em interfaces modernas, identidade visual e soluções web.**

[![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify)](https://darlan-port.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-drkzinho313-181717?style=flat-square&logo=github)](https://github.com/drkzinho313)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Darlan%20Silva-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/darlan-silva-darlan)

</div>

---

## 📋 Índice

- [Sobre](#-sobre)
- [Preview](#-preview)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Estrutura](#-estrutura-do-projeto)
- [Como usar](#-como-usar)
- [API do GitHub](#-integração-com-api-do-github)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Contato](#-contato)

---

## 💡 Sobre

Este portfólio foi criado para apresentar projetos, habilidades e experiências como desenvolvedor e designer. O objetivo é unir criatividade e tecnologia em uma experiência visual moderna, minimalista e interativa.

A seção de projetos é **integrada à API pública do GitHub**, ou seja, qualquer repositório novo publicado aparece automaticamente no site — sem necessidade de editar o código.

---

## 🖥️ Preview

> Acesse o projeto online: **[darlan-port.netlify.app](https://darlan-port.netlify.app)**

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript (vanilla) | Animações e integração com API |
| GitHub REST API v3 | Carregamento dinâmico de projetos |
| Font Awesome 6 | Ícones |
| Google Fonts (Inter) | Tipografia |
| Canvas API | Animação de teia de fundo |

---

## ✨ Funcionalidades

- ✅ Layout moderno, dark e responsivo
- ✅ Fundo animado com efeito de teia de aranha (Canvas)
- ✅ Projetos carregados automaticamente via API do GitHub
- ✅ Tag de status **Concluído / Em andamento** nos projetos
- ✅ Seções: Início, Sobre, Formação, Skills, Projetos e Contato
- ✅ Links diretos para GitHub e Deploy (Demo) de cada projeto
- ✅ Animação de entrada escalonada nos cards
- ✅ Loader animado enquanto os projetos carregam

---

## 📁 Estrutura do Projeto

```
portfolio/
│
├── index.html
│
└── assets/
    ├── css/
    │   ├── style.css          # Estilos principais
    │   └── github-projects.css # Estilos da seção de projetos
    │
    ├── js/
    │   ├── script.js          # Lógica + integração GitHub API
    │   └── spider.js          # Animação de teia (canvas)
    │
    └── img/
        └── perfil.jpg         # Foto de perfil
```

---

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/drkzinho313/meu_portfolio_darlan.git
cd meu_portfolio_darlan
```

### 2. Abra no navegador

Não precisa de servidor ou dependências. Basta abrir o `index.html` diretamente:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Ou use a extensão **Live Server** no VS Code para recarregamento automático.

---

## 🐙 Integração com API do GitHub

A seção **Projetos** busca automaticamente seus repositórios públicos pela [API REST do GitHub](https://docs.github.com/en/rest/repos/repos).

### Como funciona

O arquivo `assets/js/script.js` faz uma requisição para:

```
GET https://api.github.com/users/SEU_USERNAME/repos?sort=updated&per_page=10
```

Os repositórios são exibidos em cards com: **nome**, **descrição**, **linguagem principal**, **data da última atualização**, **estrelas**, **forks**, botão **Ver no GitHub** e botão **Demo** (se houver homepage configurada).

---

### Alterar o username

Para usar este portfólio como base, edite a linha no topo de `script.js`:

```js
// script.js — linha 3
const GITHUB_USERNAME = 'drkzinho313'; // ← troque pelo seu username
```

---

### Tag de status: Concluído / Em andamento

Cada projeto exibe uma tag de status automaticamente:

| Tag | Cor | Como ativar |
|---|---|---|
| ✅ Concluído | Verde | Adicione o topic `concluido` no repositório |
| 🔶 Em andamento | Laranja | Padrão para todos os outros repos |

#### Como adicionar o topic no GitHub

1. Abra o repositório no GitHub
2. Clique na **engrenagem ⚙️** ao lado de *"About"* (canto superior direito)
3. No campo **Topics**, digite `concluido` e pressione **Enter**
4. Clique em **Save changes**

> O portfólio detecta o topic automaticamente na próxima vez que a página for carregada.

---

### Excluir forks da listagem

Por padrão, repositórios que são forks de outros projetos **não aparecem** no portfólio. Para exibí-los, edite `script.js`:

```js
// Remova o .filter() para incluir forks
const filtered = repos.filter(r => !r.fork); // ← apague esta linha
```

---

## 🎨 Personalização

### Trocar a foto de perfil

Substitua o arquivo `assets/img/perfil.jpg` pela sua foto. Mantenha o mesmo nome ou atualize o caminho no `index.html`:

```html
<img src="assets/img/perfil.jpg" alt="Perfil">
```

### Alterar as informações pessoais

Edite diretamente o `index.html`:

- **Nome e título** → seção `hero-card`
- **Descrição** → parágrafo dentro de `.hero-text`
- **Formação** → seção `#formacao`
- **Skills** → seção `#skills`
- **E-mails e redes sociais** → seção `#contato`

### Alterar cores e fontes

As variáveis visuais principais estão no `assets/css/style.css`. Os destaques de cor usados:

```css
/* Cor de texto secundário */
color: #8b8b8b;

/* Cor "Concluído" */
color: #2ecc71;

/* Cor "Em andamento" */
color: #e67e22;
```

---

## 🌐 Deploy

O projeto está hospedado no **Netlify**. Para fazer o seu próprio deploy:

### Via Netlify (recomendado)

1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em **"Add new site" → "Import an existing project"**
3. Conecte ao GitHub e selecione o repositório
4. Deixe as configurações padrão e clique em **Deploy**

Todo `git push` na branch principal atualiza o site automaticamente.

### Via GitHub Pages

1. No repositório, vá em **Settings → Pages**
2. Em *"Branch"*, selecione `main` e pasta `/ (root)`
3. Clique em **Save**

O site ficará disponível em `https://SEU_USERNAME.github.io/NOME_DO_REPO`

---

## 📬 Contato

| Canal | Link |
|---|---|
| ✉️ E-mail pessoal | darlan.silva.dbz@gmail.com |
| ✉️ E-mail design | dark.socialmid@gmail.com |
| 📸 Instagram | [@dark_designer19](https://www.instagram.com/dark_designer19) |
| 💼 LinkedIn | [darlan-silva-313](https://www.linkedin.com/in/darlan-silva-darlan) |
| 🐙 GitHub | [drkzinho313](https://github.com/drkzinho313) |

---

<div align="center">

Feito por **Darlan Silva**

</div>
