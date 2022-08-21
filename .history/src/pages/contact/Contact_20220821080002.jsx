import React from "react";
import "./contact.css";
import Phone from "../../icons/phone.png";
import Email from "../../icons/email.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fq3b0a4",
        "template_c9alx7x",
        formRef.current,
        "haCIwzOHTo1LYf6u5WfYQ"
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
              sourjyc@gmail.com
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
