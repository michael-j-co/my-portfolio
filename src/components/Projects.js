import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "SongSwipe",
    description: "A Tinder-like app for discovering songs. Users can swipe right to like a song and add it to their Spotify playlist. Built with React and Spotify API.",
    image: "songswipe-screenshot.png",  // Screenshot of SongSwipe
    link: "https://github.com/michael-j-co/SongSwipe",  // Link to the GitHub repo
  },
  {
    title: "Synoodle",
    description: "Fun 'nyt-style' word game in which users are challenged to think of as many synonyms of a word that they can.",
    image: "synoodle-screenshot.png",  // Screenshot of Synoodle
    link: "https://github.com/michael-j-co/Synoodle",
  }
];

const Projects = () => {
  return (
    <section id="work" className="work-section">
      <h2>My Recent Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={require(`../assets/${project.image}`)}
              alt={`${project.title} Screenshot`}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
