import Image from 'next/image';
import Form from './Form/Form.js';
import ContactStyles from './Contact.module.css';
import Logo from './Logo_cofcof.svg';


export default function Contact() {
    return (
        <section className={ContactStyles.section} id='contact'>
            <div>
                <h3>Let&apos;s <span>get</span> in touch!</h3>

                <Form />
            </div>

            <div className={ContactStyles.footer}>
                <div className={ContactStyles.logo}>
                    <Image src={Logo} fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                </div>
                <iframe className={ContactStyles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.493970968067!2d-58.455652300000004!3d-34.566365600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d11e2e3377%3A0x7939df162bd9d3cd!2sAmen%C3%A1bar%201739%2C%20C1426%20CABA!5e0!3m2!1ses-419!2sar!4v1667254134040!5m2!1ses-419!2sar" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className={ContactStyles.extra_contact_info}>
                    <div className={ContactStyles.extra_contact_info_container}>
                        <div>
                            <Image src='/Phone.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                        </div>
                        <a href='https://api.whatsapp.com/send/?phone=5491121587183' target='_blank' rel="noreferrer">+54 9 112 1 587 183</a>
                    </div>

                    <div className={ContactStyles.extra_contact_info_container}>
                        <div>
                            <Image src='/Mail.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                        </div>
                        <a>info@cofcofstudios.com</a>
                    </div>

                    <div className={ContactStyles.extra_contact_info_container}>
                        <div>
                            <Image src='/CEO.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
                        </div>
                        <a>Pablo Emmanuel De Leo</a>
                    </div>
                </div>

                <hr />

                <div className={ContactStyles.social}>
                    <h4>Follow us! ;)</h4>
                    <div className={ContactStyles.social_media_container}>
                        <a href='https://www.linkedin.com/company/cofcofstudios/?originalSubdomain=my' target='_blank' rel="noreferrer"><Image src='/LinkedIn.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" /></a>
                        <a href='https://www.instagram.com/cofcofstudios/?hl=es' target='_blank' rel="noreferrer"><Image src='/Instagram.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" /></a>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><Image src='/Twitter.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" /></a>
                        <a href='https://es-la.facebook.com/cofcofstudios/' target='_blank' rel="noreferrer"><Image src='/Facebook.svg' fill alt="imagen" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}