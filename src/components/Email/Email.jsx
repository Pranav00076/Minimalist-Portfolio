import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Email.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tw1d3ra', 'template_i14iykn', form.current, {
        publicKey: 'l4N73wXSF87YfYb9D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div >
    <form ref={form} onSubmit={sendEmail} className='e-outer'>
        <input type="text" name="user_name" placeholder='Name' />
        <input type="email" name="user_email" placeholder='Email'/>
        <textarea name="message" placeholder='Message'/>
        <button type='submit' value={'send'}>Submit</button>
    </form>

    </div>
    
  );
};

export default ContactUs;