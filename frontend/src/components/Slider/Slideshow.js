import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideshow-container animated wow fadeInUp" data-wow-delay="0.1s">
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide._id} className="slide active">
            <div className="image-part">
              <img src={"https://th.bing.com/th?id=OIP.4w37ZtO22Pp0W8KL98OB2wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} alt="mindmeld" />
            </div>
            <div className="title-part">{slide.title.substring(0, 200)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;