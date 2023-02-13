// IMPORT
import { renderServiceFeatures } from '../components/renderServiceFeatures.js';
import serviceFeaturesData from '../data/serviceFeaturesData.js';

// import { portfolioData } from '../data/portfolioData.js';
import { Gallery } from '../components/Gallery.js';

// EXECUTION

/* gallery: start */
const portfolioDataAPI =
    'https://front-end-by-rimantas.github.io/42-grupe-portfolio/data/portfolioData.json';

// Promise versija
// fetch(portfolioDataAPI)
//     .then((res) => res.json())
//     .then((obj) => new Gallery('#portfolio_block', obj))
//     .catch(() => {
//         return;
//     });

// Async/await versija
async function renderGallery() {
    try {
        const res = await fetch(portfolioDataAPI);
        const portfolioData = await res.json();
        new Gallery('#portfolio_block', portfolioData);
    } catch (err) {
        console.log('Err...');
    }
}
await renderGallery();

// Statine (duomenys is kodo failo) versija
// new Gallery('#portfolio_block', portfolioData);
/* gallery: end */

/* header: start */
const hamburgerDOM = document.querySelector('.hamburger');

function kaDaryti() {
    console.log('DAROM 2023!!!');
}
hamburgerDOM.addEventListener('click', kaDaryti);
/* header: end */

/* hero: start */
/* hero: end */

/* service-features: start */
renderServiceFeatures('features_list', serviceFeaturesData);
/* service-features: end */

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
