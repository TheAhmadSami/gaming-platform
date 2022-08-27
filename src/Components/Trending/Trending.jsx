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

        <div className="left-section">
          <div className="img-container" style={{ backgroundImage: `url(${image})` }}>

          </div>
        </div>

        <div className="right-section">
          <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maiores qui veritatis culpa nesciunt, assumenda a nobis. Reprehenderit est nulla.</p>

          <div className="data">
            <p className="rate"><span>4.5</span><i className="fas fa-star"></i></p>
            <p className="price">$14 USD</p>
          </div>

          <i className="fab fa-windows"></i>
        </div>


      </div >

    </div >
  )
}

export default Trending;