// classes.js — version corrigée (multi-guides, FR-only, imgClasse support)

import { CLASS_GUIDES as RAW_CLASS_GUIDES } from './dataModel/classe.js';
import { CLASS_LIST } from './dataModel/classe_name.js';

const GUIDES_BY_CLASS = groupGuidesByClass(RAW_CLASS_GUIDES);

/* ────────────────────────────────────────────────────────────────────────────
   1) Normalisation des données : on regroupe les guides par classe (name)
   ──────────────────────────────────────────────────────────────────────────── */
function groupGuidesByClass(raw) {
  const byClass = {};

  // map → normalisation
  if (raw && !Array.isArray(raw)) {
    for (const k of Object.keys(raw)) {
      const val = raw[k];
      if (!val) continue;
      byClass[k] = Array.isArray(val) ? val.slice() : [val];
    }
    return byClass;
  }

  // tableau → group by .name
  (raw || []).forEach(g => {
    const key = (g.name || '').trim();
    if (!key) return;
    (byClass[key] ||= []).push(g);
  });

  return byClass;
}

/* ────────────────────────────────────────────────────────────────────────────
   2) Utilitaires d’affichage
   ──────────────────────────────────────────────────────────────────────────── */
function tokenizeToHTML(str) {
  if (!str) return "";
  // :token: -> <img ... src="./assets/icons/token.webp">
  return str.replace(/:([^:\s][^:]*)?:/g, (match, token) => {
    if (!token) return match;
    const safe = token.trim();
    const src = `./assets/icons/${safe}.webp`;
    return `<img class="icon" src="${src}" alt="${safe}" title="${safe}" loading="lazy" onerror="this.style.display='none'">`;
  });
}

// Résout le chemin de l'image de classe en fonction de guide.imgClasse
function resolveClassImageSrc(guide, fallbackNameFR) {
  const v = (guide?.imgClasse || '').trim();

  if (!v) {
    // fallback: ancien comportement -> assets/classes/<NomFR>.png
    return `assets/classes/${fallbackNameFR}.png`;
  }

  // Sinon, on suppose que c'est un nom de fichier dans assets/classes/
  // s'il n'y a pas d'extension, on ajoute .png
  if (!/\.(png|webp|jpg|jpeg|gif)$/i.test(v)) {
    return `assets/classes/${v}.png`;
  }
  return `assets/classes/${v}`;
}

/* --- Cards --- */
function makeGuideCard(nameFR, guide) {
  const card = document.createElement('section');
  card.className = 'guide-card';

  // --- Détermination de l4archétype pour le fond ---
  const cleanTitle = (guide.title || '').replace(/:[^:]+:/g, '').trim();
  const words = cleanTitle.split(/\s+/);
  const raw = (words[1] || '').toLowerCase();
  let archetype = '';

  if (['dpt'].includes(raw)) archetype = 'dpt';
  else if (['support', 'supp'].includes(raw)) archetype = 'support';
  else if (['soin', 'heal'].includes(raw)) archetype = 'soin';

  if (archetype) {
    card.classList.add(`guide-card-${archetype}`);
  }

  // --- Colonne gauche : image de la classe ---
  const figure = document.createElement('div');
  figure.className = 'class-figure';
  if (archetype) figure.classList.add(`class-figure-${archetype}`);

  const img = new Image();
  img.alt = nameFR;
  img.loading = 'lazy';
  img.src = `assets/classes/${nameFR}_M.png`;
  img.onerror = () => { figure.innerHTML = `<div class="muted">Image introuvable</div>`; };
  figure.appendChild(img);

  // --- Colonne droite : contenu du guide ---
  const body = document.createElement('div');
  body.className = 'guide-body';

  if (guide.key) {
    const badge = document.createElement('div');
    badge.className = 'guide-kicker';
    badge.textContent = guide.key;
    body.appendChild(badge);
  }

  const h = document.createElement('h2');
  h.className = 'title-line tokenized';
  h.innerHTML = tokenizeToHTML(guide.title);
  body.appendChild(h);

  (guide.lines || []).forEach(l => {
    const p = document.createElement('p');
    p.className = 'rich-line tokenized';
    p.innerHTML = tokenizeToHTML(l);
    body.appendChild(p);
  });

  if (guide.subliGenerique?.length) {
    const st = document.createElement('div');
    st.className = 'section-title';
    st.textContent = 'Subli génériques';
    body.appendChild(st);

    const p = document.createElement('p');
    p.className = 'tokenized';
    p.innerHTML = guide.subliGenerique.map(tokenizeToHTML).join(' ');
    body.appendChild(p);
  }

  if (guide.subliLowCost?.length) {
    const st = document.createElement('div');
    st.className = 'section-title';
    st.textContent = 'Subli Low Cost';
    body.appendChild(st);

    const p = document.createElement('p');
    p.className = 'tokenized';
    p.innerHTML = guide.subliLowCost.map(tokenizeToHTML).join(' ');
    body.appendChild(p);
  }

  // --- Assemblage final ---
  card.appendChild(figure);
  card.appendChild(body);
  return card;
}

function renderGuidesForClass(nameFR) {
  const layout = document.querySelector('.layout');
  const leftPanel = document.getElementById('left');
  const right = document.getElementById('right');

  layout?.classList.add('one-col');
  if (leftPanel) leftPanel.style.display = 'none';
  right.innerHTML = '';

  let guides = GUIDES_BY_CLASS[nameFR] || [];
  if (!guides.length) {
    right.innerHTML = `<div class="no-result">Pas (encore) de guide pour « ${nameFR} ».</div>`;
    return;
  }

  // --- Déduplication par combinaison (name + imgClasse + key) ---
  const seen = new Set();
  guides = guides.filter(g => {
    const key = `${g.name}::${g.imgClasse}::${g.key}`.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });


  // --- Déterminer l'archétype à partir du premier guide disponible ---
  let archetype = '';
  const firstGuide = guides[0];
  if (firstGuide?.title) {
    const cleanTitle = firstGuide.title.replace(/:[^:]+:/g, '').trim();
    const words = cleanTitle.split(/\s+/);
    const raw = (words[1] || '').toLowerCase();
    if (['dpt'].includes(raw)) archetype = 'dpt';
    else if (['support', 'supp'].includes(raw)) archetype = 'support';
    else if (['soin', 'heal'].includes(raw)) archetype = 'soin';
    console.log(raw, " ==> ", archetype)
  
  }
  // --- Si on a un archétype, appliquer une classe au bloc class-figure ---
  const figure = document.querySelector('.class-figure');
  if (figure) {
    figure.classList.remove('class-figure-dpt', 'class-figure-support', 'class-figure-soin');
    if (archetype) {
      figure.classList.add(`class-figure-${archetype}`);
    }
  }


  guides.forEach(g => right.appendChild(makeGuideCard(nameFR, g)));
}


function selectGuidesByName(nameFR) {
  const right = document.getElementById('right');
  if (!nameFR) {
    right.innerHTML = `<div class="no-result">Aucun guide sélectionné.</div>`;
    return;
  }
  renderGuidesForClass(nameFR);
}

/* ────────────────────────────────────────────────────────────────────────────
   3) Sélection de classe (menu <select>) — FR only
   ──────────────────────────────────────────────────────────────────────────── */
const select = document.getElementById('class-select');

(function hydrateSelect() {
  select.innerHTML = '<option value="">— Choisissez une classe —</option>';
  const classes = (CLASS_LIST && CLASS_LIST.fr) || [];
  classes.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
})();

select.addEventListener('change', e => {
  selectGuidesByName(e.target.value);
});

// Auto-sélection via hash ?class=Ecaflip
const params = new URLSearchParams(location.hash.split('?')[1] || "");
const qClass = params.get('class');
if (qClass) {
  select.value = qClass;
  selectGuidesByName(qClass);
}
