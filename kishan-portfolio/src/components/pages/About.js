import React from 'react';
import './styles/Pages.css';
import portrait from './images/portrait.jpg';

export default function About() {
  return (
    <div>
      <h2 className='center'>About Me</h2>
      <div className="about-container">
        <img className='portrait' src={portrait} alt="Portrait" width="300" height="auto" />
        <p className="about-text">
          I am a recent Rutgers graduate who majored in Exercise Science with a minor in Psychology originally on a pre-medical track. Through time and discovering new passions of mine after having some time off after graduation, I became obsessed with software development and using my creativity to construct programs and web applications. Once I discovered my love for web development, I decided to pursue this as my new career path and decided to take a Rutgers Full-Stack Development Bootcamp to grasp a better understanding of the variety of different programming languages both in the front-end and back-end of software development. I could not be more excited to put my skills to the test, making contributions and a real impact for my future company to help them become an innovator in their space. I continue to learn more each and every day to better my knowledge in this growing field to positively impact my future company's success and the web development field as a whole.
          <br></br><br></br>
          <span className='indent'>A few hobbies that I enjoy are watching/playing sports, spending quality time with my friends and family, and going to the beach. Please reach out to me via email, linkedin, or github if you would like to discuss web development or have any questions!
          </span>
        </p>
      </div>
    </div>
  );
}
