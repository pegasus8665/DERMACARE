import { useParams } from 'react-router-dom';
import { Award, BookOpen, MapPin, Calendar, Star } from 'lucide-react';
import './DoctorProfile.css';

import { doctors } from '../data/cms';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';


const DoctorProfile = () => {
    const { doctorName } = useParams();
    const doctor = doctors.find(d => d.id === doctorName);

    if (!doctor) {
        return <div className="container section text-center"><h2>Doctor not found.</h2></div>;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": doctor.name,
        "medicalSpecialty": doctor.specialization,
        "image": doctor.image
    };

    return (
        <div className="doc-profile-page">
            <SEOHead
                title={`${doctor.name} - ${doctor.specialization} | DermaCare`}
                description={doctor.profileDescription.substring(0, 150)}
                schema={schema}
            />
            <div className="container section">
                <Breadcrumbs />
                <div className="doc-layout">

                    <div className="doc-sidebar">
                        <img loading="lazy" src={doctor.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'} alt={doctor.name} className="doc-photo" />
                        <h1>{doctor.name}</h1>
                        <div className="doc-designation">{doctor.specialization}</div>

                        <div className="doc-stats-grid">
                            <div className="doc-stat">
                                <h4>{doctor.experience}</h4>
                                <p>Experience</p>
                            </div>
                            <div className="doc-stat">
                                <h4>10,000+</h4>
                                <p>Served</p>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }} onClick={() => alert('Connect to clinic workflow triggered')}>
                            <Calendar size={18} /> Connect with Clinic
                        </button>
                    </div>

                    <div className="doc-main-content">

                        <div className="doc-card">
                            <h3><BookOpen size={24} /> About {doctor.name.split(' ')[0]}</h3>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>{doctor.profileDescription}</p>

                            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Qualifications</h4>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                                {doctor.qualification.split(', ').map((q, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{q}</li>)}
                            </ul>
                        </div>

                        <div className="doc-card">
                            <h3><Award size={24} /> Expertise & Areas of Interest</h3>
                            <div className="doc-specs">
                                {doctor.specialization.split(' & ').map((spec, i) => (
                                    <span key={i} className="spec-badge">{spec}</span>
                                ))}
                            </div>
                        </div>

                        <div className="doc-card">
                            <h3><MapPin size={24} /> Available At</h3>
                            <div className="doc-specs">
                                {doctor.locationsAvailable.map((loc, i) => (
                                    <span key={i} className="spec-badge" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderColor: 'var(--color-primary-light)' }}>
                                        <MapPin size={16} style={{ display: 'inline', marginRight: '0.25rem', marginBottom: '-2px' }} />
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="doc-card">
                            <h3><Star size={24} /> Patient Reviews</h3>
                            <div>
                                <div className="review-item">
                                    <div className="review-header">
                                        <strong>Priya K.</strong>
                                        <div className="review-stars">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <Star key={star} size={16} fill="currentColor" opacity={1} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="review-text">"Amazing doctor. Very patient and highly skilled."</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default DoctorProfile;
