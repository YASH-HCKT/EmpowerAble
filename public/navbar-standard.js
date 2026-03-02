document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // 1. Inject the standardized Navbar HTML (except the logo/links which might vary slightly)
    // Actually, we'll replace the entire innerHTML of the existing <nav> to be safe,
    // but the user wants "same navbar for every pages", so we'll enforce the structure.

    const container = navbar.querySelector('.navbar__container');
    if (!container) return;

    // Check current page for active class
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 2. Setup Notification & Profile Logic
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'navbar__actions';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.alignItems = 'center';

    const notificationsContainer = document.createElement('div');
    notificationsContainer.className = 'navbar__notifications';
    notificationsContainer.innerHTML = `
        <button class="navbar__notifications-trigger" id="notifications-trigger">
            <span class="material-symbols-outlined navbar__notifications-icon">notifications</span>
            <span class="navbar__notifications-badge"></span>
        </button>
        <div class="notifications-popup" id="notifications-popup" style="display: none;">
            <div class="notifications-header">
                <h3>Notifications</h3>
                <button class="notifications-close" id="notifications-close">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <div class="notifications-content" id="notifications-content">
                <!-- Notifications will be injected here -->
            </div>
        </div>
    `;

    const profileContainer = document.createElement('div');
    profileContainer.className = 'navbar__profile';
    profileContainer.innerHTML = `
        <button class="navbar__profile-trigger" id="profile-trigger">
            <div class="navbar__profile-icon">
                <span class="material-symbols-outlined">account_circle</span>
            </div>
        </button>
        <div class="navbar__profile-dropdown" id="profile-dropdown" style="display: none;">
            <div class="navbar__profile-content" id="profile-content">
                <!-- Content will be injected by JS -->
            </div>
        </div>
    `;

    actionsContainer.appendChild(notificationsContainer);
    actionsContainer.appendChild(profileContainer);
    container.appendChild(actionsContainer);

    const notifTrigger = document.getElementById('notifications-trigger');
    const notifPopup = document.getElementById('notifications-popup');
    const notifClose = document.getElementById('notifications-close');
    const notifContent = document.getElementById('notifications-content');

    const trigger = document.getElementById('profile-trigger');
    const dropdown = document.getElementById('profile-dropdown');
    const content = document.getElementById('profile-content');

    const notificationsData = [
        {
            id: 1,
            title: "Fitness Motivation Group",
            desc: "Sarah shared a new home workout: 'Low Impact Chair Yoga'.",
            time: "10:45 AM",
            type: "community",
            unread: true,
            icon: "groups"
        },
        {
            id: 2,
            title: "Weather Accessibility Alert",
            desc: "Heavy rainfall expected in your area. Potential flooding on street-level access routes.",
            time: "9:20 AM",
            type: "safety",
            unread: false,
            icon: "warning"
        },
        {
            id: 3,
            title: "AI Support Upgrade",
            desc: "We've enhanced our AI assistant to better understand accessibility-specific inquiries.",
            time: "Yesterday, 4:00 PM",
            type: "system",
            unread: false,
            icon: "bolt"
        }
    ];

    function renderNotifications() {
        notifContent.innerHTML = notificationsData.map(n => `
            <div class="notification-item ${n.unread ? 'notification-item--unread' : ''}">
                <div class="notification-avatar ${n.type === 'community' ? 'bg-blue-100' : n.type === 'safety' ? 'bg-red-100' : 'bg-purple-100'}">
                    <span class="material-symbols-outlined">${n.icon}</span>
                </div>
                <div class="notification-info">
                    <h4>${n.title}</h4>
                    <p>${n.desc}</p>
                    <span class="notification-time">${n.time}</span>
                </div>
            </div>
        `).join('');
    }

    renderNotifications();

    notifTrigger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = notifPopup.style.display === 'flex';
        notifPopup.style.display = isOpen ? 'none' : 'flex';
        dropdown.style.display = 'none';
    };

    notifClose.onclick = () => {
        notifPopup.style.display = 'none';
    };

    // Mock User State
    let user = null; // Set to { name: 'User Name', email: 'user@example.com' } for testing

    function renderDropdown() {
        if (user) {
            content.innerHTML = `
                <div class="navbar__profile-info">
                    <p class="navbar__profile-name">${user.name}</p>
                    <p class="navbar__profile-email">${user.email}</p>
                </div>
                <div class="navbar__profile-divider"></div>
                <a href="/profile.html" class="navbar__profile-item">Go to Profile</a>
                <button class="navbar__profile-item navbar__profile-logout" id="logout-btn">Sign Out</button>
            `;
            document.getElementById('logout-btn').onclick = () => {
                user = null;
                renderDropdown();
            };
        } else {
            content.innerHTML = `
                <p class="navbar__profile-title">Connect Account</p>
                <p class="navbar__profile-desc">Sign in to sync your accessibility preferences.</p>
                <button class="navbar__profile-auth-btn" id="login-btn">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google">
                    Continue with Google
                </button>
            `;
            document.getElementById('login-btn').onclick = () => {
                user = { name: 'User Name', email: 'user@example.com' };
                renderDropdown();
            };
        }
    }

    renderDropdown();

    trigger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';
    };

    document.onclick = (e) => {
        if (!profileContainer.contains(e.target) && !notificationsContainer.contains(e.target)) {
            dropdown.style.display = 'none';
            notifPopup.style.display = 'none';
        }
    };

    // 3. Ensure links are correct and active state is applied
    const links = navbar.querySelectorAll('.navbar__link');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '/' + currentPage || (currentPage === 'index.html' && href === '/')) {
            link.classList.add('navbar__link--active');
        } else {
            link.classList.remove('navbar__link--active');
        }
    });
});
