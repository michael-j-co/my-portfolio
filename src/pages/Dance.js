import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Dance.css';
const videoLinks = [
  { id: '0B0mshIfHI4', title: 'Ultimate Brawl | Spring 2024' },
  { id: 'P0qRZcFeWNM', title: 'Maxt Out | Fall 2023' },
  { id: 'P3xaOdnp1A8', title: 'Prelude Norcal | Fall 2022' },
  { id: 'PR2s4KF_IfE', title: 'Teaching My First Workshop! | Winter 2023' },
  { id: 'dBL_QFCMUUk', title: 'Risk | Winter 2023' },
  { id: 'LzOjJJEz71A', title: 'Ultimate Brawl | Spring 2023' },
  { id: '0miYY6U-Y1A', title: 'Battle Royale | Spring 2024' },
  
];

Modal.setAppElement('#root'); // For accessibility

const Dance = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="dance" id="dance">
      <h2>Dance</h2>
      <p>Some dance sets and video shoots I've been a part of:</p>
      <div className="video-grid">
        {videoLinks.map((video) => (
          <div
            key={video.id}
            className="video-thumbnail"
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
            onClick={() => openModal(video)}
          >
            {hoveredVideo === video.id ? (
              <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
                className="thumbnail-image"
              />
            )}
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
      {currentVideo && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Video Modal">
          <iframe
            width="600"
            height="340"
            src={`https://www.youtube.com/embed/${currentVideo.id}`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={closeModal} className="close-modal-button">Close</button>
        </Modal>
      )}
    </section>
  );
};

export default Dance;
