import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "SongSwipe",
      description: "Front-end web application to help make playlist creation easier and fun",
      demoLink: "https://songswipe.vercel.app/",
      githubLink: "https://github.com/michael-j-co/SongSwipe",
      imageUrl: require("../assets/songswipe-screenshot.png")
    },
    {
      title: "Synoodle",
      description: "Full-stack web-based word game inspired by NYT's Wordle and Spelling Bee.",
      demoLink: "https://synoodle.vercel.app/",
      githubLink: "https://github.com/michael-j-co/Synoodle",
      imageUrl: require("../assets/synoodle-screenshot.png")
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p>Here are some recent applications I've been working on:</p>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={`${project.title} Screenshot`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
