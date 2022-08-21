import React from "react";
import "./contact.css";
import Phone from "../../icons/phone.png";
import Email from "../../icons/email.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3fgmh4k",
        "template_bboi2n1",
        formRef.current,
        "user_NqkqJF8Ards9i3Mf0WfYQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              0972616972
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              jiayenc@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Send email to me directly</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name="user_name" />
            <input type="text" placeholder="Your Email" name="user_email" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && alert("Your Email has been sent to Lesley.")}
          </form>
        </div>
      </div>
    </div>
  );
}
