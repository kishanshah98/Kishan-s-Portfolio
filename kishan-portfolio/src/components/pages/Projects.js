import React from 'react';

export default function Project({ project }) {
    const { title, deployed, repo, image } = project
    return (
        <div className='project-images' style={{ width: '18rem', backgroundImage: `url( ${image})` }}>
            <div className='project-info'>
                <h5>{title}</h5>
                <p><a href={deployed} target="_blank" rel="noreferrer">Deploy Link</a></p>
                <p><a href={repo} target="_blank" rel="noreferrer">Github Repo Link</a></p>
            </div>
        </div>
    )
}