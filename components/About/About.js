import Image from 'next/image';
import AboutStyles from './About.module.css';


export default function About() {
    return (
        <section className={AboutStyles.about}>
            <div>
                <h2 className={AboutStyles.about_title}>WHAT WE DO?</h2>
                <p className={AboutStyles.about_desc}>Our mission is to solve problems. There is nothing we can&apos;t solve. We offer our clients a comprehensive service for the production of films and video games, from pre-production to post-production, specializing in the development of 3D pipeline for film and video games, we also provide 3D and consulting services.</p>
            </div>

            <div className={AboutStyles.div}>
                <Image className={AboutStyles.about_polygon} src='/About_nav_polygon.svg' width={116} height={116} />
                <nav className={AboutStyles.about_nav}>
                    <div className={AboutStyles.about_nav_links_container}>
                        <a href='#' className={AboutStyles.about_nav_link}>SERVICES</a>
                        <a href='#' className={AboutStyles.about_nav_link}>PORTFOLIO</a>
                    </div>
                    <div className={AboutStyles.about_nav_links_container}>
                        <a href='#' className={AboutStyles.about_nav_link}>GET IN TOUCH</a>
                    </div>
                </nav>
            </div>
        </section>
    )
}