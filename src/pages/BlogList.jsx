import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { blogs, doctors } from '../data/cms';
import SEOHead from '../components/SEOHead';
import './Blog.css';


const BlogList = () => {
    return (
        <div className="blog-page">
            <SEOHead title="Blog - DermaCare" description="Expert insights, treatment guides, and tips from our board-certified dermatologists." />
            <div className="blog-hero">
                <div className="container">
                    <h1>DermaCare Skin & Hair Journal</h1>
                    <p>Expert insights, treatment guides, and tips from our board-certified dermatologists.</p>
                </div>
            </div>

            <div className="container">
                <div className="blog-grid">
                    {blogs.map(post => {
                        const author = doctors.find(d => d.id === post.author) || { name: 'Medical Team', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=100&q=80' };
                        return (
                            <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
                                <div className="blog-img">
                                    <span className="blog-tag">{post.targetKeyword}</span>
                                    <img loading="lazy" src={post.image || 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>

                                    <div className="blog-meta">
                                        <div className="blog-author">
                                            <img loading="lazy" src={author.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=100&q=80'} alt={author.name} />
                                            <span>{author.name}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Clock size={14} /> 5 min read
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <span className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Read More</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
