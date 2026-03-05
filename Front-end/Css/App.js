/* ============================================
   SMART SURF - Shared JavaScript
   ============================================ */

/* ── Mock Data Store ── */
const DB = {
    users: [
        { id: 1, name: 'Admin User',   email: 'admin@smartsurf.lk',   role: 'ADMIN',   status: 'active',   phone: '+94 77 100 0001', created: '2024-01-10' },
        { id: 2, name: 'Kasun Perera', email: 'kasun@smartsurf.lk',   role: 'TRAINER', status: 'active',   phone: '+94 77 200 0002', created: '2024-02-05' },
        { id: 3, name: 'Nimal Silva',  email: 'nimal@smartsurf.lk',   role: 'TRAINER', status: 'active',   phone: '+94 77 200 0003', created: '2024-02-10' },
        { id: 4, name: 'Amara Wijes.', email: 'amara@gmail.com',       role: 'PLAYER',  status: 'active',   phone: '+94 71 300 0004', created: '2024-03-01' },
        { id: 5, name: 'Dilshan Raj',  email: 'dilshan@gmail.com',     role: 'PLAYER',  status: 'inactive', phone: '+94 71 300 0005', created: '2024-03-15' },
        { id: 6, name: 'Priya Fern.',  email: 'priya@gmail.com',       role: 'PLAYER',  status: 'active',   phone: '+94 76 300 0006', created: '2024-04-01' },
    ],

    trainers: [
        { id: 1, userId: 2, name: 'Kasun Perera',   specialty: 'Beginner Surfing', experience: 5,  status: 'available', sessions: 24, rating: 4.8 },
        { id: 2, userId: 3, name: 'Nimal Silva',    specialty: 'Advanced Tricks',  experience: 8,  status: 'available', sessions: 38, rating: 4.9 },
        { id: 3, userId: 0, name: 'Ruwan Mendis',   specialty: 'Kids Training',    experience: 3,  status: 'busy',      sessions: 15, rating: 4.6 },
        { id: 4, userId: 0, name: 'Tharushi Dias',  specialty: 'Competitive Surf', experience: 6,  status: 'available', sessions: 20, rating: 4.7 },
    ],

    surfboards: [
        { id: 1, name: 'Wave Rider Pro',   type: 'Shortboard', length: "6'2\"", condition: 'excellent', status: 'available', price: 1500, brand: 'Channel Islands' },
        { id: 2, name: 'Ocean Glide',      type: 'Longboard',  length: "9'0\"", condition: 'good',      status: 'rented',    price: 1200, brand: 'Firewire' },
        { id: 3, name: 'Surf Shark',       type: 'Fish',       length: "5'8\"", condition: 'excellent', status: 'available', price: 1300, brand: 'Lost Surfboards' },
        { id: 4, name: 'Barrel Beast',     type: 'Gun',        length: "7'6\"", condition: 'fair',      status: 'maintenance',price: 1800, brand: 'JS Industries' },
        { id: 5, name: 'Foam Rider',       type: 'Foamboard',  length: "8'0\"", condition: 'good',      status: 'available', price: 800,  brand: 'Softech' },
        { id: 6, name: 'Mini Malibu',      type: 'Funboard',   length: "7'2\"", condition: 'excellent', status: 'available', price: 1100, brand: 'NSP' },
    ],

    bookings: [
        { id: 'BK-001', playerId: 4, playerName: 'Amara Wijes.', trainerId: 1, trainerName: 'Kasun Perera', surfboardId: 1, players: 2, date: '2025-07-10', time: '08:00', beach: 'Hikkaduwa Beach', status: 'approved',  amount: 4500, paymentId: 'PAY-001' },
        { id: 'BK-002', playerId: 6, playerName: 'Priya Fern.',  trainerId: 2, trainerName: 'Nimal Silva',  surfboardId: 3, players: 1, date: '2025-07-12', time: '10:00', beach: 'Arugam Bay',     status: 'pending',   amount: 3500, paymentId: 'PAY-002' },
        { id: 'BK-003', playerId: 5, playerName: 'Dilshan Raj',  trainerId: 3, trainerName: 'Ruwan Mendis', surfboardId: 5, players: 3, date: '2025-07-08', time: '07:00', beach: 'Weligama Beach', status: 'completed', amount: 7500, paymentId: 'PAY-003' },
        { id: 'BK-004', playerId: 4, playerName: 'Amara Wijes.', trainerId: 4, trainerName: 'Tharushi Dias',surfboardId: 6, players: 1, date: '2025-07-15', time: '09:00', beach: 'Hikkaduwa Beach', status: 'rejected',  amount: 2500, paymentId: 'PAY-004' },
    ],

    rentals: [
        { id: 'RNT-001', playerId: 4, playerName: 'Amara Wijes.', surfboardId: 2, surfboardName: 'Ocean Glide', startDate: '2025-07-10', endDate: '2025-07-11', days: 1, amount: 1200, status: 'approved',  paymentId: 'PAY-005' },
        { id: 'RNT-002', playerId: 6, playerName: 'Priya Fern.',  surfboardId: 5, surfboardName: 'Foam Rider',  startDate: '2025-07-13', endDate: '2025-07-15', days: 2, amount: 1600, status: 'pending',   paymentId: 'PAY-006' },
        { id: 'RNT-003', playerId: 5, playerName: 'Dilshan Raj',  surfboardId: 1, surfboardName: 'Wave Rider Pro',startDate:'2025-07-05',endDate: '2025-07-07', days: 2, amount: 3000, status: 'completed', paymentId: 'PAY-007' },
    ],

    payments: [
        { id: 'PAY-001', relatedId: 'BK-001', type: 'booking', amount: 4500, method: 'Bank Transfer', slip: 'slip_001.jpg', status: 'verified',  date: '2025-07-09' },
        { id: 'PAY-002', relatedId: 'BK-002', type: 'booking', amount: 3500, method: 'Cash Deposit',  slip: 'slip_002.jpg', status: 'pending',   date: '2025-07-11' },
        { id: 'PAY-003', relatedId: 'BK-003', type: 'booking', amount: 7500, method: 'Bank Transfer', slip: 'slip_003.jpg', status: 'verified',  date: '2025-07-07' },
        { id: 'PAY-004', relatedId: 'BK-004', type: 'booking', amount: 2500, method: 'Cash Deposit',  slip: 'slip_004.jpg', status: 'rejected',  date: '2025-07-14' },
        { id: 'PAY-005', relatedId: 'RNT-001',type: 'rental',  amount: 1200, method: 'Bank Transfer', slip: 'slip_005.jpg', status: 'verified',  date: '2025-07-09' },
        { id: 'PAY-006', relatedId: 'RNT-002',type: 'rental',  amount: 1600, method: 'Cash Deposit',  slip: 'slip_006.jpg', status: 'pending',   date: '2025-07-12' },
        { id: 'PAY-007', relatedId: 'RNT-003',type: 'rental',  amount: 3000, method: 'Bank Transfer', slip: 'slip_007.jpg', status: 'verified',  date: '2025-07-04' },
    ],

    contracts: [
        { id: 'CON-001', bookingId: 'BK-001', playerId: 4, playerName: 'Amara Wijes.', trainerName: 'Kasun Perera', beach: 'Hikkaduwa Beach', date: '2025-07-10', generated: '2025-07-09', status: 'active' },
        { id: 'CON-002', bookingId: 'BK-003', playerId: 5, playerName: 'Dilshan Raj',  trainerName: 'Ruwan Mendis', beach: 'Weligama Beach',   date: '2025-07-08', generated: '2025-07-07', status: 'completed' },
    ],

    beaches: [
        { id: 1, name: 'Hikkaduwa Beach', lat: 6.1394,  lng: 80.1042, province: 'Southern', difficulty: 'Beginner', waves: '2-4ft', status: 'active',   description: 'Popular reef break, ideal for learners.' },
        { id: 2, name: 'Arugam Bay',      lat: 6.8399,  lng: 81.8387, province: 'Eastern',  difficulty: 'Advanced', waves: '4-8ft', status: 'active',   description: 'World-class right-hand point break.' },
        { id: 3, name: 'Weligama Beach',  lat: 5.9750,  lng: 80.4288, province: 'Southern', difficulty: 'Beginner', waves: '1-3ft', status: 'active',   description: 'Gentle beach break, perfect for beginners.' },
        { id: 4, name: 'Midigama',        lat: 5.9669,  lng: 80.3896, province: 'Southern', difficulty: 'Intermediate', waves: '3-6ft', status: 'active', description: 'Left-hand reef break, consistent surf.' },
        { id: 5, name: 'Mirissa Beach',   lat: 5.9451,  lng: 80.4543, province: 'Southern', difficulty: 'Beginner', waves: '2-4ft', status: 'inactive', description: 'Sandy beach break, seasonal swells.' },
    ]
};

/* ── Auth State ── */
const AuthState = {
    currentUser: { id: 1, name: 'Admin User', role: 'ADMIN', avatar: 'AU' },
    token: 'mock-jwt-token-xyz',
    isLoggedIn: true,
};

/* ── Navigation Helper ── */
function getNavItems() {
    return [
        { icon: '🏄', label: 'Dashboard',    href: 'dashboard.html',      section: 'OVERVIEW' },
        { icon: '👤', label: 'Users',        href: 'users.html',          section: 'MANAGEMENT' },
        { icon: '🏋️', label: 'Trainers',     href: 'trainers.html',       section: 'MANAGEMENT' },
        { icon: '🏊', label: 'Surfboards',   href: 'surfboards.html',     section: 'MANAGEMENT' },
        { icon: '📅', label: 'Bookings',     href: 'bookings.html',       section: 'OPERATIONS', badge: 2 },
        { icon: '🚣', label: 'Rentals',      href: 'rentals.html',        section: 'OPERATIONS' },
        { icon: '💳', label: 'Payments',     href: 'payments.html',       section: 'OPERATIONS', badge: 1 },
        { icon: '📄', label: 'Contracts',    href: 'contracts.html',      section: 'RECORDS' },
        { icon: '🗺️', label: 'Beach Locations', href: 'beaches.html',    section: 'RECORDS' },
    ];
}

function buildSidebar(activePage) {
    const navItems = getNavItems();
    const user = AuthState.currentUser;

    let sections = {};
    navItems.forEach(item => {
        if (!sections[item.section]) sections[item.section] = [];
        sections[item.section].push(item);
    });

    let sidebarHTML = `
    <div class="sidebar-logo">
      <div class="logo-mark">SMART SURF</div>
      <div class="logo-sub">Management System</div>
    </div>
    <nav class="sidebar-nav">`;

    Object.entries(sections).forEach(([section, items]) => {
        sidebarHTML += `<div class="nav-section-label">${section}</div>`;
        items.forEach(item => {
            const isActive = window.location.pathname.includes(item.href) || activePage === item.href;
            const badgeHTML = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
            sidebarHTML += `
        <a class="nav-item ${isActive ? 'active' : ''}" href="${item.href}">
          <span class="nav-icon">${item.icon}</span>
          <span>${item.label}</span>
          ${badgeHTML}
        </a>`;
        });
    });

    sidebarHTML += `</nav>
    <div class="sidebar-footer">
      <div class="user-chip">
        <div class="user-avatar">${user.avatar || user.name.substring(0,2).toUpperCase()}</div>
        <div class="user-info">
          <div class="user-name">${user.name}</div>
          <div class="user-role">${user.role}</div>
        </div>
      </div>
    </div>`;

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.innerHTML = sidebarHTML;
}

/* ── Toast ── */
function showToast(message, type = 'info') {
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

/* ── Modal Helpers ── */
function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
}

document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) closeAllModals();
    if (e.target.closest('.modal-close')) {
        const overlay = e.target.closest('.modal-overlay');
        if (overlay) overlay.classList.remove('open');
    }
});

/* ── Tab Switching ── */
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.closest('[data-tabs]') || document.querySelector('.tabs-wrapper') || btn.parentElement.parentElement;
            const target = btn.dataset.tab;
            btn.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const panel = document.getElementById(target);
            if (panel) panel.classList.add('active');
        });
    });
}

/* ── Badge Helper ── */
function statusBadge(status) {
    const map = {
        pending:     'badge-pending',
        approved:    'badge-approved',
        rejected:    'badge-rejected',
        completed:   'badge-completed',
        active:      'badge-active',
        inactive:    'badge-inactive',
        available:   'badge-approved',
        rented:      'badge-cyan',
        maintenance: 'badge-pending',
        verified:    'badge-approved',
        'in-progress':'badge-active',
        busy:        'badge-amber',
        excellent:   'badge-approved',
        good:        'badge-active',
        fair:        'badge-pending',
    };
    return `<span class="badge ${map[status] || 'badge-inactive'}">${status}</span>`;
}

/* ── Format Helpers ── */
function fmtCurrency(n) { return 'LKR ' + Number(n).toLocaleString(); }
function fmtDate(s) { return new Date(s).toLocaleDateString('en-LK', { day:'2-digit', month:'short', year:'numeric' }); }
function initials(name) { return name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase(); }
function avatarColor(i) { const c = ['avatar-teal','avatar-coral','avatar-amber','avatar-emerald','avatar-purple']; return c[i % c.length]; }

/* ── Search / Filter ── */
function filterTable(tableId, query) {
    const rows = document.querySelectorAll(`#${tableId} tbody tr`);
    const q = query.toLowerCase();
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

/* ── File Upload UX ── */
function initUploadZones() {
    document.querySelectorAll('.upload-zone').forEach(zone => {
        zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file) updateUploadLabel(zone, file.name);
        });
        const inp = zone.querySelector('input[type="file"]');
        if (inp) {
            inp.addEventListener('change', () => {
                if (inp.files[0]) updateUploadLabel(zone, inp.files[0].name);
            });
        }
    });
}

function updateUploadLabel(zone, filename) {
    const text = zone.querySelector('.upload-text');
    if (text) text.innerHTML = `✅ <strong>${filename}</strong> selected`;
}

/* ── Delete Confirmation ── */
function confirmDelete(msg, callback) {
    if (confirm(msg || 'Are you sure you want to delete this?')) callback();
}

/* ── Status cycle (for demo) ── */
function cycleStatus(current) {
    const cycle = { pending: 'approved', approved: 'completed', completed: 'pending', rejected: 'pending' };
    return cycle[current] || 'pending';
}

/* ── Contract Template ── */
function generateContractHTML(data) {
    return `
    <div class="contract-preview">
      <h2>SMART SURF TRAINING CONTRACT</h2>
      <p><strong>Contract ID:</strong> ${data.contractId || 'CON-XXX'}</p>
      <p><strong>Date Issued:</strong> ${fmtDate(data.date || new Date())}</p>
      <hr style="margin:16px 0; border-color:#ddd"/>
      <p><strong>PLAYER DETAILS</strong></p>
      <p>Name: ${data.playerName || '—'}</p>
      <p>Contact: ${data.phone || '—'}</p>
      <hr style="margin:16px 0; border-color:#ddd"/>
      <p><strong>SESSION DETAILS</strong></p>
      <p>Beach Location: ${data.beach || '—'}</p>
      <p>Training Date: ${fmtDate(data.sessionDate || new Date())}</p>
      <p>Trainer Assigned: ${data.trainerName || '—'}</p>
      <p>Surfboard: ${data.surfboard || '—'}</p>
      <p>Number of Players: ${data.players || 1}</p>
      <hr style="margin:16px 0; border-color:#ddd"/>
      <p><strong>LIABILITY AGREEMENT</strong></p>
      <p>The player acknowledges that surfing is a physical activity that carries inherent risks. Smart Surf and its trainers shall not be held liable for any injuries, damages, or losses arising from participation in training sessions. The player confirms they are in good physical health and capable of participating.</p>
      <p>The player agrees to follow all safety instructions provided by assigned trainers and to handle surfboards with due care. Any damage to equipment caused by negligence will be the player's responsibility.</p>
      <hr style="margin:16px 0; border-color:#ddd"/>
      <p>By participating in this session, the player digitally acknowledges acceptance of these terms.</p>
      <div class="contract-sig">
        <div class="sig-line">Player Signature / Date</div>
        <div class="sig-line">Smart Surf Admin / Date</div>
      </div>
    </div>`;
}

/* ── Mobile Sidebar Toggle ── */
function initMobileSidebar() {
    const toggle = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    initTabs();
    initUploadZones();
    initMobileSidebar();
});