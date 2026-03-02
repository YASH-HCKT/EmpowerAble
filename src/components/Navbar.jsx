import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const location = useLocation();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notificationRef = useRef(null);

    // Mock user state (normally would come from Auth context)
    const [user, setUser] = useState(null); // Set to { name: 'Gaurav', email: 'gaurav@example.com' } to test logged in state

    const getActiveClass = (path) => {
        return location.pathname === path ? 'navbar__link--active' : '';
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsNotificationOpen(false);
    };

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsProfileOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const notifications = [
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

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-empower">Empower</span><span className="navbar__logo-able">Able</span>
                </Link>
                <ul className="navbar__links">
                    <li><Link to="/" className={`navbar__link ${getActiveClass('/')}`}>Home</Link></li>
                    <li><a href="/map.html" className={`navbar__link ${getActiveClass('/map.html')}`}>Explore Map</a></li>
                    <li><a href="/community.html" className={`navbar__link ${getActiveClass('/community.html')}`}>Community</a></li>
                    <li><a href="/ai-support.html" className={`navbar__link ${getActiveClass('/ai-support.html')}`}>AI Support</a></li>
                    <li><a href="/profile.html" className={`navbar__link ${getActiveClass('/profile.html')}`}>Profile</a></li>
                    <li><a href="/pricing.html" className={`navbar__link ${getActiveClass('/pricing.html')}`}>Pricing</a></li>
                </ul>
                <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="navbar__notifications" ref={notificationRef}>
                        <button className="navbar__notifications-trigger" onClick={toggleNotification}>
                            <span className="material-symbols-outlined navbar__notifications-icon">notifications</span>
                            <span className="navbar__notifications-badge"></span>
                        </button>
                        {isNotificationOpen && (
                            <div className="notifications-popup">
                                <div className="notifications-header">
                                    <h3>Notifications</h3>
                                    <button className="notifications-close" onClick={() => setIsNotificationOpen(false)}>
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                                <div className="notifications-content">
                                    {notifications.map(n => (
                                        <div key={n.id} className={`notification-item ${n.unread ? 'notification-item--unread' : ''}`}>
                                            <div className={`notification-avatar ${n.type === 'community' ? 'bg-blue-100' : n.type === 'safety' ? 'bg-red-100' : 'bg-purple-100'}`}>
                                                <span className="material-symbols-outlined">{n.icon}</span>
                                            </div>
                                            <div className="notification-info">
                                                <h4>{n.title}</h4>
                                                <p>{n.desc}</p>
                                                <span className="notification-time">{n.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="navbar__profile" ref={profileRef}>
                        <button className="navbar__profile-trigger" onClick={toggleProfile}>
                            <div className="navbar__profile-icon">
                                <span className="material-symbols-outlined">account_circle</span>
                            </div>
                        </button>
                        {isProfileOpen && (
                            <div className="navbar__profile-dropdown">
                                {user ? (
                                    <div className="navbar__profile-content">
                                        <div className="navbar__profile-info">
                                            <p className="navbar__profile-name">{user.name}</p>
                                            <p className="navbar__profile-email">{user.email}</p>
                                        </div>
                                        <div className="navbar__profile-divider"></div>
                                        <Link to="/profile.html" className="navbar__profile-item" onClick={() => setIsProfileOpen(false)}>
                                            Go to Profile
                                        </Link>
                                        <button className="navbar__profile-item navbar__profile-logout" onClick={() => setUser(null)}>
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="navbar__profile-content">
                                        <p className="navbar__profile-title">Connect Account</p>
                                        <p className="navbar__profile-desc">Sign in to sync your accessibility preferences.</p>
                                        <button
                                            className="navbar__profile-auth-btn"
                                            onClick={() => setUser({ name: 'User Name', email: 'user@example.com' })}
                                        >
                                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                                            Continue with Google
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
