import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/Crochet.css';

const Crochet = () => {
  // Import all images dynamically from the folder
  const importAll = (requireContext) => requireContext.keys().map(requireContext);
  const images = importAll(require.context('../assets/crochet', false, /\.(png|jpe?g|svg)$/));

  return (
    <section className="crochet" id="crochet">
      <h2>Crochet Shelf</h2>
      <p>Some of my favorite plushies I've made:</p>
      <div className="crochet-gallery">
        <Swiper
          modules={[EffectCoverflow, Keyboard]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: 10,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="crochet-item">
              <img src={image} alt={`Crochet project ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="carousel-hint">Use arrow keys or drag to navigate through the carousel</p>
      </div>
    </section>
  );
};

export default Crochet;
