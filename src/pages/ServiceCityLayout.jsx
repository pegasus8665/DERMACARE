import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { services } from '../data/cms';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const formatName = (str) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const ServiceCityLayout = () => {
    const { serviceName, city } = useParams();
    const serviceTitle = formatName(serviceName);
    const cityName = formatName(city);

    const service = services.find(s => s.id === serviceName) || services[0];
    const { overview } = service;

    return (
        <div className="srv-city-layout-page">
            <SEOHead
                title={`Best ${serviceTitle} in ${cityName} | DermaCare`}
                description={`Looking for ${serviceTitle.toLowerCase()} in ${cityName}? Our expert dermatologists offer advanced solutions tailored for your needs.`}
            />

            <div className="srv-detail-hero">
                <div className="container">
                    <Breadcrumbs />
                    <h1>{serviceTitle} in {cityName}</h1>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem 0' }}>
                        {overview} Explore our advanced {serviceTitle.toLowerCase()} solutions available at our {cityName} clinics.
                    </p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
                    <div>
                        <h2>Why choose us for {serviceTitle} in {cityName}?</h2>
                        <ul className="benefits-list" style={{ paddingLeft: '0', marginTop: '1.5rem', lineHeight: '2', listStyle: 'none' }}>
                            <li>✅ Expert board-certified dermatologists</li>
                            <li>✅ Latest US-FDA approved technology</li>
                            <li>✅ Personalized treatment plans</li>
                            <li>✅ Convenient locations across {cityName}</li>
                        </ul>
                    </div>
                    <div className="booking-card" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Book your slot in {cityName}</h3>
                        <LeadForm defaultCity={cityName} defaultService={serviceTitle} />
                    </div>
                </div>

                {/* Top Clinics Plug */}
                <div className="top-clinics-section" style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid #eaeaea' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Top Clinics for {serviceTitle} in {cityName}</h2>
                        <p className="text-muted">Connect instantly with the highest-rated local specialists.</p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {/* Clinic 1 */}
                        <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>SkinCare Center</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Park Street, {cityName}</p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                            </div>
                        </div>
                        {/* Clinic 2 */}
                        <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>Advanced Derma Clinic</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Salt Lake, {cityName}</p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                            </div>
                        </div>
                        {/* Clinic 3 */}
                        <div className="clinic-card" style={{ padding: '2rem', background: 'white', border: '1px solid #eaeaea', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>City Skin Specialists</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> New Town, {cityName}</p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}><Phone size={18} /> Call</button>
                                <button className="btn btn-outline" style={{ flex: 1, padding: '0.75rem' }}><MessageCircle size={18} /> WhatsApp</button>
                                <button className="btn btn-accent" style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCityLayout;
