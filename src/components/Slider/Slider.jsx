import { useState } from "react";
import propTypes from "prop-types";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

const Slider = ({ picture }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(slideIndex);
  const nextSlide = () => {
    if (slideIndex !== picture.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === picture.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(picture.length);
    }
  };

  return (
    <div className="slider__container">
      {picture.map((picture, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide" : "slide__hidden"}
          >
            <img src={picture} id={`picture-${index}`} alt="" />
          </div>
        );
      })}

      <div className="slider__navigation">
        {picture.length > 1 && (
          <div className="slider__navigation__arrow">
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
          </div>
        )}
        <p>
          {slideIndex}/{picture.length}
        </p>
      </div>
    </div>
  );
};

export default Slider;

Slider.propType = {
  pictures: propTypes.object,
};
