import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'
export default function Banner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      };
    
      return (
        <div id='bann'>
          <Slider {...settings}>
            <div className='banner'>
            </div>
            <div className='banner'>
            </div>
            <div className='banner'>
            </div>
            <div className='banner'>
            </div>
          </Slider>
        </div>
      );
}