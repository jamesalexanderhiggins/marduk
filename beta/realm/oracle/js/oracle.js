// oracle.js — search engine, results UI, state machine.
// Reads window.MARDUK_DB; no AI API required.

export class Oracle {
  constructor(marduk, env) {
    this.marduk = marduk;
    this.env    = env;
    this.state  = 'idle'; // idle | searching | data | detail
    this._debounce = null;
    this._currentResults = [];
    this._selectedEntry  = null;

    this._bindDOM();
  }

  _bindDOM() {
    this.searchInput   = document.getElementById('search-input');
    this.resultsPanel  = document.getElementById('results-panel');
    this.detailPanel   = document.getElementById('detail-panel');
    this.statusBar     = document.getElementById('status-bar');
    this.detailInner   = document.getElementById('detail-inner');

    this.searchInput.addEventListener('input', () => this._onInput());
    this.searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') this._clearSearch();
      if (e.key === 'Enter' && this._currentResults.length === 1) {
        this._openDetail(this._currentResults[0]);
      }
    });

    // Detail back button
    document.getElementById('detail-back').addEventListener('click', () => this._closeDetail());
  }

  _onInput() {
    const val = this.searchInput.value.trim();

    // Secret admin password
    if (val.toLowerCase() === 'melchizedek') {
      this.searchInput.value = '';
      this._clearSearch();
      document.dispatchEvent(new CustomEvent('oracle:adminMode'));
      return;
    }

    if (val.length === 0) { this._clearSearch(); return; }

    clearTimeout(this._debounce);
    this._setStatus('QUERYING INFORMATIONAL REALM\u2026');
    this._setState('searching');

    this._debounce = setTimeout(() => this._runSearch(val), 320);
  }

  _runSearch(query) {
    const db = (window.MARDUK_DB || []).filter(e => e.public !== false);
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);

    const scored = db.map(entry => {
      let score = 0;
      const haystack = [
        entry.name,
        ...(entry.aliases || []),
        ...(entry.tags || []),
        entry.category,
        entry.summary,
      ].join(' ').toLowerCase();

      for (const tok of tokens) {
        if (entry.name.toLowerCase().includes(tok)) score += 10;
        if ((entry.aliases || []).some(a => a.toLowerCase().includes(tok))) score += 8;
        if ((entry.tags || []).some(t => t.toLowerCase().includes(tok))) score += 5;
        if (entry.category.toLowerCase().includes(tok)) score += 4;
        if ((entry.summary || '').toLowerCase().includes(tok)) score += 2;
        if (haystack.includes(tok)) score += 1;
      }
      return { entry, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

    this._currentResults = scored.map(x => x.entry);
    this._renderResults(this._currentResults, query);
    this._clearStatus();

    if (this._currentResults.length > 0) {
      this._setState('data');
      this.marduk.triggerReveal();
    } else {
      this._setState('idle');
    }
  }

  _renderResults(entries, query) {
    this.resultsPanel.style.display = 'block';
    const count = entries.length;

    if (count === 0) {
      this.resultsPanel.innerHTML = `
        <div class="results-header"><span>ORACLE QUERY</span><span>NO RECORDS FOUND</span></div>
        <div class="result-none">The informational realm returns no data for this query.</div>
      `;
      return;
    }

    const hdr = `
      <div class="results-header">
        <span>ORACLE QUERY // ${query.toUpperCase()}</span>
        <span>${count} RECORD${count !== 1 ? 'S' : ''} RETRIEVED</span>
      </div>
    `;
    const rows = entries.map((e, idx) => `
      <div class="result-entry" data-idx="${idx}">
        <div class="result-name">${this._escHtml(e.name)}</div>
        <div class="result-cat">${this._escHtml(e.category)}</div>
        <div class="result-summary">${this._escHtml(e.summary || '')}</div>
      </div>
    `).join('');
    this.resultsPanel.innerHTML = hdr + rows;

    this.resultsPanel.querySelectorAll('.result-entry').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        this._openDetail(this._currentResults[idx]);
      });
    });
  }

  _openDetail(entry) {
    this._selectedEntry = entry;
    this._setState('detail');
    this.resultsPanel.style.display = 'none';

    // Build populated fields first, then empty
    const fields = entry.fields || {};
    const populated = Object.entries(fields).filter(([,v]) => v && String(v).trim());
    const empty     = Object.entries(fields).filter(([,v]) => !v || !String(v).trim());
    const allFields = [...populated, ...empty];

    const fieldRows = allFields.map(([k, v]) => `
      <div class="detail-field">
        <div class="detail-field-key">${this._escHtml(k)}</div>
        <div class="detail-field-val">${v ? this._escHtml(String(v)) : '<span style="color:#1a2a3a">—</span>'}</div>
      </div>
    `).join('');

    const aliases = (entry.aliases || []).filter(Boolean);
    const aliasHtml = aliases.length ? `
      <div class="detail-aliases">
        <div class="detail-alias-label">Also known as</div>
        ${aliases.map(a => `<span class="alias-chip">${this._escHtml(a)}</span>`).join('')}
      </div>
    ` : '';

    document.getElementById('detail-inner').innerHTML = `
      <div class="detail-cat">${this._escHtml(entry.category)}</div>
      <div class="detail-name">${this._escHtml(entry.name)}</div>
      <div class="detail-text">${this._escHtml(entry.detail || entry.summary || '')}</div>
      ${allFields.length ? `<div class="detail-fields">${fieldRows}</div>` : ''}
      ${aliasHtml}
    `;

    this.detailPanel.style.display = 'block';
    this.detailPanel.scrollTop = 0;
  }

  _closeDetail() {
    this.detailPanel.style.display = 'none';
    this._setState('data');
    if (this._currentResults.length) this.resultsPanel.style.display = 'block';
  }

  _clearSearch() {
    this.searchInput.value = '';
    this.resultsPanel.style.display = 'none';
    this.detailPanel.style.display = 'none';
    this._currentResults = [];
    this._setState('idle');
    this._clearStatus();
  }

  _setState(state) {
    this.state = state;
    this.env.setOracleState(
      state === 'searching' ? 'searching' :
      state === 'data'      ? 'data'      : 'idle'
    );
    this.marduk.setAnim(
      state === 'searching' ? 'searching' :
      state === 'data'      ? 'revealing' :
      state === 'detail'    ? 'idle'      : 'idle'
    );
    if (state === 'searching') {
      this.marduk.setColor(0xffd060);
    } else if (state === 'data') {
      this.marduk.setColor(0xe8a030);
    } else {
      this.marduk.setColor(0xd4882a);
    }
    const hudState = document.getElementById('hud-state');
    if (hudState) {
      hudState.textContent =
        state === 'searching' ? 'QUERYING' :
        state === 'data'      ? 'DATA RETRIEVED' :
        state === 'detail'    ? 'READING RECORD' : 'DORMANT';
    }
  }

  _setStatus(msg) {
    this.statusBar.textContent = msg;
    this.statusBar.classList.add('vis');
  }
  _clearStatus() { this.statusBar.classList.remove('vis'); }

  _escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  getState() { return this.state; }
}
