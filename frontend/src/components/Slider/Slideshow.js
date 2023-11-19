import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from './Slideshow.module.css' 

const Slideshow = ({ sliderData: highLightArticles }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={`${Styles["slideshow-container"]}`} data-wow-delay="0.1s">
      <Slider {...settings}>
        {highLightArticles.map((slide) => (
          <div key={slide._id} className={`${Styles.slide} active`}>
            <div className={Styles["image-part"]}>
              <img src={require(`../../assets${slide.image_link}`)} alt="mindmeld" />
            </div>
            <div className={Styles["title-part"]}>{slide.title.substring(0, 200)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
