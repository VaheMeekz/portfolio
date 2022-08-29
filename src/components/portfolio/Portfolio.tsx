import React from "react";
import "./Portfolio.css";
import Slider from "react-slick";
const Portfolio = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    width:"100%",
    arrows:false
  };
  return (
    <div className="portBox">
      <div className="titleBox">
        <h1>Portfolio</h1>
      </div>
      <div>
        <Slider {...settings}>
          <div className="item">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
