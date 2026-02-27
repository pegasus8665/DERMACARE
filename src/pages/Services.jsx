import { Link } from 'react-router-dom';
import { services } from '../data/cms';
import { ShieldCheck, PlusCircle, Star, Sparkles, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './Services.css';

// Map icons manually since CMS does not store React components
const iconMap = {
    'acne-treatment': <ShieldCheck size={40} />,
    'hair-fall-treatment': <PlusCircle size={40} />,
    'laser-hair-removal': <Sparkles size={40} />,
    'skin-rejuvenation': <Star size={40} />
};

const Services = () => {
    return (
        <div className="services-page">
            <SEOHead
                title="Dermatology Treatments & Services | DermaCare"
                description="Explore advanced skin and hair treatments at DermaCare. From anti-aging to acne and laser hair removal, we offer US-FDA approved technologies."
            />
            <div className="services-hero">
                <div className="container text-center">
                    <h1>Premium Dermatology Services</h1>
                    <p>Connect with state-of-the-art clinics offering advanced treatments for all your skin and hair concerns.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-grid">
                    {services.map(srv => (
                        <div className="service-card-lg" key={srv.id}>
                            <div className="srv-icon-wrapper">
                                {iconMap[srv.id] || <Star size={40} />}
                            </div>
                            <h2>{srv.serviceName}</h2>
                            <p className="text-muted">{srv.overview}</p>
                            <Link to={`/services/${srv.id}`} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
