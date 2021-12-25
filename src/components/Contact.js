import React from 'react';
import './Contact.css';
import EmailJs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJs.sendForm('service_o3b3nvn', 'template_woxaclg', e.target, 'user_66uTeFkappqeEJ5wksniA')
      .then((res) => {
        alert("message sent")
      })
      .catch((err) => {
        console.log(err)
      })
  };


  return (
    <div className='contact'>
      <h4 className='reach_me'>Reach out to <span className='hi'>say hi...</span></h4>
      <form onSubmit={sendEmail} className='form_contact'>
        <input type='email' name='user_email' className='email_input' placeholder='Email' />
        <textarea name='message' className='message_input' placeholder='Message' />
        <input type='submit' value='send' className='button_sendmessage' />
      </form>
    </div>
  )
}

export default Contact;
