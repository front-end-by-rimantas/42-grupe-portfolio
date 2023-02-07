// IMPORT
import { renderServiceFeatures } from '../components/renderServiceFeatures.js';
import serviceFeaturesData from '../data/serviceFeaturesData.js';

// EXECUTION

/* service-features: start */

renderServiceFeatures('features_list', serviceFeaturesData);

/* service-features: end */

/* header: start */

const hamburgerDOM = document.querySelector('.hamburger');

function kaDaryti() {
    console.log('DAROM 2023!!!');
}

hamburgerDOM.addEventListener('click', kaDaryti);

/* header: end */

/* hero: start */
/* hero: end */

/* features: start */
/* features: end */

/* clients: start */
/* clients: end */

/* beautiful: start */
/* beautiful: end */

/* devices: start */
/* devices: end */

/* testimonials: start */
/* testimonials: end */

/* achievements: start */
/* achievements: end */

/* pricing: start */
/* pricing: end */

/* faq: start */
/* faq: end */

/* cta: start */
/* cta: end */

/* footer: start */
/* footer: end */
