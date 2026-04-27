// MARDUK ORACLE v1.3 — admin.js
// admin.js — canonical database editor.
// Activated by typing "melchizedek" in the search field.
// Exports a replacement db.js file.

export class Admin {
  constructor() {
    this.panel    = document.getElementById('admin-panel');
    this.editForm = document.getElementById('admin-edit');
    this._db      = null;
    this._editIdx = null;
    this._sortCol = 'name';
    this._sortDir = 1;

    this._bindHeader();
    document.addEventListener('oracle:adminMode', () => this.open());
  }

  open() {
    // Deep-clone current DB into local state
    this._db = JSON.parse(JSON.stringify(window.MARDUK_DB || []));
    this.panel.classList.add('active');
    this._renderTable();
  }

  close() {
    this.panel.classList.remove('active');
    this.editForm.classList.remove('active');
  }

  _bindHeader() {
    document.getElementById('admin-close').addEventListener('click', () => this.close());
    document.getElementById('admin-export').addEventListener('click', () => this._export());
    document.getElementById('admin-new').addEventListener('click', () => this._openEdit(null));
    document.getElementById('admin-import').addEventListener('click', () => this._importFile());
    document.getElementById('edit-cancel').addEventListener('click', () => this.editForm.classList.remove('active'));
    document.getElementById('edit-save').addEventListener('click', () => this._saveEdit());
    document.getElementById('edit-delete').addEventListener('click', () => this._deleteEntry());
    document.getElementById('add-field-btn').addEventListener('click', () => this._addFieldRow());
  }

  _renderTable() {
    const tbody = document.getElementById('admin-tbody');
    const db    = [...this._db].sort((a, b) => {
      const va = (a[this._sortCol] || '').toString().toLowerCase();
      const vb = (b[this._sortCol] || '').toString().toLowerCase();
      return va < vb ? -this._sortDir : va > vb ? this._sortDir : 0;
    });

    tbody.innerHTML = db.map((e, idx) => {
      const realIdx = this._db.indexOf(e);
      return `
        <tr data-idx="${realIdx}">
          <td class="col-name">${this._esc(e.name)}</td>
          <td class="col-cat">${this._esc(e.category)}</td>
          <td class="col-summary">${this._esc(e.summary || '')}</td>
          <td style="text-align:center">
            <span class="pub-pill ${e.public !== false ? 'on' : 'off'}" data-idx="${realIdx}">
              ${e.public !== false ? 'PUBLIC' : 'HIDDEN'}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    // Row click → edit
    tbody.querySelectorAll('tr').forEach(row => {
      row.addEventListener('click', e => {
        if (e.target.classList.contains('pub-pill')) return;
        this._openEdit(parseInt(row.dataset.idx, 10));
      });
    });

    // Pub pill toggle without opening edit
    tbody.querySelectorAll('.pub-pill').forEach(pill => {
      pill.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(pill.dataset.idx, 10);
        this._db[idx].public = !(this._db[idx].public !== false);
        pill.className = `pub-pill ${this._db[idx].public ? 'on' : 'off'}`;
        pill.textContent = this._db[idx].public ? 'PUBLIC' : 'HIDDEN';
      });
    });

    // Sort header
    document.querySelectorAll('.admin-table thead th[data-col]').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (col === this._sortCol) this._sortDir *= -1;
        else { this._sortCol = col; this._sortDir = 1; }
        this._renderTable();
      });
    });
  }

  _openEdit(idx) {
    this._editIdx = idx;
    const e = idx !== null ? this._db[idx] : {
      id: 'entry-' + Date.now(),
      name: '', category: 'Concept', aliases: [],
      tags: [], public: true, summary: '', detail: '', fields: {}
    };

    document.getElementById('edit-form-title').textContent =
      idx !== null ? 'EDIT ENTRY — ' + e.name.toUpperCase() : 'NEW ENTRY';
    document.getElementById('ef-id').value       = e.id || '';
    document.getElementById('ef-name').value     = e.name || '';
    document.getElementById('ef-category').value = e.category || 'Concept';
    document.getElementById('ef-aliases').value  = (e.aliases || []).join(', ');
    document.getElementById('ef-tags').value     = (e.tags || []).join(', ');
    document.getElementById('ef-public').checked = e.public !== false;
    document.getElementById('ef-summary').value  = e.summary || '';
    document.getElementById('ef-detail').value   = e.detail || '';
    document.getElementById('edit-delete').style.display = idx !== null ? 'inline-block' : 'none';

    // Build fields — populated first, then empty
    const fields = e.fields || {};
    const sorted = Object.entries(fields).sort(([,va],[,vb]) =>
      (va ? 0 : 1) - (vb ? 0 : 1)
    );
    const container = document.getElementById('fields-container');
    container.innerHTML = '';
    for (const [k, v] of sorted) this._addFieldRow(k, v);

    this.editForm.classList.add('active');
  }

  _addFieldRow(key = '', val = '') {
    const container = document.getElementById('fields-container');
    const row = document.createElement('div');
    row.className = 'field-row';
    row.innerHTML = `
      <input class="edit-input field-key" placeholder="Field name" value="${this._esc(key)}">
      <input class="edit-input field-val" placeholder="Value" value="${this._esc(val)}">
      <button class="remove-field">×</button>
    `;
    row.querySelector('.remove-field').addEventListener('click', () => row.remove());
    container.appendChild(row);
  }

  _saveEdit() {
    const entry = {
      id:       document.getElementById('ef-id').value.trim() || ('entry-' + Date.now()),
      name:     document.getElementById('ef-name').value.trim(),
      category: document.getElementById('ef-category').value,
      aliases:  document.getElementById('ef-aliases').value.split(',').map(s => s.trim()).filter(Boolean),
      tags:     document.getElementById('ef-tags').value.split(',').map(s => s.trim()).filter(Boolean),
      public:   document.getElementById('ef-public').checked,
      summary:  document.getElementById('ef-summary').value.trim(),
      detail:   document.getElementById('ef-detail').value.trim(),
      fields:   {},
    };

    document.querySelectorAll('#fields-container .field-row').forEach(row => {
      const k = row.querySelector('.field-key').value.trim();
      const v = row.querySelector('.field-val').value.trim();
      if (k) entry.fields[k] = v;
    });

    if (this._editIdx !== null) {
      this._db[this._editIdx] = entry;
    } else {
      this._db.push(entry);
    }

    // Sync to global so oracle picks up live changes
    window.MARDUK_DB = this._db;

    this.editForm.classList.remove('active');
    this._renderTable();
  }

  _deleteEntry() {
    if (this._editIdx === null) return;
    if (!confirm(`Delete "${this._db[this._editIdx].name}"?`)) return;
    this._db.splice(this._editIdx, 1);
    window.MARDUK_DB = this._db;
    this.editForm.classList.remove('active');
    this._renderTable();
  }

  _export() {
    const json = JSON.stringify(this._db, null, 2);
    const content = `// MARDUK ORACLE — CANONICAL DATABASE\n// Generated: ${new Date().toISOString()}\n// Replace this file on the server to update the oracle's knowledge.\n\nwindow.MARDUK_DB = ${json};\n`;
    const blob = new Blob([content], { type: 'text/javascript' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'db.js'; a.click();
    URL.revokeObjectURL(url);
  }

  _importFile() {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.js,.json';
    input.onchange = () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          // Try JSON first
          let parsed;
          const text = reader.result;
          if (file.name.endsWith('.json')) {
            parsed = JSON.parse(text);
          } else {
            // Execute the db.js script in a sandboxed way
            const fn = new Function('window', text + '; return window.MARDUK_DB;');
            const tmp = {};
            parsed = fn(tmp) || tmp.MARDUK_DB;
          }
          if (Array.isArray(parsed)) {
            this._db = parsed;
            window.MARDUK_DB = parsed;
            this._renderTable();
            alert(`Imported ${parsed.length} entries.`);
          } else {
            alert('Could not parse database file. Expected array.');
          }
        } catch (err) {
          alert('Import failed: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  _esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
