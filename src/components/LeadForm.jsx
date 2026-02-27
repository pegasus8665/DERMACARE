import { useState, useEffect } from 'react';
import { getUTMParameters } from '../utils/utmTracker';
import { logEvent } from '../utils/analytics';
import './LeadForm.css';

const LeadForm = ({ defaultCity = 'Kolkata', defaultService = 'Acne Treatment', onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: defaultCity,
        service: defaultService,
        preferredLocation: ''
    });

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

        alert('Thank you! Our matching team will connect you with a top clinic shortly.');

        // Reset form
        setFormData(prev => ({ ...prev, name: '', phone: '', email: '' }));

        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input required type="text" name="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input required type="tel" name="phone" className="form-control" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label">Email Address (Optional)</label>
                <input type="email" name="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label">Preferred City</label>
                <select name="city" className="form-control" value={formData.city} onChange={handleChange}>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Service of Interest</label>
                <select name="service" className="form-control" value={formData.service} onChange={handleChange}>
                    <option value="Acne Treatment">Acne Treatment</option>
                    <option value="Hair Fall Treatment">Hair Fall Treatment</option>
                    <option value="Laser Hair Removal">Laser Hair Removal</option>
                    <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                    <option value="General Consultation">General Consultation</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
                Find Top Clinics
            </button>
        </form>
    );
};

export default LeadForm;
