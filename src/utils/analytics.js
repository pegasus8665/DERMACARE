import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const initGA = () => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path || window.location.pathname });
};

export const logEvent = (category, action, label = "") => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
