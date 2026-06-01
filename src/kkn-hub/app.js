/* ── ROUTER ── */
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item');

function showPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  navItems.forEach(n => { n.classList.remove('active'); n.removeAttribute('aria-current'); });
  const page = document.getElementById('page-' + id);
  const nav = document.querySelector(`.nav-item[data-page="${id}"]`);
  if (page) { page.classList.add('active'); renderPage(id); }
  if (nav) { nav.classList.add('active'); nav.setAttribute('aria-current', 'page'); }
  lsSet('kkn-page', id);
}

navItems.forEach(item => {
  const go = () => { showPage(item.dataset.page); closeSidebar(); };
  item.addEventListener('click', go);
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
  });
});

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const open = sb.classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show', open);
  const burger = document.getElementById('hamburger');
  if (burger) burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  syncSidebarInert();
  if (open) { const first = sb.querySelector('.nav-item'); if (first) first.focus(); }
}
function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('show');
  const burger = document.getElementById('hamburger');
  if (burger) burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  syncSidebarInert();
}
/* Keep the off-canvas mobile drawer out of the tab order / a11y tree when closed;
   desktop sidebar is always-visible so stays interactive. */
function syncSidebarInert() {
  const sb = document.getElementById('sidebar');
  if (!sb) return;
  const mobile = window.matchMedia('(max-width:700px)').matches;
  if (mobile && !sb.classList.contains('open')) sb.setAttribute('inert', '');
  else sb.removeAttribute('inert');
}

/* ── localStorage safe write (private mode / quota) ── */
function lsSet(k, v) {
  try { localStorage.setItem(k, v); return true; } catch { return false; }
}

/* ── USER (lightweight personalization, no backend) ── */
function getUser() { try { return localStorage.getItem('kkn-user') || ''; } catch { return ''; } }
function firstName(full) { return (full || '').split(' ')[0]; }
function setUser(n) {
  if (!lsSet('kkn-user', n)) showToast('Browser memblok penyimpanan (mode privat?)', 'warn');
  updateTopbarUser();
  renderDashboard();
}
function clearUser() {
  try { localStorage.removeItem('kkn-user'); } catch {}
  updateTopbarUser();
  renderDashboard();
}
function updateTopbarUser() {
  const el = document.getElementById('tb-user');
  if (!el) return;
  const me = getUser();
  el.textContent = (me && me !== 'Tamu') ? '👤 ' + firstName(me) : '⚡ Klp. 2';
}
function myDocsHtml(me) {
  const fn = firstName(me);
  const docs = [];
  (KKN.dokumenKelompok || []).forEach(c => (c.files || []).forEach(f => {
    if (f.forPerson && fn && fn.startsWith(f.forPerson)) docs.push(f);
  }));
  if (!docs.length) return '';
  return `<div class="mt-sec"><div class="mt-sec-title">Dokumen untukmu</div>${docs.map(f =>
    `<div class="mt-doc">📄 ${f.name}</div>`).join('')}</div>`;
}
function renderMyTask(me) {
  if (!me) {
    return `
      <div class="mytask">
        <div class="mt-eyebrow">Selamat datang</div>
        <div class="mt-welcome-title">Kamu siapa?</div>
        <div class="mt-welcome-sub">Pilih namamu — biar HUB langsung nunjukin tugas &amp; dokumenmu di halaman ini.</div>
        <div class="mt-picker">
          ${(KKN.taskAssignments || []).map(p => `
            <button class="mt-pick" onclick="setUser('${escAttr(p.anggota)}')"><span aria-hidden="true">${p.emoji}</span> ${firstName(p.anggota)}</button>`).join('')}
        </div>
        <div class="mt-guest">Cuma lihat-lihat? <button class="linkbtn" onclick="setUser('Tamu')">Lanjut sebagai tamu</button></div>
      </div>`;
  }
  const tdata = (KKN.taskAssignments || []).find(x => x.anggota === me);
  if (!tdata) {
    return `
      <div class="mytask">
        <div class="mt-head"><div class="mt-eyebrow">Mode tamu</div><button class="linkbtn" onclick="clearUser()">pilih nama</button></div>
        <div class="mt-title">Selamat datang 👋</div>
        <div class="mt-role">Jelajahi info KKN lewat menu atau tombol cepat di bawah.</div>
        <div class="mt-actions">
          <button class="btn btn-primary btn-sm" onclick="showPage('proker')">Lihat Proker SMA →</button>
          <button class="btn btn-ghost btn-sm" onclick="showPage('search')">🤖 Tanya AI</button>
        </div>
      </div>`;
  }
  const preWorkshopPhase = today() < parseDate('2026-08-03');
  return `
    <div class="mytask">
      <div class="mt-head">
        <div class="mt-eyebrow">Tugasmu · Workshop SMA (Agustus)</div>
        <button class="linkbtn" onclick="clearUser()">ganti orang</button>
      </div>
      <div class="mt-title"><span aria-hidden="true">${tdata.emoji}</span> Halo, ${firstName(tdata.anggota)} 👋</div>
      <div class="mt-role">${tdata.prodi} · <span class="mt-status">${tdata.status}</span></div>
      ${preWorkshopPhase ? `<div class="mt-note"><span aria-hidden="true">📌</span> Fokus terdekat masih <strong>SO Eyecare (Juni)</strong> — langkah berikutnya ada di kartu situasi di bawah &amp; halaman Prosedur. Bagian ini untuk <strong>Workshop SMA (Agustus)</strong>.</div>` : ''}
      <div class="mt-sec">
        <div class="mt-sec-title">Saat workshop (Agustus)</div>
        <ul>${tdata.perWorkshop.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
      ${tdata.preWorkshop && tdata.preWorkshop.length ? `
      <div class="mt-sec">
        <div class="mt-sec-title">Sebelum workshop</div>
        <ul>${tdata.preWorkshop.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>` : ''}
      ${myDocsHtml(me)}
      <div class="mt-actions">
        <button class="btn btn-primary btn-sm" onclick="showPage('tugas')">Lihat semua tugas →</button>
        <button class="btn btn-ghost btn-sm" onclick="showPage('search')">🤖 Tanya AI</button>
      </div>
    </div>`;
}

/* ── MODAL (focus-managed, Escape-closable) ── */
let _lastFocus = null;
function openModal(title, bodyHtml) {
  closeModal();
  _lastFocus = document.activeElement;
  const m = document.createElement('div');
  m.className = 'modal';
  m.id = 'app-modal';
  m.setAttribute('role', 'dialog');
  m.setAttribute('aria-modal', 'true');
  m.setAttribute('aria-label', title);
  m.innerHTML = `
    <div class="modal-card">
      <div class="modal-head">
        <div class="modal-title">${title}</div>
        <button class="modal-close" aria-label="Tutup" onclick="closeModal()">✕</button>
      </div>
      <div>${bodyHtml}</div>
    </div>`;
  m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  document.body.appendChild(m);
  document.body.style.overflow = 'hidden';
  setBgInert(true);
  const closeBtn = m.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}
function closeModal() {
  const m = document.getElementById('app-modal');
  if (m) m.remove();
  setBgInert(false);
  document.body.style.overflow = '';
  if (_lastFocus && _lastFocus.focus) { _lastFocus.focus(); _lastFocus = null; }
}
/* Make everything behind an open modal non-interactive (enforces aria-modal). */
function setBgInert(on) {
  ['main', 'topbar', 'overlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { if (on) el.setAttribute('inert', ''); else el.removeAttribute('inert'); }
  });
  const sb = document.getElementById('sidebar');
  if (sb) { if (on) sb.setAttribute('inert', ''); else syncSidebarInert(); }
}

function renderPage(id) {
  if (id === 'dashboard') renderDashboard();
  else if (id === 'timeline') renderTimeline();
  else if (id === 'team') renderTeam();
  else if (id === 'prosedur') renderProsedur();
  else if (id === 'checklist') renderChecklist();
  else if (id === 'notes') renderNotes();
  else if (id === 'search') initSearch();
  else if (id === 'proker') { renderProkerFinal(); renderDecisionLog(); renderProker(); }
  else if (id === 'tugas') renderTugas();
  else if (id === 'dokumen') renderDokumen();
}

/* ── DATE HELPERS ── */
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function today() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

function fmtDate(d) {
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ── MARKDOWN PARSER ── */
function md(raw) {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fmt = s => s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  const lines = raw.split('\n');
  let html = '';
  let inUl = false, inOl = false;

  const closeList = () => {
    if (inUl) { html += '</ul>'; inUl = false; }
    if (inOl) { html += '</ol>'; inOl = false; }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { closeList(); html += '<br>'; continue; }

    const hMatch = trimmed.match(/^(#{1,4}) (.+)/);
    const ulMatch = trimmed.match(/^[*-] (.+)/);
    const olMatch = trimmed.match(/^\d+\. (.+)/);

    if (hMatch) {
      closeList();
      const tag = hMatch[1].length <= 2 ? 'h3' : 'h4';
      html += `<${tag}>${fmt(esc(hMatch[2]))}</${tag}>`;
    } else if (ulMatch) {
      if (!inUl) { closeList(); html += '<ul>'; inUl = true; }
      html += `<li>${fmt(esc(ulMatch[1]))}</li>`;
    } else if (olMatch) {
      if (!inOl) { closeList(); html += '<ol>'; inOl = true; }
      html += `<li>${fmt(esc(olMatch[1]))}</li>`;
    } else {
      closeList();
      html += fmt(esc(trimmed)) + '<br>';
    }
  }

  closeList();
  return html.replace(/(<br>)+$/, '').replace(/^(<br>)+/, '');
}

/* ── DASHBOARD — PHASE BRIEFS ── */
function getSituation(t) {
  if (t < parseDate('2026-06-13')) return {
    color: 'var(--indigo)', border: 'var(--indigo)', glow: 'rgba(129,140,248,.08)',
    tag: 'Fase 1 · Persiapan',
    title: 'Persiapan Menuju Service Day',
    sub: 'Kamu masih punya waktu untuk siap sepenuhnya sebelum program dimulai.',
    actions: [
      'Pelajari 10 prosedur vision screening (halaman Prosedur)',
      'Kerjakan semua item checklist persiapan',
      'Pahami peran UKDW: translasi & support komunikasi, bukan operator alat',
      'Ingat: Funduscopy (alat no. 10) RESTRICTED — hanya mahasiswa PolyU HK yang boleh operasikan',
      'Pantau update dari DPL/APL di WhatsApp grup',
      'Konfirmasi jadwal training SO Eyecare (13–19 Juni)',
    ],
  };
  if (t < parseDate('2026-06-20')) return {
    color: 'var(--violet)', border: 'var(--violet)', glow: 'rgba(192,132,252,.08)',
    tag: 'Fase 1 · Training SO Eyecare',
    title: 'Minggu Training — Paling Krusial',
    sub: 'Minggu ini menentukan kesiapanmu untuk 5 hari service day.',
    actions: [
      'Ikuti sesi training SO Eyecare bersama tim PolyU',
      'Pelajari alur 10 prosedur — tanyakan yang tidak jelas sekarang',
      'Ingat: Funduscopy (no. 10) RESTRICTED ke PolyU HK only',
      'Cek pembagian peran tim di tabel Rotasi (halaman Prosedur)',
      'Siapkan seragam, ID card, dan perlengkapan lapangan',
    ],
  };
  if (t < parseDate('2026-06-21')) return {
    color: 'var(--gold)', border: 'var(--gold)', glow: 'rgba(251,191,36,.08)',
    tag: 'Hari Ini · Opening Ceremony',
    title: 'Hari H — Opening Ceremony',
    sub: 'Service Day 1 mulai besok — pastikan semua persiapan final.',
    actions: [
      'Hadir di Opening Ceremony tepat waktu',
      'Catat titik kumpul dan jadwal Service Day 1 besok',
      'Cek rotasi tim untuk hari pertama di halaman Prosedur',
      'Pastikan semua item checklist sudah tercentang',
    ],
  };
  if (t <= parseDate('2026-06-27')) {
    const day = Math.min(5, Math.max(1, daysBetween(parseDate('2026-06-21'), t) + 1));
    return {
      color: 'var(--orange)', border: 'var(--orange)', glow: 'rgba(251,146,60,.08)',
      tag: `Fase 2 · Service Day ${day} dari 5`,
      title: 'SO Eyecare Sedang Berlangsung',
      sub: 'Fokus, jaga stamina, dan support komunikasi dengan anak-anak.',
      actions: [
        `Cek rotasi tim hari ini (Service Day ${day}) di tabel Rotasi`,
        'Briefing pagi bersama tim PolyU sebelum mulai screening',
        'Peran UKDW: translasi in-class + support komunikasi anak-anak',
        'Funduscopy (alat no. 10) RESTRICTED — jangan operasikan, itu hanya untuk PolyU HK',
        'Catat hal penting di halaman Catatan',
        'Tanyakan ke APL jika ada prosedur yang tidak jelas saat lapangan',
      ],
    };
  }
  if (t < parseDate('2026-08-03')) return {
    color: 'var(--cyan)', border: 'var(--cyan)', glow: 'rgba(34,211,238,.08)',
    tag: 'Fase 3 · Pasca SD/SMP',
    title: 'Produksi Konten & Persiapan SMA',
    sub: 'Video edukasi + proposal SMA harus selesai sebelum Agustus.',
    actions: [
      'Video edukasi mata 5–10 menit — semua anggota wajib tampil — 28–29 Juni',
      'Susun proposal workshop SMA — harus disetujui DPL sebelum dimulai',
      'Persiapan Orientation Session PolyU HK (19 Juli)',
      'Siapkan materi interactive games untuk mahasiswa PolyU (~1 jam)',
      'Tulis laporan refleksi pribadi dari fase SD/SMP',
    ],
  };
  if (t <= parseDate('2026-08-07')) {
    const day2 = Math.min(5, Math.max(1, daysBetween(parseDate('2026-08-03'), t) + 1));
    return {
      color: 'var(--green)', border: 'var(--green)', glow: 'rgba(52,211,153,.08)',
      tag: `Fase 4 · Workshop SMA — Hari ${day2}`,
      title: 'Workshop Softskill SMA Berlangsung',
      sub: 'Eksekusi materi workshop, dokumentasi, dan evaluasi harian.',
      actions: [
        `Workshop SMA hari ke-${day2} — cek lokasi & jadwal`,
        'Jalankan materi sesuai proposal yang sudah disetujui DPL',
        'Dokumentasi foto/video untuk laporan akhir',
        'Evaluasi harian dan catat poin untuk laporan',
      ],
    };
  }
  return {
    color: 'var(--indigo)', border: 'var(--indigo)', glow: 'rgba(129,140,248,.08)',
    tag: 'Fase Penutupan',
    title: 'Laporan & Presentasi Akhir',
    sub: 'Garis finish sudah dekat — selesaikan dengan baik.',
    actions: [
      'Susun laporan akhir KKN sesuai format LPPM',
      'Presentasi ke DPL: 14 Agustus 2026',
      'Upload semua dokumentasi dan foto kegiatan',
      'Evaluasi bersama tim dan refleksi program',
    ],
  };
}

/* ── DASHBOARD ── */
function renderDashboard() {
  const t = today();
  const sit = getSituation(t);

  updateTopbarUser();

  // My Task card (personalized)
  const mtEl = document.getElementById('my-task-card');
  if (mtEl) mtEl.innerHTML = renderMyTask(getUser());

  // Latest Update Banner
  const lubEl = document.getElementById('latest-update-banner');
  if (lubEl && KKN.latestUpdates && KKN.latestUpdates.length) {
    const latest = KKN.latestUpdates[0];
    const tagColor = {
      'DECISION': 'var(--gold)',
      'NEW': 'var(--green)',
      'UPDATE': 'var(--indigo)',
      'ALERT': 'var(--rose)',
    }[latest.tag] || 'var(--indigo)';
    lubEl.innerHTML = `
      <div class="lub-card" style="border-color:${tagColor}">
        <div class="lub-tag" style="background:${tagColor}">${latest.tag}</div>
        <div class="lub-content">
          <div class="lub-meta">
            <span class="lub-date">📡 Update ${fmtDate(parseDate(latest.date))}</span>
            ${KKN.latestUpdates.length > 1 ? `<button class="linkbtn" onclick="showAllUpdates()">+ ${KKN.latestUpdates.length - 1} update lainnya</button>` : ''}
          </div>
          <div class="lub-title">${latest.title}</div>
          <div class="lub-desc">${latest.desc}</div>
          ${latest.gotoPage ? `<button class="lub-btn" onclick="showPage('${latest.gotoPage}')">Buka halaman →</button>` : ''}
        </div>
      </div>`;
  }

  // Situation card
  const sitEl = document.getElementById('situation-card');
  if (sitEl) {
    sitEl.style.background = 'var(--card)';
    sitEl.style.borderColor = sit.border;
    sitEl.style.setProperty('--glow', sit.glow);
    sitEl.innerHTML = `
      <div class="phase-tag" style="color:${sit.color}">${sit.tag}</div>
      <div class="phase-title">${sit.title}</div>
      <div class="phase-sub">${sit.sub}</div>
      <ul class="action-list">
        ${sit.actions.map(a => `<li>${a}</li>`).join('')}
      </ul>`;
  }

  // Countdown widget
  const milestones = [
    { date: '2026-06-21', label: 'Service Day 1', color: 'var(--orange)' },
    { date: '2026-07-19', label: 'Orientation Session', color: 'var(--violet)' },
    { date: '2026-08-03', label: 'Service Day SMA 1', color: 'var(--green)' },
    { date: '2026-08-14', label: 'Presentasi ke DPL', color: 'var(--cyan)' },
  ];
  const next = milestones.find(m => parseDate(m.date) >= t) || milestones[milestones.length - 1];
  const daysLeft = Math.max(0, daysBetween(t, parseDate(next.date)));

  const cdEl = document.getElementById('countdown-widget');
  if (cdEl) {
    cdEl.innerHTML = `
      <div class="sec-label">Hitung Mundur</div>
      <div class="cd-days" style="color:${next.color}">${daysLeft}</div>
      <div class="cd-label">hari lagi</div>
      <div class="cd-event">menuju <strong>${next.label}</strong></div>
      <div class="cd-date">${fmtDate(parseDate(next.date))}</div>`;
  }

  // Quick contacts
  const qcEl = document.getElementById('quick-contacts');
  if (qcEl) {
    qcEl.innerHTML = KKN.contacts.map(c => `
      <div class="qc-row">
        <span class="qc-role">${c.role}</span>
        <div style="flex:1;min-width:0">
          <div class="qc-name">${c.nama.split(',')[0]}</div>
          <div class="qc-phone">${c.phoneDisplay}</div>
        </div>
        <a href="tel:+${c.phone.replace(/[^0-9]/g,'')}" class="btn btn-ghost btn-sm" aria-label="Telepon ${c.nama.split(',')[0]}" style="flex-shrink:0">📞</a>
      </div>`).join('');
  }

  // Checklist teaser
  const ctEl = document.getElementById('check-teaser-items');
  if (ctEl) {
    const state = getCheckState();
    const urgent = KKN.checklist.filter(c => !state[c.id] && c.urgent);
    const allPending = KKN.checklist.filter(c => !state[c.id]);
    const done = KKN.checklist.length - allPending.length;
    const show = (urgent.length ? urgent : allPending).slice(0, 4);

    if (!allPending.length) {
      ctEl.innerHTML = '<div style="color:var(--green);font-size:13px;font-weight:600">✓ Semua checklist selesai!</div>';
    } else {
      ctEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:10px">
          <span style="font-size:12px;color:var(--t2)">${done}/${KKN.checklist.length} selesai</span>
          <button class="linkbtn" onclick="showPage('checklist')">Lihat semua →</button>
        </div>
        ${show.map(c => `
          <div class="ct-item">
            <div class="ct-dot" style="background:${c.urgent ? 'var(--rose)' : 'var(--border-h)'}"></div>
            <span style="flex:1;font-size:13px">${c.text}</span>
          </div>`).join('')}`;
    }
  }

  // Progress bar
  const progEl = document.getElementById('dash-progress');
  if (progEl) {
    const total = daysBetween(parseDate('2026-05-09'), parseDate('2026-08-14'));
    const elapsed = Math.max(0, Math.min(total, daysBetween(parseDate('2026-05-09'), t)));
    const pct = Math.round(elapsed / total * 100);
    progEl.innerHTML = `
      <div class="prog-wrap">
        <div class="prog-header">
          <span class="prog-title">Progress KKN Keseluruhan</span>
          <span class="prog-num">${pct}%</span>
        </div>
        <div class="prog-bar" style="margin-top:8px"><div class="prog-fill" style="width:${pct}%;background:var(--indigo)"></div></div>
        <div class="prog-labels"><span>9 Mei 2026</span><span>14 Agt 2026</span></div>
      </div>`;
  }
}

/* ── TIMELINE / GANTT ── */
function renderTimeline() {
  const el = document.getElementById('gantt-body');
  if (!el) return;

  const START = parseDate('2026-05-09');
  const END = parseDate('2026-08-14');
  const TOTAL = daysBetween(START, END);
  const T = today();

  const colorMap = { cyan:'g-cyan', indigo:'g-indigo', purple:'g-violet', orange:'g-orange', green:'g-green', violet:'g-violet', gold:'g-gold', red:'g-rose', rose:'g-rose' };

  let html = '';
  [...KKN.timeline].sort((a, b) => parseDate(a.start) - parseDate(b.start)).forEach(ev => {
    const s = parseDate(ev.start);
    const e = parseDate(ev.end);
    const left = Math.max(0, daysBetween(START, s) / TOTAL * 100);
    const width = Math.max(0.8, (daysBetween(s, e) + 1) / TOTAL * 100);
    const isDone = e < T;
    html += `
      <div class="gantt-row">
        <div class="gantt-lbl">${ev.label}</div>
        <div class="gantt-track">
          <div class="gantt-bar ${colorMap[ev.color] || 'g-indigo'}${isDone ? ' done' : ''}"
            style="left:${left.toFixed(2)}%;width:${width.toFixed(2)}%"
            title="${ev.start} → ${ev.end}">
            ${width > 4 ? ev.label : ''}
          </div>
        </div>
      </div>`;
  });

  const todayLeft = Math.min(100, Math.max(0, daysBetween(START, T) / TOTAL * 100));
  const todayMarker = `
    <div class="gantt-row" style="margin-top:4px">
      <div class="gantt-lbl" style="color:var(--rose);font-weight:600;font-size:10px">▶ Hari ini</div>
      <div class="gantt-track" style="background:transparent">
        <div class="gantt-today" style="left:${todayLeft.toFixed(2)}%">
          <div class="gantt-today-label">Hari ini · ${fmtDate(T)}</div>
        </div>
      </div>
    </div>`;

  el.innerHTML = todayMarker + html;
}

/* ── TEAM ── */
function renderTeam() {
  const el = document.getElementById('team-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';

  const colorCls = { cyan:'av-cyan', purple:'av-violet', orange:'av-gold', green:'av-green', indigo:'av-indigo', violet:'av-violet', gold:'av-gold' };
  let html = '<div class="g2" style="gap:12px">';
  KKN.team.forEach(m => {
    html += `
      <div class="member-card${m.isMe ? ' me' : ''}">
        <div class="avatar ${colorCls[m.color] || 'av-indigo'}">${m.emoji}</div>
        <div>
          <div class="m-name">${m.nama}${m.isMe ? ' <span class="badge b-indigo" style="font-size:10px">Ketua</span>' : ''}</div>
          <div class="m-prodi">${m.prodi}</div>
          <div style="margin-top:6px">
            <span class="badge ${m.gender === 'Pria' ? 'b-violet' : 'b-orange'}" style="font-size:10px">${m.gender}</span>
          </div>
        </div>
      </div>`;
  });
  html += '</div>';

  html += '<div class="gap"><div class="ph2" role="heading" aria-level="2">DPL & APL</div></div>';
  html += '<div class="gap-sm" style="display:flex;flex-direction:column;gap:10px">';
  KKN.contacts.forEach(c => {
    html += `
      <div class="contact-card">
        <div class="avatar av-indigo">👤</div>
        <div style="flex:1">
          <div class="c-role">${c.role}</div>
          <div class="c-name">${c.nama}</div>
          <div class="c-phone">${c.phoneDisplay}</div>
          <div style="font-size:11px;color:var(--t3);margin-top:2px">${c.note}</div>
        </div>
        <a href="tel:+${c.phone.replace(/[^0-9]/g,'')}" class="btn btn-ghost btn-sm" aria-label="Telepon ${c.nama}">📞 Hubungi</a>
      </div>`;
  });
  html += '</div>';

  html += '<div class="gap"><div class="ph2" role="heading" aria-level="2">Teman di Kelompok Lain</div></div>';
  html += '<div class="gap-sm g2">';
  KKN.friendGroups.forEach(f => {
    html += `
      <div class="card" style="border-color:var(--violet-d)">
        <div style="font-weight:600;font-size:13px">${f.nama}</div>
        <div style="font-size:12px;color:var(--t2);margin-top:3px">${f.prodi}</div>
        <div style="margin-top:8px"><span class="badge b-violet">Kelompok ${f.kelompok}</span></div>
      </div>`;
  });
  html += '</div>';

  el.innerHTML = html;
}

/* ── PROSEDUR ── */
function renderProsedur() {
  const el = document.getElementById('prosedur-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';

  let html = '<div class="proc-list">';
  KKN.procedures.forEach(p => {
    html += `
      <div class="proc-item${p.restricted ? ' restricted-item' : ''}">
        <div class="proc-num ${p.restricted ? 'pn-restricted' : 'pn-normal'}">${p.no}</div>
        <div class="proc-content">
          <div class="proc-name">
            ${p.name}
            ${p.restricted ? '<span class="badge b-rose">⛔ RESTRICTED — PolyU only</span>' : ''}
          </div>
          <div class="proc-en">🔤 ${p.en}</div>
          <div class="proc-desc">${p.desc}</div>
          <div class="proc-alat">🔧 Alat: ${p.alat}</div>
        </div>
      </div>`;
  });
  html += '</div>';

  html += `
    <div class="gap">
      <div class="ph2" role="heading" aria-level="2">Rotasi Tim per Service Day</div>
      <div class="gap-sm">
        <table class="rot-table">
          <thead><tr><th>Hari</th><th>Vision Screening (VS)</th><th>Education (Edu)</th></tr></thead>
          <tbody>`;
  KKN.serviceTeamRotation.forEach(r => {
    html += `<tr><td>${r.day}</td><td><span class="badge b-orange">${r.vs}</span></td><td><span class="badge b-cyan">${r.edu}</span></td></tr>`;
  });
  html += `</tbody></table>
      </div>
    </div>`;

  html += `
    <div class="gap">
      <div class="ph2" role="heading" aria-level="2">Pembagian Tim Edukasi</div>
      <div class="gap-sm g3">`;
  KKN.eduTeams.forEach(e => {
    html += `
      <div class="card">
        <div class="badge b-cyan" style="margin-bottom:10px">${e.team}</div>
        <div style="font-size:22px;font-weight:800;color:var(--cyan)">${e.usia}</div>
        <div style="font-size:11px;color:var(--t2);margin-top:4px">${e.note}</div>
      </div>`;
  });
  html += `</div></div>`;

  el.innerHTML = html;
}

/* ── CHECKLIST ── */
function getCheckState() {
  try { return JSON.parse(localStorage.getItem('kkn-checks') || '{}'); } catch { return {}; }
}
function setCheckState(s) { lsSet('kkn-checks', JSON.stringify(s)); }

function renderChecklist() {
  const el = document.getElementById('checklist-body');
  if (!el) return;

  const state = getCheckState();
  const done = KKN.checklist.filter(c => state[c.id]).length;
  const total = KKN.checklist.length;
  const pct = Math.round(done / total * 100);

  const groups = {};
  KKN.checklist.forEach(c => {
    if (!groups[c.category]) groups[c.category] = [];
    groups[c.category].push(c);
  });

  let html = `
    <div class="prog-wrap" style="margin-bottom:22px">
      <div class="prog-header">
        <span class="prog-title">Progress Checklist</span>
        <span class="prog-num">${done}/${total} selesai</span>
      </div>
      <div class="prog-bar" style="margin-top:8px"><div class="prog-fill" style="width:${pct}%;background:var(--indigo)"></div></div>
      <div class="prog-labels"><span>${pct}% selesai</span><span>${total - done} item tersisa</span></div>
    </div>`;

  Object.entries(groups).forEach(([cat, items]) => {
    html += `<div class="check-group"><div class="check-group-title">${cat}</div>`;
    items.forEach(item => {
      const checked = !!state[item.id];
      html += `
        <label class="check-item" for="chk-${item.id}">
          <input type="checkbox" id="chk-${item.id}" data-id="${item.id}" ${checked ? 'checked' : ''}>
          <span class="check-label${checked ? ' done' : ''}">${item.text}${item.urgent ? '<span class="urgent-tag">Urgent</span>' : ''}</span>
        </label>`;
    });
    html += '</div>';
  });

  html += `<button class="btn btn-ghost btn-sm" onclick="resetChecklist()" style="margin-top:8px">↺ Reset Semua</button>`;
  el.innerHTML = html;

  el.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      const s = getCheckState();
      s[cb.dataset.id] = cb.checked;
      setCheckState(s);
      renderChecklist();
    });
  });
}

function resetChecklist() {
  if (confirm('Reset semua checklist?')) { localStorage.removeItem('kkn-checks'); renderChecklist(); }
}

/* ── NOTES ── */
function getNotes() {
  try { return JSON.parse(localStorage.getItem('kkn-notes') || '[]'); } catch { return []; }
}
function saveNotes(n) { lsSet('kkn-notes', JSON.stringify(n)); }

function renderNotes() {
  const el = document.getElementById('notes-list');
  if (!el) return;
  const notes = getNotes();
  if (!notes.length) {
    el.innerHTML = '<div class="note-empty">Belum ada catatan. Mulai tulis di atas!</div>';
    return;
  }
  el.innerHTML = notes.map((n, i) => `
    <div class="note-item">
      <div class="note-header">
        <span class="note-time">🕐 ${n.time}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteNote(${i})">Hapus</button>
      </div>
      <div class="note-text">${escHtml(n.text)}</div>
    </div>`).join('');
}

function addNote() {
  const ta = document.getElementById('note-input');
  const text = ta.value.trim();
  if (!text) return;
  const notes = getNotes();
  notes.unshift({ text, time: new Date().toLocaleString('id-ID') });
  saveNotes(notes);
  ta.value = '';
  renderNotes();
}

function deleteNote(i) {
  const notes = getNotes();
  notes.splice(i, 1);
  saveNotes(notes);
  renderNotes();
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
}

/* ── SEARCH (Fuse.js) ── */
let fuse = null;
let searchReady = false;

function initSearch() {
  if (searchReady) return;
  searchReady = true;

  const corpus = [];
  KKN.faq.forEach(f => corpus.push({ category: 'FAQ', title: f.q, body: f.a, tags: f.tags.join(' ') }));
  KKN.procedures.forEach(p => corpus.push({ category: 'Prosedur', title: p.name + ' — ' + p.en, body: p.desc + '. Alat: ' + p.alat, tags: p.restricted ? 'restricted PolyU' : '' }));
  KKN.timeline.forEach(e => corpus.push({ category: 'Timeline', title: e.label, body: `${e.start} sampai ${e.end}. Fase: ${e.phase}`, tags: 'jadwal tanggal' }));
  KKN.locations.sdSmp.forEach(l => corpus.push({ category: 'Lokasi', title: l.nama, body: `Jenjang: ${l.jenjang}. ${l.confirmed ? 'Sudah dikonfirmasi.' : 'Belum dikonfirmasi (TBC).'}`, tags: 'sekolah lokasi' }));
  KKN.team.forEach(m => corpus.push({ category: 'Tim', title: m.nama, body: `Prodi: ${m.prodi}. Gender: ${m.gender}. ${m.isMe ? 'Ketua kelompok.' : ''}`, tags: 'anggota kelompok' }));
  KKN.contacts.forEach(c => corpus.push({ category: 'Kontak', title: c.role + ' — ' + c.nama, body: `Kontak: ${c.phoneDisplay}. ${c.note}`, tags: 'DPL APL kontak' }));

  fuse = new Fuse(corpus, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'body', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'category', weight: 0.1 },
    ],
    threshold: 0.45,
    includeScore: true,
    minMatchCharLength: 2,
  });

  const inp = document.getElementById('search-input');
  const out = document.getElementById('search-results');
  if (!inp || !out) return;

  out.innerHTML = '<div style="font-size:12px;color:var(--t3);margin-bottom:10px">Pertanyaan umum:</div>' +
    KKN.faq.slice(0, 6).map(f => `
      <div class="sr-item" role="button" tabindex="0" onclick="this.classList.toggle('sr-expanded')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('sr-expanded')}">
        <div class="sr-cat">FAQ</div>
        <div class="sr-title">${f.q}</div>
        <div class="sr-body">${f.a}</div>
      </div>`).join('');

  inp.addEventListener('input', () => {
    const q = inp.value.trim();
    if (!q) { searchReady = false; initSearch(); return; }
    const results = fuse.search(q).slice(0, 8);
    if (!results.length) {
      out.innerHTML = '<div style="color:var(--t3);font-size:13px;padding:20px;text-align:center">Tidak ada hasil untuk "<strong>' + escHtml(q) + '</strong>"</div>';
      return;
    }
    out.innerHTML = results.map(r => `
      <div class="sr-item" role="button" tabindex="0" onclick="this.classList.toggle('sr-expanded')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('sr-expanded')}">
        <div class="sr-cat">${r.item.category}</div>
        <div class="sr-title">${r.item.title}</div>
        <div class="sr-body">${r.item.body}</div>
      </div>`).join('');
  });
}

function escAttr(s) { return s.replace(/'/g, '&#39;').replace(/"/g, '&quot;'); }

/* ── GEMINI AI Q&A ── */
function getApiKey() { try { return localStorage.getItem('kkn-gemini-key') || GEMINI_DEFAULT_KEY || ''; } catch { return GEMINI_DEFAULT_KEY || ''; } }
function setApiKey(k) { lsSet('kkn-gemini-key', k); }

function saveApiKey() {
  const inp = document.getElementById('api-key-input');
  if (!inp) return;
  const k = inp.value.trim();
  setApiKey(k);
  inp.type = 'password';
  showToast(k ? 'API Key tersimpan ✓' : 'API Key dihapus');
}

function toggleApiKey() {
  const inp = document.getElementById('api-key-input');
  if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
}

let chatHistory = [];
let chatSending = false;

function appendChat(role, text) {
  const box = document.getElementById('chat-box');
  if (!box) return null;
  const isEmpty = box.querySelector('.chat-empty');
  if (isEmpty) isEmpty.remove();
  const el = document.createElement('div');
  el.className = 'cmsg ' + role;
  const content = role === 'ai' ? md(text) : escHtml(text);
  el.innerHTML = `
    <div class="cavatar" aria-hidden="true">${role === 'ai' ? '🤖' : '🧑'}</div>
    <div class="cbubble">${content}</div>`;
  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
  return el;
}

async function sendChat() {
  if (chatSending) return;
  const inp = document.getElementById('chat-input');
  const btn = document.getElementById('chat-send');
  if (!inp) return;
  const q = inp.value.trim();
  if (!q) return;

  const apiKey = getApiKey();
  if (!apiKey) { showToast('Masukkan API Key Gemini dulu!', 'warn'); return; }

  chatSending = true;
  inp.value = '';
  appendChat('user', q);
  chatHistory.push({ role: 'user', parts: [{ text: q }] });

  if (btn) btn.disabled = true;
  const loadingEl = appendChat('ai', '⏳ Sedang berpikir...');

  try {
    const body = {
      contents: [
        { role: 'user', parts: [{ text: GEMINI_CONTEXT }] },
        { role: 'model', parts: [{ text: 'Saya siap membantu menjawab pertanyaan seputar KKN STEM 2026 Kelompok 2.' }] },
        ...chatHistory,
      ],
      generationConfig: { temperature: 0.7, maxOutputTokens: 1500 },
    };

    const MODELS = ['gemini-2.5-flash-lite', 'gemini-2.0-flash-lite', 'gemini-flash-lite-latest', 'gemini-2.5-flash'];
    let res, data;
    for (const model of MODELS) {
      res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      data = await res.json();
      if (!data.error) break;
    }

    if (loadingEl) loadingEl.remove();

    if (data.error) throw new Error(data.error.message);
    const cand = data.candidates?.[0];
    const reply = cand?.content?.parts?.[0]?.text || 'Tidak ada respons.';
    const truncated = cand?.finishReason === 'MAX_TOKENS';
    appendChat('ai', reply + (truncated ? '\n\n*(jawaban dipotong — tanya lanjutan untuk sisanya)*' : ''));
    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
  } catch (err) {
    if (loadingEl) loadingEl.remove();
    appendChat('ai', '❌ Error: ' + err.message + '. Cek API key dan koneksi internet.');
    chatHistory.pop();
  } finally {
    chatSending = false;
    if (btn) btn.disabled = false;
  }
}

const CHAT_EMPTY_HTML = `Tanyakan apapun soal KKN STEM 2026...<br><br>Contoh:<br>"Apa yang harus aku lakukan saat service day?"<br>"Jelaskan prosedur cover test"<br>"Kapan deadline video edukasi?"<br>"Tim mana yang pegang alat funduscopy?"`;

function clearChat() {
  if (chatSending) return;
  chatHistory = [];
  const box = document.getElementById('chat-box');
  if (box) box.innerHTML = `<div class="chat-empty">${CHAT_EMPTY_HTML}</div>`;
}

/* ── PROKER SMA ── */
function renderProker() {
  const el = document.getElementById('proker-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';

  const p = KKN.proker;
  const idToIdea = {};
  p.ideas.forEach(i => { idToIdea[i.id] = i; });

  const tierColor = { gold: 'gold', silver: 'violet', situasional: 'rose' };
  const tierLabel = { gold: '⭐⭐ GOLD', silver: '⭐ SILVER', situasional: '🤔 Situasional' };
  const tierBadge = { gold: 'b-gold', silver: 'b-violet', situasional: 'b-rose' };
  const prodiColor = { informatika: 'violet', kedokteran: 'green', manajemen: 'orange', si: 'cyan' };
  const prodiLabel = { informatika: '💻 Informatika', kedokteran: '🩺 Kedokteran', manajemen: '📊 Manajemen', si: '⚡ Sistem Informasi' };

  function ideaCard(idea, compact) {
    const tc = tierColor[idea.tier];
    const sourceBadge = idea.source === 'Claude' ? 'b-indigo' : idea.source === 'ChatGPT' ? 'b-green' : idea.source === 'Gemini' ? 'b-cyan' : 'b-orange';

    const prosHtml = idea.pros.map(p => `<div style="display:flex;gap:8px;margin-bottom:7px;font-size:13px"><span style="color:var(--green);margin-top:1px;flex-shrink:0">✓</span><span style="color:var(--t2);line-height:1.55">${p}</span></div>`).join('');
    const consHtml = idea.cons.map(c => `<div style="display:flex;gap:8px;margin-bottom:7px;font-size:13px"><span style="color:var(--rose);margin-top:1px;flex-shrink:0">✕</span><span style="color:var(--t2);line-height:1.55">${c}</span></div>`).join('');

    const footerParts = [];
    if (idea.dataCollect) footerParts.push(`<div style="flex:1"><div class="sec-label" style="margin-bottom:5px">📊 Data Collection</div><div style="font-size:12px;color:var(--t2);line-height:1.55">${idea.dataCollect}</div></div>`);
    if (idea.setupNotes) footerParts.push(`<div style="flex:1"><div class="sec-label" style="margin-bottom:5px">🔧 Setup Notes</div><div style="font-size:12px;color:var(--t2);line-height:1.55">${idea.setupNotes}</div></div>`);

    return `
      <div class="card card-accent-l" style="border-left-color:var(--${tc});margin-bottom:${compact ? '0' : '20px'}">
        <div class="flex-sb" style="margin-bottom:14px;gap:12px">
          <div style="display:flex;align-items:center;gap:12px;min-width:0">
            <span style="font-size:${compact ? '28' : '32'}px;flex-shrink:0">${idea.emoji}</span>
            <div style="min-width:0">
              <div style="font-size:${compact ? '16' : '19'}px;font-weight:800;letter-spacing:-.3px;line-height:1.2">${idea.name}</div>
              <div style="font-size:12px;color:var(--t2);margin-top:4px;line-height:1.4">${idea.tagline}</div>
            </div>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start">
            <span class="badge ${tierBadge[idea.tier]}" style="font-size:10.5px">${tierLabel[idea.tier]}</span>
            <span class="badge b-gray" style="font-size:10.5px">${idea.source}</span>
          </div>
        </div>

        <div class="${compact ? '' : 'g2'}" style="${compact ? '' : 'gap:16px;'}margin-bottom:18px">
          <div>
            <div class="sec-label">Konsep</div>
            <div style="font-size:13px;color:var(--t2);line-height:1.65">${idea.description}</div>
          </div>
          <div style="${compact ? 'margin-top:14px' : ''}">
            <div class="sec-label">🎭 Twist / Mekanik Utama</div>
            <div style="font-size:13px;color:var(--text);font-weight:500;line-height:1.65;background:var(--surface);padding:12px 14px;border-radius:9px;border-left:3px solid var(--${tc})">${idea.twist}</div>
          </div>
        </div>

        <div style="margin-bottom:18px">
          <div class="sec-label">Pembagian Peran per Prodi</div>
          <div style="border-radius:10px;overflow:hidden;border:1px solid var(--border)">
            ${Object.entries(idea.roles).map(([key, r], idx, arr) => `
              <div style="display:flex;gap:12px;padding:11px 14px;${idx < arr.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}align-items:flex-start">
                <div style="min-width:155px;flex-shrink:0">
                  <span class="badge b-${prodiColor[key]}" style="font-size:10.5px">${prodiLabel[key]}</span>
                  <div style="font-size:11px;color:var(--t2);margin-top:5px;font-weight:500">${r.who}</div>
                </div>
                <div style="font-size:13px;color:var(--t2);line-height:1.6;flex:1">${r.desc}</div>
              </div>`).join('')}
          </div>
        </div>

        <div class="g2" style="gap:14px;margin-bottom:${footerParts.length ? '16px' : '0'}">
          <div>
            <div class="sec-label">✅ Kelebihan</div>
            ${prosHtml}
          </div>
          <div>
            <div class="sec-label">⚠️ Kekurangan</div>
            ${consHtml}
          </div>
        </div>

        ${footerParts.length ? `<div class="g2" style="gap:14px;padding-top:14px;border-top:1px solid var(--border)">${footerParts.join('')}</div>` : ''}
        ${idea.catatan ? `<div class="alert a-warn" style="margin-top:14px;margin-bottom:0"><span class="alert-icon" aria-hidden="true">📌</span><div>${idea.catatan}</div></div>` : ''}
      </div>`;
  }

  let html = '';

  // Open Questions
  html += `
    <div class="alert a-info" style="margin-bottom:20px">
      <span class="alert-icon" aria-hidden="true">🗄️</span>
      <div>
        <strong>Arsip Brainstorm</strong> — Tema final sudah dipilih: <strong>LEAP 2036 (Simulasi Hidup 10 Tahun)</strong>. Ide-ide di bawah adalah riwayat pertimbangan. Pertanyaan awal sudah terjawab:
        <ul style="margin-top:8px;padding-left:18px">
          ${p.openQuestions.map(q => `<li style="margin-bottom:4px">${q}</li>`).join('')}
        </ul>
      </div>
    </div>`;

  // Recommended Combos
  html += `
    <div class="ph2" role="heading" aria-level="2" style="margin-bottom:14px">🎯 Rekomendasi Kombinasi 2 Sesi</div>
    <div class="g2" style="gap:14px;margin-bottom:32px">`;

  p.rekomendasiKombinasi.forEach(combo => {
    const isPreferred = combo.preferred;
    const sesiIdeas = combo.sesiIdList.map(id => idToIdea[id]);
    html += `
      <div class="card" style="border:${isPreferred ? '2px solid var(--gold)' : '1px solid var(--border-h)'};position:relative;padding-top:${isPreferred ? '28px' : '22px'}">
        ${isPreferred ? '<div style="position:absolute;top:-10px;left:14px"><span class="badge b-gold">⭐ Direkomendasikan</span></div>' : ''}
        <div style="font-size:14px;font-weight:700;margin-bottom:6px">${combo.label}</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
          ${sesiIdeas.map((idea, i) => `
            <div style="display:flex;align-items:center;gap:10px;background:var(--surface);padding:10px 13px;border-radius:9px">
              <span style="font-size:18px">${idea.emoji}</span>
              <div>
                <div style="font-size:11px;color:var(--t2);font-weight:600;text-transform:uppercase;letter-spacing:.8px">Sesi ${i + 1}</div>
                <div style="font-size:13px;font-weight:700">${idea.name}</div>
              </div>
            </div>`).join('<div style="font-size:12px;color:var(--t3);text-align:center;padding:2px 0">↓</div>')}
        </div>
        <div style="font-size:12px;color:var(--t2);line-height:1.6">${combo.alasan}</div>
      </div>`;
  });
  html += `</div>`;

  // Gold ideas
  html += `<div class="ph2" role="heading" aria-level="2" style="margin-bottom:16px">⭐⭐ GOLD — Paling Layak Dieksekusi</div>`;
  p.ideas.filter(i => i.tier === 'gold').forEach(idea => {
    html += ideaCard(idea, false);
  });

  // Silver ideas
  html += `<div class="ph2" role="heading" aria-level="2" style="margin-top:32px;margin-bottom:16px">⭐ SILVER — Worth Considering</div>`;
  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">`;
  const silverIdeas = p.ideas.filter(i => i.tier === 'silver');
  if (silverIdeas.length % 2 !== 0) {
    silverIdeas.forEach((idea, idx) => {
      if (idx === silverIdeas.length - 1) {
        html += `</div><div style="margin-top:20px">`;
        html += ideaCard(idea, false);
        html += `</div>`;
      } else {
        html += ideaCard(idea, true);
      }
    });
  } else {
    silverIdeas.forEach(idea => { html += ideaCard(idea, true); });
    html += `</div>`;
  }

  // Situasional ideas
  html += `<div class="ph2" role="heading" aria-level="2" style="margin-top:32px;margin-bottom:16px">🤔 Situasional — Perlu Kondisi Khusus</div>`;
  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">`;
  p.ideas.filter(i => i.tier === 'situasional').forEach(idea => { html += ideaCard(idea, true); });
  html += `</div>`;

  // Skipped ideas note
  html += `
    <div class="card" style="margin-top:32px;border-color:var(--border)">
      <div class="card-title">❌ Tidak Direkomendasikan</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${[
          { name: 'Identity Marketplace', reason: 'Terlalu mirip sesi konseling profesional — butuh skill psikolog' },
          { name: 'Your Body is a Startup', reason: 'Konten sudah terlalu umum di LinkedIn/self-help' },
          { name: 'Dex 2.0 Lab', reason: 'Terlalu personal — awkward untuk siswa yang tidak kenal Dex' },
          { name: 'Escape Room Krisis Umur 25', reason: 'Setup props terlalu kompleks untuk kelas biasa' },
          { name: 'Kasino Biologis', reason: 'Mirip "Your Body is a Startup" tapi lebih rumit' },
          { name: 'Autopsi Masa Depan', reason: 'Versi lebih lemah dari "Simulasi Hidup 10 Tahun"' },
        ].map(s => `
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:10px 14px;max-width:280px">
            <div style="font-size:12px;font-weight:700;margin-bottom:3px">${s.name}</div>
            <div style="font-size:11px;color:var(--t2)">${s.reason}</div>
          </div>`).join('')}
      </div>
    </div>`;

  el.innerHTML = html;
}

/* ── TOAST ── */
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 18px;border-radius:8px;font-size:13px;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.5)`;
  t.textContent = msg;
  if (type === 'warn') t.style.borderColor = 'var(--orange)';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

/* ── PROKER FINAL (LOCKED) ── */
function renderProkerFinal() {
  const el = document.getElementById('proker-final-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  const p = KKN.prokerFinal;
  if (!p || !p.locked) { el.innerHTML = ''; return; }

  el.innerHTML = `
    <div class="proker-final card">
      <div class="pf-header">
        <div class="pf-badge">🔒 TEMA FINAL</div>
        <div class="pf-brand">${p.brand} <span class="pf-brand-expand">— ${p.brandExpand}</span></div>
      </div>
      <div class="pf-judul">${p.judul}</div>
      <div class="pf-tagline">"${p.tagline}"</div>

      <div class="pf-grid">
        <div class="pf-info-card"><div class="pf-info-label">Target</div><div>${p.targetSiswa}</div></div>
        <div class="pf-info-card"><div class="pf-info-label">Durasi</div><div>${p.durasi}</div></div>
        <div class="pf-info-card"><div class="pf-info-label">Metode</div><div>${p.metode}</div></div>
      </div>

      <div class="pf-section">
        <div class="pf-section-title">🎯 Visi</div>
        <div class="pf-section-body">${p.visi}</div>
      </div>

      <div class="pf-section">
        <div class="pf-section-title">✅ Tujuan</div>
        <ol class="pf-list">${p.tujuan.map(t => `<li>${t}</li>`).join('')}</ol>
      </div>

      <div class="pf-section">
        <div class="pf-section-title">⚙️ Mekanisme — "The Decision Engine"</div>
        <div class="pf-mek-resources">
          <div class="pf-info-label">Sumber Daya Awal Peserta:</div>
          <div class="pf-mek-tags">${p.mekanisme.sumberDaya.map(s => `<span class="pf-tag">${s}</span>`).join('')}</div>
        </div>
        <div class="pf-fase-list">
          ${p.mekanisme.fase.map((f, i) => `
            <div class="pf-fase">
              <div class="pf-fase-num">${i + 1}</div>
              <div>
                <div class="pf-fase-name">${f.name} <span class="pf-fase-years">${f.years}</span></div>
                <div class="pf-fase-focus">${f.focus}</div>
              </div>
            </div>`).join('')}
        </div>
        <div class="pf-twist">✨ <strong>Twist:</strong> ${p.mekanisme.twist}</div>
      </div>

      <div class="pf-section">
        <div class="pf-section-title">📅 Rundown 5 Hari (Skema LPPM-1)</div>
        <table class="pf-table">
          <thead><tr><th>Waktu</th><th>Durasi</th><th>Segmen</th><th>Lead</th></tr></thead>
          <tbody>
            ${p.rundown5h.map(r => `<tr><td>${r.time}</td><td>${r.duration}</td><td>${r.segmen}</td><td>${r.lead}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="pf-note">📝 Skema LPPM-1 = 5 hari × 1 SMA. Skema LPPM-2 = split 2 hari (Sekolah A) + 3 hari (Sekolah B). Durasi 4–6 jam/hari sesuai kesediaan SMA.</div>
      </div>

      <div class="pf-cta">
        <span>📄 Draft Proposal:</span>
        <code>${p.proposalPath}</code>
      </div>
    </div>`;
}

/* ── DECISION LOG ── */
function renderDecisionLog() {
  const el = document.getElementById('decision-log-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  const decisions = KKN.decisions || [];
  if (!decisions.length) { el.innerHTML = ''; return; }

  el.innerHTML = `
    <div class="dlog-section">
      <div class="ph2" role="heading" aria-level="2" style="margin-top:32px">📚 Decision Log — Keputusan yang Sudah Fix</div>
      <div class="dlog-list">
        ${decisions.map(d => `
          <div class="dlog-item">
            <div class="dlog-meta">
              <span class="dlog-date">${fmtDate(parseDate(d.date))}</span>
              <span class="dlog-status dlog-st-${d.status.toLowerCase().includes('done') || d.status.toLowerCase().includes('fixed') ? 'done' : 'pending'}">${d.status}</span>
            </div>
            <div class="dlog-topic">${d.topic}</div>
            <div class="dlog-decision">${d.decision}</div>
            ${d.brand ? `<div class="dlog-brand">Brand: ${d.brand}</div>` : ''}
            <div class="dlog-reason"><strong>Why:</strong> ${d.reason}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="ph2" role="heading" aria-level="2" style="margin-top:32px">💡 Riwayat Brainstorm Ide (Arsip)</div>
    <div class="psub">Ide-ide dari brainstorm 4 AI yang sudah dipertimbangkan sebelum keputusan final.</div>`;
}

/* ── TUGAS TIM ── */
function renderTugas() {
  const el = document.getElementById('tugas-body');
  if (!el) return;
  const tasks = KKN.taskAssignments || [];
  if (!tasks.length) { el.innerHTML = '<div class="alert a-info">Belum ada tugas yang dibagikan.</div>'; return; }

  const me = getUser();
  const colorCls = { cyan:'av-cyan', purple:'av-violet', orange:'av-gold', green:'av-green' };

  el.innerHTML = `
    <div class="alert a-info" style="margin-bottom:20px">
      <span class="alert-icon" aria-hidden="true">👋</span>
      <div><strong>Pembagian tugas (usulan) per anggota.</strong> Tiap orang punya bagian masing-masing untuk Workshop SMA. Status "usulan" = tinggal di-iya-kan atau diadjust. Kalau ada yang kurang cocok atau mau ditukar, konfirmasi/diskusi di grup WA ya. 🙌</div>
    </div>
    <div class="tugas-grid">
      ${tasks.map(t => {
        const isMe = t.anggota === me;
        return `
        <div class="tugas-card${isMe ? ' me' : ''}">
          <div class="tugas-head">
            <div class="tugas-avatar ${colorCls[t.color] || 'av-indigo'}" aria-hidden="true">${t.emoji}</div>
            <div>
              <div class="tugas-nama">${t.anggota}${isMe ? '<span class="tugas-me">KAMU</span>' : ''}</div>
              <div class="tugas-prodi">${t.prodi}</div>
            </div>
            <span class="tugas-status tugas-st-${t.status.toLowerCase().includes('active') ? 'active' : 'pending'}">${t.status}</span>
          </div>
          <div class="tugas-section">
            <div class="tugas-sec-title">📅 Saat Workshop</div>
            <ul class="tugas-list">${t.perWorkshop.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>
          ${t.preWorkshop && t.preWorkshop.length ? `
          <div class="tugas-section">
            <div class="tugas-sec-title">🔧 Pre-Workshop</div>
            <ul class="tugas-list">${t.preWorkshop.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>` : ''}
        </div>`;
      }).join('')}
    </div>
    <div class="alert a-warn" style="margin-top:20px">
      <span class="alert-icon" aria-hidden="true">📝</span>
      <div><strong>Status PENDING</strong> berarti tugas masih draft Dex — perlu konfirmasi langsung dari yang bersangkutan. Tugas bisa di-shuffle sesuai preferensi.</div>
    </div>`;
}

function showAllUpdates() {
  const updates = KKN.latestUpdates || [];
  const body = updates.map(u => `
    <div class="modal-update">
      <div class="mu-date">${u.tag} · ${fmtDate(parseDate(u.date))}</div>
      <div class="mu-title">${u.title}</div>
      <div class="mu-desc">${u.desc}</div>
    </div>`).join('');
  openModal('Semua Update', body);
}

/* ── DOKUMEN DRIVE ── */
function renderDokumen() {
  const el = document.getElementById('dokumen-body');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  const cats = KKN.dokumenKelompok || [];
  if (!cats.length) { el.innerHTML = '<div class="alert a-info">Belum ada dokumen.</div>'; return; }

  const priorityBadge = {
    high: '<span class="dok-prio dok-prio-high">PRIORITAS</span>',
    medium: '<span class="dok-prio dok-prio-med">PENTING</span>',
    low: '<span class="dok-prio dok-prio-low">REFERENSI</span>',
  };

  let html = `
    <div class="alert a-info" style="margin-bottom:20px">
      <span class="alert-icon" aria-hidden="true">💾</span>
      <div>
        <strong>Semua file ini ada di Google Drive kelompok.</strong> Download yang sesuai tugasmu.
        File <code>.md</code> bisa di-convert ke Word/Docs dengan AI — copy paste isi-nya ke ChatGPT/Claude/Gemini dan minta convert.
      </div>
    </div>
    <div class="alert a-warn" style="margin-bottom:24px">
      <span class="alert-icon" aria-hidden="true">🔗</span>
      <div><strong>Link Drive:</strong> <code>(Dex isi link Drive setelah upload)</code> — sementara, file ada di folder lokal Dex.</div>
    </div>`;

  cats.forEach(cat => {
    html += `
      <div class="dok-cat">
        <div class="dok-cat-title">${cat.kategori}</div>
        <div class="dok-list">
          ${cat.files.map(f => `
            <div class="dok-item">
              <div class="dok-icon">${f.file.endsWith('.md') ? '📄' : f.file.endsWith('.txt') ? '📝' : f.file.endsWith('.docx') ? '📘' : '📋'}</div>
              <div class="dok-info">
                <div class="dok-name">${f.name}${f.forPerson ? ` <span class="dok-for">untuk ${f.forPerson}</span>` : ''}</div>
                <div class="dok-desc">${f.desc}</div>
                <div class="dok-file"><code>${f.file}</code></div>
              </div>
              ${priorityBadge[f.priority] || ''}
            </div>`).join('')}
        </div>
      </div>`;
  });

  el.innerHTML = html;
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInp = document.getElementById('api-key-input');
  if (apiKeyInp) { let k = ''; try { k = localStorage.getItem('kkn-gemini-key') || ''; } catch {} if (k) { apiKeyInp.value = k; apiKeyInp.type = 'password'; } }

  const chatInp = document.getElementById('chat-input');
  if (chatInp) chatInp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); } });

  const noteInp = document.getElementById('note-input');
  if (noteInp) noteInp.addEventListener('keydown', e => { if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); addNote(); } });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('app-modal')) { closeModal(); return; }
      closeSidebar();
    }
  });

  updateTopbarUser();
  syncSidebarInert();
  window.addEventListener('resize', syncSidebarInert);

  let saved = 'dashboard';
  try { saved = localStorage.getItem('kkn-page') || 'dashboard'; } catch {}
  showPage(saved);
});
