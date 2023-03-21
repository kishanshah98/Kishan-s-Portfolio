import React from 'react';
import PDF from '../pages/images/KishanShahResume.pdf';

export default function Resume() {
  return (
    <div>
      <h2 className='center'>Resume</h2>
      <div className='resume-info'>
        <p>
          Click <a href={PDF} download>here</a> for link to resume
        </p>
        <h3>Front-End Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Web APIs/Server-side APIs/Third-party APIs</li>
        </ul>
        <h3>Back-End Technologies</h3>
        <ul>
          <li>Node JS</li>
          <li>MySQL</li>
          <li>Express</li>
          <li>Sequalize</li>
          <li>Progressive Web Applications</li>
          <li>React</li>
          <li>MERN</li>
          <li>Object-Oriented Programming</li>
          <li>Object-Relational Mapping</li>
          <li>Model View Controller (MVC)</li>
        </ul>
      </div>
    </div>
  );
}

