import React from "react";
import "./Portfolio.css"
import Slider from "react-slick";
const Portfolio = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
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
        </Slider>
            </div>
        </div>
    )
}

export default Portfolio;