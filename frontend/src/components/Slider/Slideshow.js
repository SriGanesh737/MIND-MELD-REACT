import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const [sliderData, setSliderData] = useState([]);
  const [highLightArticles, setHighlightArticles] = useState([]);
  const [page, setPage] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const url = `http://localhost:8000/articles/topic/someTopic/page/${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
        setHighlightArticles(highLightsArticles(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const highLightsArticles = (articles) => {
    articles.sort((a, b) => b.likes - a.likes);
    return articles.slice(0, 5);
  };

  return (
    <div className="slideshow-container animated wow fadeInUp" data-wow-delay="0.1s">
      <Slider {...settings}>
        {highLightArticles.map((slide) => (
          <div key={slide._id} className="slide active">
            <div className="image-part">
              <img src={slide.image_link} alt="mindmeld" />
            </div>
            <div className="title-part">{slide.title.substring(0, 200)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
