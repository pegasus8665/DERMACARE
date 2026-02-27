import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Award, Map, Star, ArrowRight, ShieldCheck, PlusCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import './Home.css';

const Home = () => {
    return (
        <>
            <SEOHead
                title="Discover the Best Skin & Hair Clinics in India"
                description="DermaCare helps you connect with top-rated, verified dermatologists near you for safe and effective treatments."
            />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <h1>Find the Best Skin & Hair Clinics <br /><span className="text-accent">Near You</span></h1>
                        <p>We connect you with top, verified dermatology centers equipped with the latest technology across India.</p>
                        <div className="hero-actions">
                            <button className="btn btn-primary" onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                <Calendar size={20} /> Book Consultation
                            </button>
                            <Link to="/locations" className="btn btn-outline">
                                <MapPin size={20} /> Find a Clinic
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        {/* Generate random premium aesthetic image using Unsplash placeholders for demo purposes since we don't have local images yet */}
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dermatology Clinic" />
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="container">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-icon"><Users size={32} /></div>
                        <div className="stat-number">50,000+</div>
                        <div className="stat-label">Patients Treated</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon"><Map size={32} /></div>
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Locations Nationwide</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon"><Award size={32} /></div>
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Certified Dermatologists</div>
                    </div>
                </div>
            </section>

            {/* Experts Preview */}
            <section className="section bg-light text-center">
                <div className="container">
                    <h2 className="section-title">Verified Skin Specialists</h2>
                    <p className="section-subtitle">We work with the best-rated doctors across the country.</p>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Our Premium Services</h2>
                    <p className="section-subtitle">Comprehensive treatments tailored to your unique skin and hair needs.</p>

                    <div className="grid grid-4">
                        <Link to="/services/acne-treatment" className="service-card">
                            <ShieldCheck size={40} className="service-icon" />
                            <h3>Acne Treatment</h3>
                            <p className="text-muted">Advanced solutions for clear, blemish-free skin.</p>
                        </Link>

                        <Link to="/services/hair-fall-treatment" className="service-card">
                            <PlusCircle size={40} className="service-icon" />
                            <h3>Hair Fall Treatment</h3>
                            <p className="text-muted">Restore volume and stop hair loss naturally.</p>
                        </Link>

                        <Link to="/services/laser-hair-removal" className="service-card">
                            <SparklesIcon />
                            <h3>Laser Hair Removal</h3>
                            <p className="text-muted">Painless, permanent hair reduction technology.</p>
                        </Link>

                        <Link to="/services/skin-rejuvenation" className="service-card">
                            <Star size={40} className="service-icon" />
                            <h3>Skin Rejuvenation</h3>
                            <p className="text-muted">Anti-aging and glow-boosting clinical facials.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Patient Success Stories</h2>
                    <p className="section-subtitle">Hear from our clients who transformed their confidence.</p>

                    <div className="grid grid-3">
                        <div className="testimonial-card">
                            <p className="testimonial-text">"The acne treatment was a game-changer! My skin has never looked so clear. The doctors at Salt Lake clinic were fantastic."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">P</div>
                                <div className="author-info">
                                    <h4>Priya Sharma</h4>
                                    <p>Kolkata</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p className="testimonial-text">"I struggled with hair fall for years. DermaCare's protocol stopped it within 3 months. Highly recommend their South Ex clinic."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">R</div>
                                <div className="author-info">
                                    <h4>Rahul Gupta</h4>
                                    <p>Delhi</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p className="testimonial-text">"The laser hair removal was virtually painless! The clinic feels like a premium spa, amazing experience in Andheri."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">A</div>
                                <div className="author-info">
                                    <h4>Aditi Desai</h4>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Location Search Promo */}
            <section className="section bg-primary text-white" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find a Clinic Near You</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-primary-light)' }}>
                        We are expanding rapidly to bring world-class dermatological care to your neighborhood.
                    </p>
                    <Link to="/locations" className="btn btn-accent" style={{ fontSize: '1.25rem' }}>
                        View All Locations <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section bg-light text-center">
                <div className="container">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">Your journey to the perfect treatment in 3 simple steps.</p>

                    <div className="grid grid-3" style={{ marginTop: '3rem', gap: '2rem' }}>
                        <div className="how-it-works-step" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
                            <h3>Choose Your Service</h3>
                            <p className="text-muted">Select the dermatology treatment you need from our comprehensive list.</p>
                        </div>
                        <div className="how-it-works-step" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>2</div>
                            <h3>View Top Clinics</h3>
                            <p className="text-muted">Browse through highly-rated, verified clinics in your exact locality.</p>
                        </div>
                        <div className="how-it-works-step" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
                            <h3>Contact & Book</h3>
                            <p className="text-muted">Connect directly via call, WhatsApp, or request a free consultation call.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="section bg-light" id="consultation-form">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Find the Right Clinic for You</h2>
                            <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                                Not sure where to go? Leave your details with us and our team will connect you with the best-rated dermatology center for your specific needs.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 100% Free Service</li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Verified Local Clinics</li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Hassle-Free Bookings</li>
                            </ul>
                        </div>
                        <div>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Quick inline component for Sparkles as it wasn't imported from lucide-react above
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
);

export default Home;
