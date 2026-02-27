import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, MapPin } from 'lucide-react';
import { blogs, doctors } from '../data/cms';
import LeadForm from '../components/LeadForm';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import './Blog.css';

const BlogPost = () => {
    const { blogId } = useParams();
    const post = blogs.find(p => p.id === blogId) || blogs[0];
    const author = doctors.find(d => d.id === post.author) || { name: 'Medical Team' };

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": author.name
        },
        "datePublished": post.date
    };

    return (
        <div className="post-page">
            <SEOHead
                title={`${post.title} | DermaCare Blog`}
                description={post.excerpt}
                schema={schema}
            />
            <div className="container section">
                <Breadcrumbs />
                <div className="post-layout">

                    <div className="post-article">
                        <div className="post-header">
                            <span className="blog-tag" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
                                {post.category || 'Dermatology'}
                            </span>
                            <h1>{post.title}</h1>

                            <div className="post-meta-lg">
                                <div className="post-meta-item">
                                    <User size={18} /> {author.name}
                                </div>
                                <div className="post-meta-item">
                                    <Calendar size={18} /> {post.date}
                                </div>
                                <div className="post-meta-item">
                                    <Clock size={18} /> 5 min read
                                </div>
                            </div>
                        </div>

                        <div className="post-content">
                            <img loading="lazy" src={post.image || 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} alt={post.title} style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} />

                            {post.toc && post.toc.length > 0 && (
                                <div className="toc-container">
                                    <h4>Table of Contents</h4>
                                    <ul className="toc-list">
                                        {post.toc.map((item, index) => (
                                            <li key={index}>
                                                <a href={`#${item.id}`}>{item.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {post.content ? (
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            ) : (
                                <>
                                    <p className="lead">At DermaCare, we handle thousands of cases every year. Whether you are dealing with stubborn acne, unexplained hair loss, or just want to improve your skin's vitality, the right knowledge is your first step towards healing.</p>

                                    <h2>Understanding the Root Causes</h2>
                                    <p>Many patients try over-the-counter remedies without success because they haven't identified the underlying cause. From hormonal imbalances to genetic predispositions, the triggers can vary significantly. That is why consulting a <Link to="/doctors/1">specialist</Link> is crucial.</p>

                                    <h2>Available Treatments</h2>
                                    <p>Depending on your unique condition, our <Link to="/locations/kolkata">Kolkata</Link> or <Link to="/locations/delhi">Delhi</Link> clinics offer targeted therapies. For instance, our <Link to="/services/acne-treatment">advanced acne treatments</Link> combine chemical peels with laser interventions for optimal results.</p>
                                </>
                            )}

                            <div className="cta-box bg-light" style={{ padding: '2rem', borderRadius: '12px', marginTop: '3rem', textAlign: 'center' }}>
                                <h2>Need Expert Advice?</h2>
                                <p style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Connect with highly-rated dermatologists today and get a personalized treatment plan.</p>
                                <Link to="/locations" className="btn btn-primary" style={{ display: 'inline-block' }}>
                                    Find a Clinic
                                </Link>
                            </div>

                            {post.topClinics && post.topClinics.length > 0 && (
                                <div style={{ marginTop: '3rem' }}>
                                    <h2>Top Clinics Near You</h2>
                                    <p className="text-muted">Explore top-rated centers for {post.category || 'dermatology'} treatments.</p>
                                    <div className="clinics-grid">
                                        {post.topClinics.map((clinic, idx) => (
                                            <div key={idx} className="clinic-mini-card">
                                                <h4>{clinic.name}</h4>
                                                <p className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <MapPin size={14} /> {clinic.area}, {clinic.city}
                                                </p>
                                                <Link to={`/locations/${clinic.city.toLowerCase()}`} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', width: '100%' }}>View Clinic</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {post.faqs && post.faqs.length > 0 && (
                                <div className="faq-section" style={{ marginTop: '3rem' }}>
                                    <h2>Frequently Asked Questions</h2>
                                    {post.faqs.map((faq, idx) => (
                                        <div key={idx} className="faq-item" style={idx === post.faqs.length - 1 ? { borderBottom: 'none', paddingBottom: 0 } : {}}>
                                            <h4>{faq.question}</h4>
                                            <p>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="post-sidebar">
                        <div className="sidebar-widget">
                            <h4>Related Topics</h4>
                            <div className="widget-links">
                                {blogs.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                                    <Link key={p.id} to={`/blog/${p.id}`} style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', fontWeight: 500 }}>
                                        {p.title} <ArrowRight size={14} style={{ display: 'inline', color: 'var(--color-primary)' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-widget" style={{ background: 'var(--color-primary-dark)', color: 'white', position: 'sticky', top: '100px' }}>
                            <h4 style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Free Consultation</h4>
                            <p style={{ color: 'var(--color-primary-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Not sure where to start? Drop your details and our team will guide you to the right treatment.
                            </p>
                            <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', color: 'initial' }}>
                                <LeadForm defaultService="General Consultation" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPost;
