import { useParams, Link } from 'react-router-dom';
import { Calendar, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { services } from '../data/cms';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import './Services.css';

const formatName = (str) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const ServiceDetail = () => {
    const { serviceName } = useParams();
    const service = services.find(s => s.id === serviceName);

    if (!service) {
        return <div className="container section text-center"><h2>Service not found.</h2><Link to="/services" className="btn btn-primary">Back to Services</Link></div>;
    }

    const { serviceName: title, overview, benefits, procedureDetails, faqs } = service;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return (
        <div className="srv-detail-page">
            <SEOHead
                title={`${title} Treatment in India`}
                description={overview}
                schema={schema}
            />
            <div className="srv-detail-hero">
                <div className="container">
                    <Breadcrumbs />
                    <h1>{title}</h1>
                    <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {overview}
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="srv-detail-content">
                    <div className="srv-main-content">
                        <h2>Procedure Overview</h2>
                        <p>
                            {procedureDetails}
                        </p>

                        <h2>Key Benefits</h2>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            {benefits.map((benefit, idx) => (
                                <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <CheckCircle2 className="text-accent" size={20} /> {benefit}
                                </li>
                            ))}
                        </ul>

                        <div className="before-after-grid">
                            <div className="ba-image">Before Placeholder</div>
                            <div className="ba-image">After Placeholder</div>
                        </div>

                        {/* Top Clinics Plug */}
                        <div className="top-clinics-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid #eee' }}>
                            <h2 style={{ marginBottom: '2rem' }}>Top Clinics for {title}</h2>
                            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                                {/* Clinic 1 */}
                                <div className="clinic-card" style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                    <h3>SkinCare Center</h3>
                                    <p className="text-muted" style={{ marginBottom: '1rem' }}><MapPin size={16} style={{ display: 'inline', marginBottom: '-2px' }} /> Park Street</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem' }}><Phone size={16} /> Call</button>
                                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}><MessageCircle size={16} /> WhatsApp</button>
                                        <button className="btn btn-accent" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                    </div>
                                </div>
                                {/* Clinic 2 */}
                                <div className="clinic-card" style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                    <h3>Advanced Derma Clinic</h3>
                                    <p className="text-muted" style={{ marginBottom: '1rem' }}><MapPin size={16} style={{ display: 'inline', marginBottom: '-2px' }} /> Salt Lake</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem' }}><Phone size={16} /> Call</button>
                                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}><MessageCircle size={16} /> WhatsApp</button>
                                        <button className="btn btn-accent" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                    </div>
                                </div>
                                {/* Clinic 3 */}
                                <div className="clinic-card" style={{ padding: '1.5rem', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                    <h3>City Skin Specialists</h3>
                                    <p className="text-muted" style={{ marginBottom: '1rem' }}><MapPin size={16} style={{ display: 'inline', marginBottom: '-2px' }} /> New Town</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem' }}><Phone size={16} /> Call</button>
                                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}><MessageCircle size={16} /> WhatsApp</button>
                                        <button className="btn btn-accent" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>Contact Clinic</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            {faqs.map((faq, idx) => (
                                <div className="faq-item" key={idx} style={idx === faqs.length - 1 ? { borderBottom: 'none', paddingBottom: 0 } : {}}>
                                    <h4>{faq.question}</h4>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="srv-sidebar">
                        <div className="booking-card">
                            <h3>Start Your Journey to Flawless Skin</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Book a personalized consultation for {title} today.</p>
                            <LeadForm defaultService={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
