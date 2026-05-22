// ─── GitHub API ───────────────────────────────────────────────────────────────

const GITHUB_USERNAME = 'drkzinho313';


const LANG_ICONS = {
  'HTML':       'fa-brands fa-html5',
  'CSS':        'fa-brands fa-css3-alt',
  'JavaScript': 'fa-brands fa-js',
  'Python':     'fa-brands fa-python',
  'Java':       'fa-brands fa-java',
  'TypeScript': 'fa-brands fa-js',
  'PHP':        'fa-brands fa-php',
  'default':    'fa-solid fa-code',
};

function getLangIcon(lang) {
  return LANG_ICONS[lang] || LANG_ICONS['default'];
}


function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}


function renderProjects(repos) {
  const list = document.querySelector('.projects-list');
  if (!list) return;

  
  list.innerHTML = '';

  if (!repos.length) {
    list.innerHTML = '<p style="color:#888">Nenhum repositório público encontrado.</p>';
    return;
  }

  repos.forEach((repo, i) => {
    const lang     = repo.language || 'N/A';
    const icon     = getLangIcon(repo.language);
    const updated  = formatDate(repo.updated_at);
    const stars    = repo.stargazers_count;
    const forks    = repo.forks_count;
    const desc     = repo.description || 'Sem descrição.';

   
    const statusTag = repo.archived
      ? `<span class="project-status concluido"><i class="fa-solid fa-circle-check"></i> Concluído</span>`
      : `<span class="project-status andamento"><i class="fa-solid fa-circle-half-stroke"></i> Em andamento</span>`;

    const item = document.createElement('div');
    item.className = 'project-item';
    item.style.setProperty('--delay', `${i * 80}ms`);

    item.innerHTML = `
      <div class="project-header">
        <h3>${repo.name.replace(/-/g, ' ')}</h3>
        <div class="project-header-right">
          ${statusTag}
          <span>
            <i class="${icon}" style="margin-right:5px"></i>${lang}
          </span>
        </div>
      </div>

      <p>${desc}</p>

      <div class="project-meta">
        ${stars > 0 ? `<span><i class="fa-solid fa-star"></i> ${stars}</span>` : ''}
        ${forks > 0 ? `<span><i class="fa-solid fa-code-fork"></i> ${forks}</span>` : ''}
        ${updated   ? `<span><i class="fa-regular fa-clock"></i> ${updated}</span>` : ''}
        <a href="${repo.html_url}" target="_blank" rel="noopener">
          <i class="fa-brands fa-github"></i> Ver no GitHub
        </a>
        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
      </div>
    `;

    
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity .4s ease ${i * 80}ms, transform .4s ease ${i * 80}ms`;

    list.appendChild(item);

   
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
    });
  });
}


function showLoader() {
  const list = document.querySelector('.projects-list');
  if (!list) return;
  list.innerHTML = `
    <div class="projects-loader">
      <span></span><span></span><span></span>
    </div>
  `;
}


async function loadGitHubProjects() {
  showLoader();
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );

    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);

    const repos = await res.json();

    
    const filtered = repos.filter(r => !r.fork);

    renderProjects(filtered);
  } catch (err) {
    const list = document.querySelector('.projects-list');
    if (list) {
      list.innerHTML = `
        <p style="color:#888">
          <i class="fa-solid fa-triangle-exclamation" style="color:#c0392b;margin-right:6px"></i>
          Não foi possível carregar os projetos. 
          <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" style="color:white">
            Ver no GitHub
          </a>
        </p>
      `;
    }
    console.error('Erro ao carregar projetos do GitHub:', err);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  loadGitHubProjects();
  console.log('Portfólio carregado com sucesso!');
});