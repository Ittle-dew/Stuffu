// js/main.js
import { BUILD_DATA, CLASS_LIST } from './dataModel/build.js';

// --- Options de coût ---
const COST_OPTIONS = [
  { key: 'all',      label: 'Tous les coûts' },
  { key: 'low cost', label: 'Low cost' },
  { key: 'mid cost', label: 'Mid cost' },
  { key: 'opti',     label: 'Opti' },
  { key: 'parfait',  label: 'Parfait' },
];

// État UI
const state = {
  q: '',
  cost: 'all',
  class: 'all',
  tranche: 'all',   // <-- nouveau
};

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const elSearch         = document.getElementById('search');
  const elCostSelect     = document.getElementById('costFilter');
  const elClassFilter    = document.getElementById('classFilter');
  const elTrancheFilter  = document.getElementById('trancheFilter'); // <-- nouveau
  const elCards          = document.getElementById('cards');
  const elEmpty          = document.getElementById('empty');
  const elCount          = document.getElementById('count');
  const elActiveFilters  = document.getElementById('activeFilters');

  // Sécurité: si un élément manque, on log + on stoppe proprement
  if (!elSearch || !elCostSelect || !elClassFilter || !elTrancheFilter || !elCards || !elEmpty || !elCount || !elActiveFilters) {
    console.error('[Builds] Un ou plusieurs éléments #id sont introuvables dans le DOM.');
    return;
  }

  // Init
  initCostSelect(elCostSelect);
  initClassSelect(elClassFilter);
  initTrancheSelect(elTrancheFilter);
  attachEvents();
  render();
  console.log("has loaded");

  // ====== UI Setup ======
  function initCostSelect(selectEl){
    selectEl.innerHTML = '';
    COST_OPTIONS.forEach(({key, label})=>{
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = label;
      selectEl.appendChild(opt);
    });
    selectEl.value = state.cost;
  }

  function initClassSelect(selectEl){
    selectEl.innerHTML = '';
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = 'Toutes les classes';
    selectEl.appendChild(optAll);

    (CLASS_LIST?.fr ?? []).forEach(c=>{
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      selectEl.appendChild(opt);
    });

    selectEl.value = state.class;
  }

  // Options tranche : 20 → 245, pas de 15
  function initTrancheSelect(selectEl){
    selectEl.innerHTML = '';

    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = 'Toutes les tranches';
    selectEl.appendChild(optAll);

    for (let t = 20; t <= 245; t += 15){
      const opt = document.createElement('option');
      opt.value = String(t);          // obj.tranche est une string
      opt.textContent = String(t);    // libellé simple
      selectEl.appendChild(opt);
    }

    selectEl.value = state.tranche;
  }

  function attachEvents(){
    // Recherche avec debounce
    let t;
    elSearch.addEventListener('input', (e)=>{
      clearTimeout(t);
      t = setTimeout(()=>{
        state.q = (e.target.value || '').trim().toLowerCase();
        render();
      }, 120);
    });

    elClassFilter.addEventListener('change', (e)=>{
      state.class = e.target.value;
      render();
    });

    elCostSelect.addEventListener('change', (e)=>{
      state.cost = e.target.value;
      render();
    });

    // Nouveau : changement de tranche
    elTrancheFilter.addEventListener('change', (e)=>{
      state.tranche = e.target.value;
      render();
    });
  }

  // ====== Data filtering & render ======
  function getFiltered() {
    const entries = Object.entries(BUILD_DATA);

    // --- Cas : aucun filtre actif ---
    const noFilters =
      !state.q &&
      state.class === 'all' &&
      state.cost === 'all' &&
      state.tranche === 'all';

    if (noFilters) {
      // On prend les 20 derniers (selon l'ordre d'insertion)
      return entries.slice(-20);
    }

    // --- Cas : filtres actifs ---
    return entries.filter(([key, obj]) => {
      // 1) Recherche par nom
      if (state.q && !key.toLowerCase().includes(state.q)) return false;

      // 2) Classe
      if (state.class !== 'all' && obj.class !== state.class) return false;

      // 3) Coût
      if (state.cost !== 'all') {
        const kws = (obj.keywords || []).map(s => String(s).toLowerCase());
        if (!kws.includes(state.cost)) return false;
      }

      // 4) Tranche
      if (state.tranche !== 'all') {
        const objTranche = obj.tranche != null ? String(obj.tranche) : '';
        if (objTranche !== state.tranche) return false;
      }

      return true;
    });
  }


  function render() {
    const filtered = getFiltered();
    elCards.innerHTML = '';

    if (filtered.length === 0) {
      elEmpty.hidden = false;
      elCount.textContent = '0';
      elActiveFilters.textContent = activeFiltersText();
      return;
    }

    elEmpty.hidden = true;
    elCount.textContent = String(filtered.length);
    elActiveFilters.textContent = activeFiltersText();

    // --- Déduplication sécurisée ---
    const seen = new Set();

    for (const [buildKey, build] of filtered) {
      const key = `${build.class || ''}-${build.tranche || ''}-${(build.keywords || []).join('-')}`.toLowerCase().trim();

      // Empêche d’afficher 2 fois le même build (même clé)
      if (seen.has(key)) continue;
      seen.add(key);

      elCards.appendChild(renderCard(buildKey, build));
    }
  }


  function renderCard(buildKey, build) {
    const card = document.createElement('article');
    card.className = 'card';

    // --- Détermination de l'archétype pour le fond ---
    const words = buildKey.split(/\s+/);
    const raw = (words[1] || '').toLowerCase(); // 2e mot du build
    let archetype = '';

    if (['dpt'].includes(raw)) archetype = 'dpt';
    else if (['support', 'supp'].includes(raw)) archetype = 'support';
    else if (['soin', 'heal'].includes(raw)) archetype = 'soin';

    if (archetype) {
      card.classList.add(`card-${archetype}`);
    }

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.alt = `Illustration du build ${buildKey}`;
    img.src = build.image || '';
    img.onerror = () => {
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">
          <rect width="100%" height="100%" fill="#0c1118"/>
          <text x="50%" y="50%" fill="#2b3442" font-size="20" text-anchor="middle" dominant-baseline="middle">
            Image introuvable
          </text>
        </svg>
      `);
    };
    thumb.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';

    const titleRow = document.createElement('div');
    titleRow.className = 'title-row';

    const h3 = document.createElement('h3');
    h3.className = 'title';
    h3.textContent = buildKey;

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = build.class || 'Classe ?';

    titleRow.appendChild(h3);
    titleRow.appendChild(badge);

    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = build.description || '';

    const tags = document.createElement('div');
    tags.className = 'tags';
    (build.keywords || []).forEach(k => {
      const t = document.createElement('span');
      t.className = 'tag';
      t.textContent = k;
      tags.appendChild(t);
    });

    const actions = document.createElement('div');
    actions.className = 'actions';
    const link = document.createElement('a');
    link.className = 'btn';
    link.href = build.url || '#';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Voir le build';
    actions.appendChild(link);

    content.appendChild(titleRow);
    content.appendChild(desc);
    if (build.keywords?.length) content.appendChild(tags);
    content.appendChild(actions);

    card.appendChild(thumb);
    card.appendChild(content);
    return card;
  }

  function activeFiltersText(){
    const bits = [];
    if (state.q) bits.push(`recherche: “${state.q}”`);
    if (state.class !== 'all') bits.push(`classe: ${state.class}`);
    if (state.cost !== 'all') bits.push(`coût: ${state.cost}`);
    if (state.tranche !== 'all') bits.push(`tranche: ${state.tranche}`); // <-- nouveau
    return bits.length ? bits.join(' · ') : '';
  }
});
