
import './App.css';
import { FaAdn } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function App() {
  // intranal css

  // const style ={
  //   color:'red',
  //   textAlign:'center'
  // }
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,

      }
    },
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <div >

      <h1 className='h1'>Hello <FaAdn style={{ color: 'blue' }} /> <FcAbout className='' /></h1>

      <div>

        <OwlCarousel className='owl-theme' {...options} >
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div><div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div class='item'>
            <img src={require('./images/photo-1.webp')}></img>
          </div>



        </OwlCarousel>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>  <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>
          <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>  <div>
            <img src={require('./images/photo-1.webp')}></img>
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default App;
