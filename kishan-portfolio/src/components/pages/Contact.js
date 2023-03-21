import React from 'react';
import './styles/Pages.css';

export default function Contact() {
  return (
    <div className='contact-container'>
      <h2 className='center'>Contact Me</h2>
      <div className='contact-info'>
        <h6>If you would like to get in touch with me, feel free to reach out to me with one of my contact methods shown below.</h6>
        <ul>
          <li>Email: <a href="mailto: kishan725@gmail.com">kishan725@gmail.com</a></li>
          <li>Phone Number: 973-452-7661</li>
          <li><a href='https://github.com/kishanshah98' target="_blank" rel="noreferrer">Github</a></li>
          <li><a href='https://www.linkedin.com/in/kishanshah25/' target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}