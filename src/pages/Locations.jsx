import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import './Locations.css';
import SEOHead from '../components/SEOHead';

const CITIES = [
    { name: 'Kolkata', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=600&auto=format&fit=crop' },
    { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600&auto=format&fit=crop' },
    { name: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600&auto=format&fit=crop' },
    { name: 'Bangalore', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop' }
];

const Locations = () => {
    return (
        <div className="locations-page">
            <SEOHead
                title="Dermatology Clinics in India | Find Top Specialists"
                description="Discover and connect with top-rated dermatology clinics across major cities in India like Kolkata, Mumbai, and Delhi."
            />
            <div className="locations-hero bg-light section text-center">
                <div className="container">
                    <h1>Find a Clinic Near You</h1>
                    <p>Discover top-rated dermatology centers equipped with the latest technology in your city.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {CITIES.map((city, idx) => (
                        <div className="clinic-card" key={idx} style={{ overflow: 'hidden', borderRadius: '12px', background: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                <img loading="lazy" src={city.image} alt={`Dermatology clinics in ${city.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                                    <MapPin className="text-primary" size={24} /> {city.name}
                                </h3>
                                <div style={{ marginTop: 'auto' }}>
                                    <Link to={`/locations/${city.name.toLowerCase()}`} className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                        View Clinics <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;
