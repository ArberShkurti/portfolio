import React, {useRef} from 'react'
// import { ReactComponent as RightArrowIcon } from './assets/icons/1.png';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xrallor', 'template_4esfmmu', form.current, 'Kug9nz9oVILUxZYHkgit')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='contact-form-section-container d-flex flex-column'>
        <h1>
            <span>Curiosity,</span>
            <br></br>
            piqued.
        </h1>
        <form ref={form} onSubmit={sendEmail}>
            <div className='email-input d-flex'>
                <input type="email" placeholder='Your email'></input>
                {/* <button type='submit'><RightArrowIcon height={20}/></button> */}
            </div>
        </form>
        <p>
            Contact to be part of our wonderful experience
        </p>

    </div>
  )
}

export default ContactForm;