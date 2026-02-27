import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    {/* Brand Col */}
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-brand">
                            <div className="icon-container">
                                <Sparkles size={24} color="white" />
                            </div>
                            <span>Derma<span className="text-accent">Care</span></span>
                        </Link>
                        <p className="footer-desc">
                            Discover the best skin and hair clinics across India. We help you connect with top, verified dermatologists in your area for safe and trusted treatments.
                        </p>
                    </div>

                    {/* Quick Links Col */}
                    <div>
                        <h4 className="footer-heading">Our Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/acne-treatment" className="footer-link">Acne Treatment</Link></li>
                            <li><Link to="/services/hair-fall-treatment" className="footer-link">Hair Fall Treatment</Link></li>
                            <li><Link to="/services/laser-hair-removal" className="footer-link">Laser Hair Removal</Link></li>
                            <li><Link to="/services/skin-rejuvenation" className="footer-link">Skin Rejuvenation</Link></li>
                        </ul>
                    </div>

                    {/* Locations Col */}
                    <div>
                        <h4 className="footer-heading">Top Clinic Locations</h4>
                        <ul className="footer-links">
                            <li><Link to="/locations/kolkata" className="footer-link">Clinics in Kolkata</Link></li>
                            <li><Link to="/locations/mumbai" className="footer-link">Clinics in Mumbai</Link></li>
                            <li><Link to="/locations/delhi" className="footer-link">Clinics in Delhi</Link></li>
                            <li><Link to="/locations" className="footer-link">View All Locations</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="footer-contact-item">
                            <Phone size={20} />
                            <div>
                                <p>+91 98765 43210</p>
                                <p>Mon - Sat, 9:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <Mail size={20} />
                            <p>consult@dermacare.in</p>
                        </div>
                        <div className="footer-contact-item">
                            <MapPin size={20} />
                            <p>Head Office: 123 Tech Park, Sector 5, Kolkata</p>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DermaCare Network. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/disclaimer">Disclaimer</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
