import React from "react";
import send from "../../assets/send-mail.svg";
import uparrow from "../../assets/uparrow.png";
import { useState, useEffect } from "react";
import validations from "./validations";
import Swal from "sweetalert2";
import axios from 'axios'

const Contact = () => {
  const initialEmailState = {
    from: "",
    subject: "",
    text: "",
  };
  const [email, setEmail] = useState({ ...initialEmailState });

  const [errors, setErrors] = useState({
    from: "",
    subject: "",
    text: "",
  });
  const isDisabled =
    errors.from ||
    errors.subject ||
    errors.text ||
    !email.from ||
    !email.subject ||
    !email.text;

  useEffect(() => {
    if (email.from !== "" || email.subject !== "" || email.text !== "") {
      const validatedEmail = validations(email);
      setErrors(validatedEmail);
    }
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const clickeame = async(e) => {
    e.preventDefault();
    setEmail(initialEmailState);
    console.log(email);
    try {
      Swal.fire({
        title: "Thanks!",
        text: `We'll be in contact`,
        icon: "success",
        confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      const response = await axios.post('http://localhost:3000/send', email);
     
    } catch (error) {
      throw Error(error)
    }
    
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  return (
    <>
    <div className="">
      {" "}
      {/* Div Contact*/}
      <h2 className="flex justify-center text-3xl">Get in touch</h2>
      <form >
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">From</span>
          <input
            type="text"
            class="peer ..."
            name="from"
            value={email.from}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`max-w-screen-md rounded-md w-full text-center`}
            />
          {errors.from !== "" && <p className="text-red-600">{errors.from}</p>}
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">To</span>
          <input
            type="email"
            class="peer ..."
            name="to"
            value="maxiandrade62@gmail.com"
            readOnly
            className="placeholder-slate-500 max-w-screen-md rounded-md w-full text-center cursor-not-allowed"
            />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Subject</span>
          <input
            type="subject"
            class="peer ..."
            name="subject"
            value={email.subject}
            onChange={handleChange}
            placeholder="Subject line that catches attention"
            className="max-w-screen-md rounded-md w-full text-center"
            />
          {errors.subject !== "" && (
            <p className="text-red-600">{errors.subject}</p>
            )}
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Text</span>
          <textarea
            class="peer ..."
            name="text"
            value={email.text}
            onChange={handleChange}
            placeholder="Tell me everything"
            className="max-w-screen-md rounded-md w-full h-28 placeholder:text-center resize-none"
            />
          {errors.text !== "" && <p className="text-red-600">{errors.text}</p>}
        </label>
        <br />
        <button
          className={`bg-white-950 text-white px-9 py-3 rounded-xl shadow-xl hover:scale-105 border-2 border-stone-400 transition-transform duration-300 ease-in-out ${
            isDisabled
            ? "hover:border-red-500 transition-transform duration-300"
            : "hover:border-green-500 "
          }`}
          onClick={clickeame}
          disabled={
            errors.from ||
            errors.subject ||
            errors.text ||
            !email.from ||
            !email.subject ||
            !email.text
          }
          >
          <img src={send} alt="send" className="h-9" />
        </button>
      </form>
      <div className="flex justify-end px-5 ">
      <button onClick={handleScroll} className="hover:scale-105  transition-transform duration-300 ease-in-out" >
        <img src={uparrow} alt="up arrow" />
      </button>
      </div>
      
      <br />
    </div>
          </>
  );
};

export default Contact;
