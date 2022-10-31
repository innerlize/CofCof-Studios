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
            <div></div>
        </section>
    )
}