import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from './../';

import './Featured.scss';

import warrior_1 from './../../Assets/media/warrior-1.png';

function Featured(props) {

  const slickSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToScroll: 1,
  };


  return (
    <div id="featured">
      <p className="comp-title">Recommended & Featured</p>


      <div className="featured-content">

        <Slider {...slickSettings}>

          <div className="featured-slide" id="hala123">

            <img src="" alt="" className="slide-logo" />

            <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maiores qui veritatis culpa nesciunt, assumenda a nobis. Reprehenderit est nulla.</p>

            <div className="data">
              <p className="rate"><span>4.5</span><i className="fas fa-star"></i></p>
              <p className="price">$14 USD</p>
            </div>

            <Button text="Play Now" />
            <i className="fab fa-windows"></i>

            <img src={warrior_1} alt="" />
          </div>

          <div className="featured-slide" id="hala123">

            <img src="" alt="" className="slide-logo" />

            <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maiores qui veritatis culpa nesciunt, assumenda a nobis. Reprehenderit est nulla.</p>

            <div className="data">
              <p className="rate"><span>4.5</span><i className="fas fa-star"></i></p>
              <p className="price">$14 USD</p>
            </div>

            <Button text="Play Now" />
            <i className="fab fa-windows"></i>

            <img src={warrior_1} alt="" />
          </div>

        </Slider>

      </div>

    </div>
  )
}

export default Featured;