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
import img12 from './img/img12.jpg';

import img_add0 from './img/0.jpg';
import img_add1 from './img/1.jpg';
import img_add2 from './img/2.jpg';
import img_add3 from './img/3.jpg';
import img_add4 from './img/4.jpg';
import img_add5 from './img/5.jpg';
import img_add6 from './img/6.jpg';
import img_add7 from './img/7.jpg';
import img_add8 from './img/8.jpg';
import img_add9 from './img/9.jpg';
import img_add10 from './img/10.jpg';
import img_add12 from './img/12.jpg';
import img_add13 from './img/13.jpg';
import img_add14 from './img/14.jpg';
import img_add15 from './img/15.jpg';
import img_add16 from './img/16.jpg';
import img_add17 from './img/17.jpg';
import img_add18 from './img/18.jpg';
import img_add19 from './img/19.jpg';
import img_add20 from './img/20.jpg';
import img_add21 from './img/21.jpg';


const photos = [
  { id: 1, url: img9, text: 'Если я бы сказала, что ты красава-тебе бы не было куда расти, поэтому я никогда так не скажу, а просто все решу' },
  { id: 2, url: img2, text: 'Оставайся такой же солнечной как Май))' },
  { id: 3, url: img3, text: 'Майя, желаю тебе оставаться жизнерадостной во всех жизненных условиях, радоваться новому опыту и расти все выше и выше как личность' },
  { id: 4, url: img4, text: 'светись как солнце' },
  { id: 5, url: img6, text: 'светись как солнце' },
  { id: 6, url: img7, text: 'Желаю не соскуфиться' },
  { id: 7, url: img5, text: 'Обычным людям солнце пусть светит одинаково, а Майе Матуть ярче всех' },
  { id: 8, url: img8, text: 'светись как солнце' },
  { id: 9, url: img1, text: 'желаю счастья, здоровья, благополучия, любви, благополучия, здоровья, любви' },
  { id: 10, url: img10, text: 'С днем рождения Майя! ОБЕРНИСЬ😁' },
  { id: 11, url: img11, text: 'Майя, желаю тебе никогда не переставать улыбаться!' },
  { id: 12, url: img12, text: 'Aboba' },
];

const additionalPhotos = [img_add0, img_add1, img_add2, img_add3, img_add4,
  img_add5, img_add6, img_add7, img_add8, img_add9, img_add10, img_add12,
  img_add13, img_add14, img_add15, img_add16, img_add17, img_add18, img_add19, img_add20, img_add21];

const SliderComponent = () => {
  const [flipped, setFlipped] = useState({});
  const [fingerVisible, setFingerVisible] = useState(true);

  const handleFlip = (id) => {
    setFlipped((prevFlipped) => ({ ...prevFlipped, [id]: !prevFlipped[id] }));
    setFingerVisible(false); // Hide the finger animation when a photo is clicked
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
      {fingerVisible && <div className="finger-animation" />}
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
