// src/components/HeaderSlide.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './HeaderSlide.css';

const images = [
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098123/mariposa-monarca-lila_ybiyaw.jpg',
    alt: 'Purple flower with monarch butterfly'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098123/mariposa-kahukura_chi8kr.png',
    alt: 'Kahukura butterfly from New Zealand'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098122/mariposa-ulises_xkzkry.png',
    alt: 'Ulysses butterfly with blue wings'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098122/mariposas-monarca_s0e0vm.jpg',
    alt: 'Two monarch butterflies on flowers'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098123/mariposa-admiral-roja_db11d0.png',
    alt: 'Red Admiral butterfly on a leaf'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753187433/prueba.monarca-header_frjj6p.png',
    alt: 'Delia Negrina butterfly on yellow flower'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098123/mariposa-monarca_qmvsbh.jpg',
    alt: 'Classic monarch butterfly with wings open'
  },
  {
    url: 'https://res.cloudinary.com/duyzpare7/image/upload/v1753098124/mariposa-Regent-Skipper_ywxobl.jpg',
    alt: 'Regent Skipper butterfly resting'
  }
];

const HeaderSlide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      slidesPerView={1}
      className="header-slider"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img.url} alt={img.alt} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlide;
