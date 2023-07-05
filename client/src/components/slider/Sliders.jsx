import React from "react";
import sliderData from "./slider-data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <section className="homeSlide ">
        <div className="container">
          <Slider {...settings}>
            {sliderData.map((value, index) => {
              return (
                <div key={index}>
                  <div className="d_flex ">
                    <div className="left">
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className="--btn --btn-danger ">
                        Visit Collections
                      </button>
                    </div>
                    <div className="right">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sliders;
