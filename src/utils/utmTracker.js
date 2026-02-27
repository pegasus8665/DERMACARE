export const getUTMParameters = () => {
    // Run only in browser
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    const utms = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(param => {
        if (params.has(param)) {
            utms[param] = params.get(param);
        }
    });

    try {
        // Store in session storage if present so they persist across navigation
        if (Object.keys(utms).length > 0) {
            sessionStorage.setItem('clinic_utms', JSON.stringify(utms));
        }

        // Return stored or current
        const stored = sessionStorage.getItem('clinic_utms');
        return stored ? JSON.parse(stored) : utms;
    } catch (e) {
        console.warn('Session storage is not available', e);
        return utms;
    }
};
