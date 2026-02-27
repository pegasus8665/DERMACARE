import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description, path, schema }) => {
    const siteUrl = 'https://dermacare-example.com';
    const currentUrl = `${siteUrl}${path || ''}`;

    return (
        <Helmet>
            <title>{title} | DermaCare</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
