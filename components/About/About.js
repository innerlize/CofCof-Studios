import Image from 'next/image';
import AboutStyles from './About.module.scss';
import Polygon from './About_nav_polygon.svg';


export default function About() {
    return (
        <section className={AboutStyles.section}>
            <div className={AboutStyles.text_container}>
                <h2>WHAT WE DO?</h2>
                <p>Our mission is to solve problems. There is nothing we can&apos;t solve. We offer our clients a comprehensive service for the production of films and video games, from pre-production to post-production, specializing in the development of 3D pipeline for film and video games, we also provide 3D and consulting services.</p>
            </div>

            <div className={AboutStyles.nav_container}>
                <Image src={Polygon} />
                <nav className={AboutStyles.nav}>
                    <div className={AboutStyles.nav_row}>
                        <a className={AboutStyles.nav_link} href='#services'>SERVICES</a>
                        <a className={AboutStyles.nav_link} href='#works'>PORTFOLIO</a>
                    </div>
                    <div className={[AboutStyles.nav_row, AboutStyles.nav_second_row].join(" ")}>
                        <a className={AboutStyles.nav_link} href='#contact'>GET IN TOUCH</a>
                    </div>
                </nav>
            </div>
        </section>
    )
}