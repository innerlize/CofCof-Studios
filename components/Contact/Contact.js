import Image from 'next/image';
import Form from './Form/Form.js';
import ContactStyles from './Contact.module.css';


export default function Contact() {
    return (
        <section className={ContactStyles.section}>
            <div>
                <h3>Let&apos;s <span>get</span> in touch!</h3>

                <Form />
            </div>

            <div className={ContactStyles.footer}>
                <Image src='/Logo_cofcof.svg' width={98} height={58} />
                <iframe className={ContactStyles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.493970968067!2d-58.455652300000004!3d-34.566365600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d11e2e3377%3A0x7939df162bd9d3cd!2sAmen%C3%A1bar%201739%2C%20C1426%20CABA!5e0!3m2!1ses-419!2sar!4v1667254134040!5m2!1ses-419!2sar" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className={ContactStyles.extra_contact_info}>
                    <div className={ContactStyles.extra_contact_info_container}>
                        <Image src='/Phone.svg' width={25} height={25} />
                        <a>+54 9 112 1 587 183</a>
                    </div>

                    <div className={ContactStyles.extra_contact_info_container}>
                        <Image src='/Mail.svg' width={25} height={25} />
                        <a>info@cofcofstudios.com</a>
                    </div>

                    <div className={ContactStyles.extra_contact_info_container}>
                        <Image src='/CEO.svg' width={25} height={25} />
                        <a>Pablo Emmanuel De Leo</a>
                    </div>
                </div>

                <hr />

                <div className={ContactStyles.social_media_container}>
                    <a><Image src='/LinkedIn.svg' width={25} height={25} /></a>
                    <a><Image src='/Instagram.svg' width={25} height={25} /></a>
                    <a><Image src='/Twitter.svg' width={25} height={25} /></a>
                    <a><Image src='/Facebook.svg' width={25} height={25} /></a>
                </div>
            </div>
        </section>
    )
}