const state = {
  engines: [],
  search: '',
  dimension: 'all',
  platform: 'all',
  language: 'all',
  skill: 'all',
  freeOnly: false,
  zeroRoyaltyOnly: false,
  openSourceOnly: false,
  noCodeOnly: false,
};

async function init() {
  const dataPaths = ['../../data/engines.json', './engines.json', 'data/engines.json'];
  let loaded = null;
  for (const path of dataPaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        loaded = await res.json();
        break;
      }
    } catch (_) {}
  }

  if (!loaded || !Array.isArray(loaded.engines)) {
    document.getElementById('reading-count').textContent = '0';
    document.getElementById('count').textContent = 'Dataset unavailable';
    document.getElementById('grid').innerHTML =
      '<div class="empty">Unable to load <code>data/engines.json</code>. Serve via a local HTTP server or GitHub Pages.</div>';
    return;
  }

  state.engines = loaded.engines;
  if (loaded.metadata && loaded.metadata.last_verified) {
    const stamp = document.getElementById('verified-stamp');
    if (stamp) stamp.textContent = `Verified ${loaded.metadata.last_verified}`;
  }
  populateLanguages(state.engines);
  bindEvents();
  render();
}

function populateLanguages(engines) {
  const select = document.getElementById('language');
  const langs = new Set();
  engines.forEach((e) => e.languages.forEach((l) => langs.add(l)));
  Array.from(langs)
    .sort()
    .forEach((lang) => {
      const opt = document.createElement('option');
      opt.value = lang;
      opt.textContent = lang;
      select.appendChild(opt);
    });
}

function bindEvents() {
  document.getElementById('search').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    render();
  });
  ['dimension', 'platform', 'language', 'skill'].forEach((id) => {
    document.getElementById(id).addEventListener('change', (e) => {
      state[id] = e.target.value;
      render();
    });
  });
  [
    ['freeOnly', 'freeOnly'],
    ['zeroRoyaltyOnly', 'zeroRoyaltyOnly'],
    ['openSourceOnly', 'openSourceOnly'],
    ['noCodeOnly', 'noCodeOnly'],
  ].forEach(([id, key]) => {
    document.getElementById(id).addEventListener('change', (e) => {
      state[key] = e.target.checked;
      render();
    });
  });
  document.getElementById('reset').addEventListener('click', () => {
    state.search = '';
    state.dimension = 'all';
    state.platform = 'all';
    state.language = 'all';
    state.skill = 'all';
    state.freeOnly = false;
    state.zeroRoyaltyOnly = false;
    state.openSourceOnly = false;
    state.noCodeOnly = false;

    document.getElementById('search').value = '';
    ['dimension', 'platform', 'language', 'skill'].forEach((id) => {
      document.getElementById(id).value = 'all';
    });
    ['freeOnly', 'zeroRoyaltyOnly', 'openSourceOnly', 'noCodeOnly'].forEach((id) => {
      document.getElementById(id).checked = false;
    });
    render();
  });
}

function matches(engine) {
  if (state.dimension === '2d' && !engine.dimensions['2d']) return false;
  if (state.dimension === '3d' && !engine.dimensions['3d']) return false;
  if (state.platform !== 'all' && !engine.target_platforms.includes(state.platform)) return false;
  if (state.language !== 'all' && !engine.languages.includes(state.language)) return false;
  if (state.skill !== 'all' && !engine.skill_level.includes(state.skill)) return false;
  if (state.freeOnly && !engine.free_tier) return false;
  if (state.zeroRoyaltyOnly && !engine.zero_royalties) return false;
  if (state.openSourceOnly && !engine.open_source) return false;
  if (state.noCodeOnly && !engine.no_code_friendly) return false;

  if (state.search) {
    const haystack = [
      engine.name,
      engine.tagline,
      engine.license,
      ...engine.languages,
      ...engine.best_for,
      ...engine.target_platforms,
    ]
      .join(' ')
      .toLowerCase();
    if (!haystack.includes(state.search)) return false;
  }
  return true;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function render() {
  const filtered = state.engines.filter(matches);
  const readingEl = document.getElementById('reading-count');
  if (readingEl) readingEl.textContent = String(filtered.length);
  document.getElementById('count').textContent = `of ${state.engines.length} engines matched`;

  const grid = document.getElementById('grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty">No engines match your current filters. Reset one or more criteria to widen the comparison.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map((e) => {
      const dims = [e.dimensions['2d'] ? '2D' : null, e.dimensions['3d'] ? '3D' : null]
        .filter(Boolean)
        .join(' & ');
      return `
      <article class="card">
        <div class="card-header">
          <h2>${escapeHtml(e.name)}</h2>
          <a href="${escapeHtml(e.website)}" target="_blank" rel="noopener">Official site</a>
        </div>
        <p class="tagline">${escapeHtml(e.tagline)}</p>
        <div class="badges">
          <span class="badge">${escapeHtml(dims)}</span>
          ${e.open_source ? '<span class="badge oss">Open source</span>' : ''}
          ${e.no_code_friendly ? '<span class="badge nocode">No-code friendly</span>' : ''}
          ${!e.zero_royalties ? '<span class="badge royalty">Has royalties</span>' : '<span class="badge">0% royalties</span>'}
        </div>
        <div class="meta">
          <div><strong>Languages:</strong> ${escapeHtml(e.languages.join(', '))}</div>
          <div><strong>Targets:</strong> ${escapeHtml(e.target_platforms.join(', '))}</div>
          <div><strong>Pricing:</strong> ${escapeHtml(e.pricing_summary)}</div>
          <div><strong>Verified:</strong> <span class="meta-verified">${escapeHtml(e.last_verified)} (${escapeHtml(e.latest_version_checked)})</span></div>
        </div>
      </article>`;
    })
    .join('');
}

init();
