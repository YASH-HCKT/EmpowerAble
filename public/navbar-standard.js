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

    // 2. Setup Profile Popup Logic
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
    container.appendChild(profileContainer);

    const trigger = document.getElementById('profile-trigger');
    const dropdown = document.getElementById('profile-dropdown');
    const content = document.getElementById('profile-content');

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
        if (!profileContainer.contains(e.target)) {
            dropdown.style.display = 'none';
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
