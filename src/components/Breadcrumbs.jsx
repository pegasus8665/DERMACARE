import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const formatName = (str) => {
    if (!str) return '';
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(p => p);

    if (paths.length === 0) return null;

    const itemListElement = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dermacare-example.com/"
        }
    ];

    let currentLink = '';
    const breadcrumbNodes = paths.map((path, index) => {
        currentLink += `/${path}`;
        const name = formatName(path);

        itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": `https://dermacare-example.com${currentLink}`
        });

        const isLast = index === paths.length - 1;
        return (
            <span key={currentLink}>
                {' / '}
                {isLast ? (
                    <span style={{ color: 'var(--color-text-main)' }}>{name}</span>
                ) : (
                    <Link to={currentLink}>{name}</Link>
                )}
            </span>
        );
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
            <div className="loc-breadcrumb" style={{ margin: '1rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <Link to="/">Home</Link>
                {breadcrumbNodes}
            </div>
        </>
    );
};

export default Breadcrumbs;
