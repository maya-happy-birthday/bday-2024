// src/SliderComponent.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';

const photos = [
  { id: 1, url: img9, text: 'Если я бы сказала, что ты красава-тебе бы не было куда расти, поэтому я никогда так не скажу, а просто все решу' },
  { id: 2, url: img2, text: 'Оставайся такой же солнечной как Май))' },
  { id: 3, url: img3, text: 'Майя, желаю тебе оставаться жизнерадостной во всех жизненных условиях, радоваться новому опыту и расти все выше и выше как личность' },
  { id: 4, url: img4, text: 'светись как солнце' },
  { id: 5, url: img6, text: 'светись как солнце' },
  { id: 6, url: img7, text: 'светись как солнце' },
  { id: 7, url: img5, text: 'светись как солнце' },
  { id: 8, url: img8, text: 'светись как солнце' },
  { id: 9, url: img1, text: 'желаю счастья, здоровья, благополучия, любви, благополучия, здоровья, любви' },
  { id: 10, url: img10, text: 'С днем рождения Майя! ОБЕРНИСЬ😁' },
  { id: 11, url: img11, text: 'Майя, желаю тебе никогда не переставать улыбаться!' },
];

const additionalPhotos = [img9, img10, img11, img2, img3];

const SliderComponent = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prevFlipped) => ({ ...prevFlipped, [id]: !prevFlipped[id] }));
  };

  const resetFlipped = () => {
    setFlipped({});
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: resetFlipped,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="slide" onClick={() => handleFlip(photo.id)}>
            <FlipCard photo={photo} flipped={flipped[photo.id]} />
          </div>
        ))}
      </Slider>
      <div className="additional-photos">
        {additionalPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ photo, flipped }) => {
  const { transform } = useSpring({
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const { opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    config: { duration: 300 }
  });

  return (
    <div className="flip-card">
      <animated.div className="flip-card-front" style={{ transform, backgroundImage: `url(${photo.url})` }}>
        <img src={photo.url} alt={`${photo.id}`} />
      </animated.div>
      <animated.div className="flip-card-back" style={{ transform: transform.to(t => `${t} rotateY(180deg)`), opacity }}>
        <div className="flip-card-text">
          {photo.text}
        </div>
      </animated.div>
    </div>
  );
};

export default SliderComponent;
