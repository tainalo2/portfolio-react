import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfiniteCarousel = ({images}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Vitesse de défilement
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Réduit l'intervalle à 0 pour un défilement continu
    cssEase: 'linear', // Animation linéaire pour un défilement fluide
    pauseOnHover: false, // Ne pas interrompre le défilement au survol
  };

  if (!Array.isArray(images)) {
    return <div>Invalid images prop. Please provide an array of images.</div>;
  }

  return (
    <div className='w-full py-4'
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="pl-2 pr-2" key={index}>
            <img className='max-h-[30px]' src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;