import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { locations, services, doctors } from '../data/cms';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import './LocationDetail.css';

const formatName = (str) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const LocationDetail = () => {
    const { city, area } = useParams();

    // Find the specific location from CMS data
    const location = locations.find(
        (loc) => loc.city.toLowerCase() === city?.toLowerCase() && loc.area.toLowerCase().replace(/\s+/g, '-') === area?.toLowerCase()
    );

    if (!location) {
        return <div className="container section text-center"><h2>Location not found.</h2><Link to="/locations" className="btn btn-primary">Back to Locations</Link></div>;
    }

    const servicesAvailable = location.servicesAvailable.map(id => {
        const s = services.find(srv => srv.id === id);
        return s ? s.serviceName : id;
    });

    const doctorsAvailable = location.doctorsAvailable.map(id => {
        return doctors.find(doc => doc.id === id);
    }).filter(Boolean);

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": `DermaCare ${location.city} - ${location.area}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": location.fullAddress,
            "addressLocality": location.city
        },
        "telephone": location.phoneNumber
    };

    return (
        <div className="loc-detail-page">
            <SEOHead
                title={`DermaCare ${location.area}, ${location.city} | Best Dermatologist`}
                description={`Looking for the top skin specialist in ${location.area}? Book an appointment at DermaCare ${location.city} for acne, hair loss, and anti-aging treatments.`}
                schema={schema}
            />
            <div className="loc-detail-hero">
                <div className="container">
                    <Breadcrumbs />
                    <h1>DermaCare {location.city} - {location.area}</h1>
                    <p>Your trusted destination for premium dermatology in {location.area}, {location.city}.</p>
                </div>
            </div>

            <div className="container branch-info-section">
                <div className="branch-grid">

                    <div className="branch-main">
                        <div className="branch-map">
                            {/* Dummy Google Maps iframe embed */}
                            <iframe
                                src={location.googleMapEmbed}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map for DermaCare ${location.area}`}
                            ></iframe>
                        </div>

                        <div className="branch-content">
                            <h2 className="branch-section-title">Available Services</h2>
                            <div className="grid grid-2">
                                {servicesAvailable.map((srv, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--color-text-main)' }}>
                                        <CheckCircle2 size={18} className="text-accent" />
                                        <span>{srv}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="seo-block">
                                <h3>Best Dermatology Clinic in {location.city}</h3>
                                <p>
                                    Looking for the top skin specialist in {location.area}? DermaCare offers world-class treatments
                                    for acne, hair loss, and anti-aging right here in {location.city}. Our US-FDA approved technologies
                                    and highly experienced dermatologists perfectly ensure safe, effective, and lasting results for all skin types.
                                </p>
                                <br />
                                <p>
                                    Whether you need a routine consultation or an advanced clinical procedure, our {location.area} clinic
                                    is fully equipped to handle your unique dermatological needs. Book an appointment today to start your journey to flawless skin.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="branch-sidebar">
                        <div className="sidebar-card">
                            <h3>Clinic Details</h3>
                            <div className="info-list">
                                <div className="info-item">
                                    <MapPin size={24} />
                                    <div>
                                        <strong>Address</strong>
                                        <p>{location.fullAddress}</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Clock size={24} />
                                    <div>
                                        <strong>Timings</strong>
                                        <p>{location.workingHours}</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Phone size={24} />
                                    <div>
                                        <strong>Contact</strong>
                                        <p>{location.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Request a Callback</h4>
                                <LeadForm defaultCity={location.city} />
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h3>Verified Specialists Here</h3>
                            {doctorsAvailable.map(doc => (
                                <Link to={`/doctors/${doc.id}`} className="doc-mini-card" key={doc.id} style={{ textDecoration: 'none', display: 'flex' }}>
                                    <img loading="lazy" src={doc.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'} alt={doc.name} className="doc-avatar" />
                                    <div>
                                        <h4 style={{ color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>{doc.name}</h4>
                                        <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>{doc.specialization}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LocationDetail;
