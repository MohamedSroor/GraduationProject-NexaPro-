import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const SliderComponent = () => {
  return (
    <div className="my-slider">
      <Slider {...settings} sliderClassName="my-slider-track">
        <div className="card-task" alt="Slide 1">
          <div className="imgBx-task">
            <h4>#1</h4>
            <h1>Redesign ECommerce Website</h1>
          </div>
        </div>
        <div className="card-task" alt="Slide 2">
          <div className="imgBx-task">
            <h4>#2</h4>
            <h1>Build ECommerce Website</h1>
          </div>
        </div>
        <div className="card-task" alt="Slide 3">
          <div className="imgBx-task">
            <h4>#3</h4>
            <h1>Redesign ECommerce Website</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
