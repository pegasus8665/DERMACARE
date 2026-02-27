import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const Disclaimer = () => {
    return (
        <div className="legal-page">
            <SEOHead
                title="Disclaimer | DermaCare"
                description="Read our platform disclaimer regarding clinic connections and medical guidance."
            />

            <div className="container section">
                <Breadcrumbs />

                <div style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.8' }}>
                    <h1 style={{ marginBottom: '2rem' }}>Platform Disclaimer</h1>

                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>1. Platform Nature:</strong> DermaCare is a digital discovery platform designed to connect users with independent, verified dermatology clinics and specialists. We do not own, operate, or directly employ the medical practitioners listed on this platform.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>2. No Medical Advice:</strong> The content provided on this website—including text, graphics, images, and other material—is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>3. Liability:</strong> All medical treatments, consultations, and patient outcomes are the sole responsibility of the respective independent clinics and doctors you choose to consult with. DermaCare assumes no liability for the services rendered by third-party medical professionals.
                    </p>

                    <p>
                        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
