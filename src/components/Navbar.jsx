import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' },
        { name: 'Doctors', path: '/doctors/1' }, // Demo link to doctor profile
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">

                <Link to="/" className="nav-logo">
                    <div className="nav-logo-icon">
                        <Sparkles size={24} />
                    </div>
                    <span>Derma<span className="text-accent">Care</span></span>
                </Link>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {/* Mobile only CTA */}
                    <li className="mobile-only" style={{ display: isMobileMenuOpen ? 'block' : 'none', marginTop: '1rem' }}>
                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { setIsMobileMenuOpen(false); document.dispatchEvent(new Event('openLeadModal')); }}>
                            <Calendar size={18} /> Book Appointment
                        </button>
                    </li>
                </ul>

                <div className="nav-actions">
                    <button className="btn btn-primary" style={{ display: isMobileMenuOpen ? 'none' : 'flex' }} onClick={() => document.dispatchEvent(new Event('openLeadModal'))}>
                        <Calendar size={18} /> <span className="hide-on-mobile">Book Consultation</span>
                    </button>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
