import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FormStyles from "./Form.module.css";

export default function Form() {

  const [isSubmited, setIsSubmited] = useState(false);
  const [buttonState, setButtonState] = useState('Send');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7yalm0g", "template_ofncmab", form.current, "S3ejQostNeT3XqUtu")
      .then(
        (result) => {
          setIsSubmited(true)
          setButtonState('Thanks for your message!')
        },

        (error) => {
          console.log(error.text);
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
          required
        ></input>
        <input
          name="user_company"
          className={FormStyles.company}
          type="text"
          placeholder="Company"
          required
        ></input>
      </div>

      <input
        name="user_email"
        className={FormStyles.mail}
        type="email"
        placeholder="Mail"
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
