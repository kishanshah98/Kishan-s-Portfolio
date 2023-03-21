import React, { useState } from 'react';
import Project from './Projects';
import image1 from './images/project1.png'
import image2 from './images/project2.png'
import image3 from './images/project3.png'
import image4 from './images/workday.png'
import image5 from './images/code-quiz.png'
import image6 from './images/weatherdashboard.png'

export default function Portfolio() {
  const [projects] = useState([
    {
      title: 'Travel Guide',
      deployed: 'https://kishanshah98.github.io/Travel-Guide/',
      repo: 'https://github.com/kishanshah98/Travel-Guide',
      image: image1
    },
    {
      title: 'Chirp',
      deployed: 'https://chirp-oneandonly.herokuapp.com/',
      repo: 'https://github.com/micbrwn/Chirp',
      image: image2
    },
    {
      title: 'Marvel Shop',
      deployed: 'https://excelsior-emporium-jcd.herokuapp.com/',
      repo: 'https://github.com/jcdoran33/Excelsior-Emporium',
      image: image3
    },
    {
      title: 'Work Day Scheduler',
      deployed: 'https://kishanshah98.github.io/Work-Day-Scheduler/',
      repo: 'https://github.com/kishanshah98/Work-Day-Scheduler',
      image: image4
    },
    {
      title: 'Code Quiz',
      deployed: 'https://kishanshah98.github.io/Code-Quiz/',
      repo: 'https://github.com/kishanshah98/Code-Quiz',
      image: image5
    },
    {
      title: 'Weather Dashboard',
      deployed: 'https://kishanshah98.github.io/Weather-Dashboard/',
      repo: 'https://github.com/kishanshah98/Weather-Dashboard',
      image: image6
    }
  ])
  
  return (
    <div>
      <h2 className='center'>Portfolio</h2>
      <div className='project-container'>
        {projects.map((project) => (
          <Project project = {project} />
        ))}
      </div>
    </div>
  );
}
