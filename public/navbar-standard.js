document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Check if we are on the landing page (index.html or /)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isHomePage = currentPage === 'index.html' || currentPage === '';

    // 1. Inject / Normalize the Navbar HTML
    // This ensures every page has the EXACT SAME structure and links
    navbar.innerHTML = `
        <div class="navbar__container">
            <a href="/" class="navbar__logo">
                <span class="navbar__logo-empower">Empower</span><span class="navbar__logo-able">Able</span>
            </a>
            <ul class="navbar__links">
                <li><a href="/" class="navbar__link" data-path="index.html">Home</a></li>
                <li><a href="/map.html" class="navbar__link" data-path="map.html">Explore Map</a></li>
                <li><a href="/community.html" class="navbar__link" data-path="community.html">Community</a></li>
                <li><a href="/ai-support.html" class="navbar__link" data-path="ai-support.html">AI Support</a></li>
                <li><a href="/profile.html" class="navbar__link" data-path="profile.html">Profile</a></li>
                <li><a href="/pricing.html" class="navbar__link" data-path="pricing.html">Pricing</a></li>
            </ul>
            <div class="navbar__actions">
                <div class="navbar__notifications" id="notifications-wrapper">
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
                        <div class="notifications-content" id="notifications-content"></div>
                    </div>
                </div>
                <div class="navbar__profile" id="profile-wrapper">
                    <button class="navbar__profile-trigger" id="profile-trigger">
                        <div class="navbar__profile-icon">
                            <span class="material-symbols-outlined">account_circle</span>
                        </div>
                    </button>
                    <div class="navbar__profile-dropdown" id="profile-dropdown" style="display: none;">
                        <div class="navbar__profile-content" id="profile-content"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 2. Handle Active State
    const links = navbar.querySelectorAll('.navbar__link');
    links.forEach(link => {
        const path = link.getAttribute('data-path');
        if (currentPage === path || (isHomePage && path === 'index.html')) {
            link.classList.add('navbar__link--active');
        }
    });

    // 3. Scroll Logic (Transparent for homepage)
    function handleScroll() {
        if (isHomePage) {
            if (window.scrollY > 50) {
                navbar.classList.remove('navbar--transparent');
            } else {
                navbar.classList.add('navbar--transparent');
            }
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 4. Notifications & Profile Logic
    const notifTrigger = document.getElementById('notifications-trigger');
    const notifPopup = document.getElementById('notifications-popup');
    const notifClose = document.getElementById('notifications-close');
    const notifContent = document.getElementById('notifications-content');

    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileContent = document.getElementById('profile-content');

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
                <div class="notification-avatar" style="background-color: ${n.type === 'community' ? '#dbeafe' : n.type === 'safety' ? '#fee2e2' : '#f3e8ff'}; color: ${n.type === 'community' ? '#2563eb' : n.type === 'safety' ? '#dc2626' : '#9333ea'};">
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

    // Mock User State
    let user = null; 

    function renderProfile() {
        if (user) {
            profileContent.innerHTML = `
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
                renderProfile();
            };
        } else {
            profileContent.innerHTML = `
                <p class="navbar__profile-title">Connect Account</p>
                <p class="navbar__profile-desc">Sign in to sync your accessibility preferences across all tools.</p>
                <button class="navbar__profile-auth-btn" id="login-btn">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google">
                    Continue with Google
                </button>
            `;
            document.getElementById('login-btn').onclick = () => {
                user = { name: 'User Name', email: 'user@example.com' };
                renderProfile();
            };
        }
    }

    renderNotifications();
    renderProfile();

    notifTrigger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = notifPopup.style.display !== 'none';
        notifPopup.style.display = isOpen ? 'none' : 'flex';
        profileDropdown.style.display = 'none';
    };

    notifClose.onclick = () => {
        notifPopup.style.display = 'none';
    };

    profileTrigger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = profileDropdown.style.display !== 'none';
        profileDropdown.style.display = isOpen ? 'none' : 'block';
        notifPopup.style.display = 'none';
    };

    document.onclick = (e) => {
        if (!navbar.contains(e.target)) {
            notifPopup.style.display = 'none';
            profileDropdown.style.display = 'none';
        }
    };
});
