import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location = useLocation();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'navbar__link--active' : '';
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-empower">Empower</span>
                    <span className="navbar__logo-able">Able</span>
                </Link>
                <ul className="navbar__links">
                    <li><Link to="/" className={`navbar__link ${getActiveClass('/')}`}>Home</Link></li>
                    <li><a href="/map.html" className="navbar__link">Explore Map</a></li>
                    <li><a href="/community.html" className="navbar__link">Community</a></li>
                    <li><a href="/profile.html" className="navbar__link">Profile</a></li>
                    <li><a href="/#about" className="navbar__link">About</a></li>
                    <li><a href="/pricing.html" className="navbar__link">Pricing</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
