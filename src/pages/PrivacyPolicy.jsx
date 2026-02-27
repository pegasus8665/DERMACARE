import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <SEOHead
                title="Privacy Policy | DermaCare"
                description="Learn how DermaCare protects your data and privacy when connecting you with top clinics."
            />

            <div className="container section">
                <Breadcrumbs />

                <div style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.8' }}>
                    <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>

                    <p style={{ marginBottom: '1.5rem' }}>
                        At DermaCare, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our discovery platform.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Information Collection</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We collect basic user details (such as Name, Phone Number, Email, and Location preferences) solely for the purpose of appointment scheduling and clinic matching assistance.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Data Usage</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Your data is securely passed <strong>only</strong> to the verified partner clinics you are connected with to facilitate your medical consultation. We do not sell, rent, or trade your personal information to unassociated third parties.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Data Security</h3>
                    <p>
                        We implement industry-standard security measures to maintain the safety of your personal information when you enter, submit, or access your data on our platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
