import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FormStyles from "./Form.module.css";

export default function Form() {

  const [isSubmited, setIsSubmited] = useState(false);
  const [buttonState, setButtonState] = useState('Send');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(
        (result) => {
          setIsSubmited(true)
          setButtonState('Thanks for your message!')
        },

        (error) => {
          setButtonState('Error! Your message was not sent.')
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={FormStyles.form}>
      <div className={FormStyles.flex_data}>
        <input
          name="user_name"
          className={FormStyles.name}
          type="text"
          placeholder="Name"
          autoComplete="off"
          required
        ></input>
        <input
          name="user_company"
          className={FormStyles.company}
          type="text"
          placeholder="Company"
          autoComplete="off"
          required
        ></input>
      </div>

      <input
        name="user_email"
        className={FormStyles.mail}
        type="email"
        placeholder="Mail"
        autoComplete="off"
        required
      ></input>

      <textarea
        name="message"
        className={FormStyles.message}
        placeholder="Give us all the details!"
        required
      ></textarea>

      <button
        type="submit"
        disabled={isSubmited ? true : false}
        className={isSubmited ? FormStyles.submited : null}
      >{buttonState}</button>
    </form>
  );
}
