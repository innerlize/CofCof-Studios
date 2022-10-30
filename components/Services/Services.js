import Features from './Features/Features.js';
import SpecialServices from './SpecialServices/SpecialServices.js';
import ServicesStyles from './Services.module.css';


export default function Services() {
    return (
        <section id='services' className={ServicesStyles.section}>
            <Features />
            <SpecialServices />
        </section>
    )
}