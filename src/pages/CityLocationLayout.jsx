import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { services } from '../data/cms';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const formatName = (str) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const CityLocationLayout = () => {
    const { city } = useParams();
    const cityName = formatName(city);

    return (
        <div className="city-layout-page">
            <SEOHead
                title={`Dermatology Clinics in ${cityName} | Top Specialists`}
                description={`Find the best-rated skin and hair clinics in ${cityName}. We connect you with top-tier verified dermatology specialists.`}
            />
            <div className="locations-hero bg-light section text-center">
                <div className="container">
                    <Breadcrumbs />
                    <h1 style={{ marginTop: '1rem' }}>Dermatology Clinics in {cityName}</h1>
                    <p style={{ maxWidth: '800px', margin: '1rem auto' }}>
                        Welcome to the premier network of top-rated dermatologists in {cityName}. Whether you're looking for advanced acne therapies, laser hair reduction, or anti-aging treatments, we help you connect with highly verified specialists equipped with US-FDA approved technologies right in your neighborhood.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>

                    {/* Main Content - Top Clinics */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Top Clinics in {cityName}</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Clinic 1 */}
                            <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '1.25rem' }}>SkinCare Center – Premium</h3>
                                <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Central {cityName}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                    <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                    <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                </div>
                            </div>
                            {/* Clinic 2 */}
                            <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '1.25rem' }}>Advanced Derma Clinic</h3>
                                <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> North {cityName}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                    <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                    <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                </div>
                            </div>
                            {/* Clinic 3 */}
                            <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '1.25rem' }}>City Skin Specialists</h3>
                                <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> South {cityName}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                    <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                    <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div style={{ background: 'var(--color-bg-alt)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Services Available in {cityName}</h3>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                {services.map((srv) => (
                                    <li key={srv.id} style={{ marginBottom: '1rem' }}>
                                        <Link to={`/services/${srv.id}/${city}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 500 }}>
                                            <CheckCircle2 className="text-accent" size={20} /> {srv.serviceName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Get Free Assistance</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Not sure which clinic is best for you? Let our experts help you find the right match.</p>
                            <LeadForm defaultCity={cityName} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CityLocationLayout;
