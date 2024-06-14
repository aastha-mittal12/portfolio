import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactmain.css';

const Contactmain = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_jkdfhh3';
    const templateId = 'template_t23tz17';
    const publicKey = '4EXqbmUUe_ba7rSIE';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Aastha Mittal',
      message: text,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setName('');
          setEmail('');
          setText('');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1>Let's connect</h1>
      <label htmlFor='user_name'>Name</label>
      <input
        type='text'
        id='user_name'
        placeholder='Enter Your Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor='user_email'>Email</label>
      <input
        type='email'
        id='user_email'
        placeholder='Enter your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='user_text'>Message</label>
      <textarea
        id='user_text'
        placeholder='Enter your message'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input className='btn' type='submit' value='Send' />
    </form>
  );
};

export default Contactmain;
