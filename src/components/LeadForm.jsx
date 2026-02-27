import { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { getUTMParameters } from '../utils/utmTracker';
import { logEvent } from '../utils/analytics';
import './LeadForm.css';

const LeadForm = ({ defaultCity = 'Kolkata', defaultService = 'Acne Treatment', hideHeader = false, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: defaultCity,
        service: defaultService,
        preferredLocation: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [pageUrl, setPageUrl] = useState('');
    const [utms, setUtms] = useState({});

    useEffect(() => {
        setPageUrl(window.location.href);
        setUtms(getUTMParameters());
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const leadPayload = {
            ...formData,
            pageUrl,
            utms
        };
        console.log('Lead submitted routing to correct branch based on City & Service:', leadPayload);

        logEvent('LeadGeneration', 'form_submit', formData.service);

        setIsSubmitted(true);

        if (onSuccess) {
            setTimeout(() => onSuccess(), 3000);
        }
    };

    if (isSubmitted) {
        return (
            <div className="lead-form-card success-state">
                <CheckCircle size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                <h3>Thank you!</h3>
                <p>Our team will contact you shortly to confirm your consultation.</p>
            </div>
        );
    }

    return (
        <div className="lead-form-card">
            {!hideHeader && (
                <div className="lead-form-header">
                    <h3>Book Consultation / Find Top Clinics Near You</h3>
                    <p>Fill the form and we will connect you with top dermatology clinics in your area.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="lead-form">
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input required type="text" name="name" className="form-control" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input required type="tel" name="phone" className="form-control" pattern="[0-9]{10,15}" title="Please enter a valid phone number" placeholder="e.g. 9876543210" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label className="form-label">Email (Optional)</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Select City</label>
                        <select name="city" className="form-control" value={formData.city} onChange={handleChange}>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Select Service</label>
                        <select name="service" className="form-control" value={formData.service} onChange={handleChange}>
                            <option value="Acne Treatment">Acne Treatment</option>
                            <option value="Hair Fall Treatment">Hair Fall Treatment</option>
                            <option value="Laser Hair Removal">Laser Hair Removal</option>
                            <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                            <option value="General Consultation">General Consultation</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block lead-submit-btn">
                    Get Top Clinics
                </button>

                <div className="trust-elements">
                    <ShieldCheck size={16} />
                    <span>Your information is secure. No spam. We only connect you with clinics.</span>
                </div>
            </form>
        </div>
    );
};

export default LeadForm;
