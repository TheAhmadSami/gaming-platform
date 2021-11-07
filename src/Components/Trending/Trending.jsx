import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Trending.scss';

import image from './../../Assets/media/login-bg.jpg'

function Trending(props) {

  const slickSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToScroll: 1,
  };


  return (
    <div id="trending">
      <p className="comp-title">Trending</p>


      <div className="trending-content">

        <Slider {...slickSettings}>

          <div className="hala">
            <img src={image} alt="" />
          </div>

          <div className="hala">
          <img src={image} alt="" />
          </div>

          <div className="hala">
          <img src={image} alt="" />
          </div>

        </Slider>

      </div>

    </div>
  )
}

export default Trending;