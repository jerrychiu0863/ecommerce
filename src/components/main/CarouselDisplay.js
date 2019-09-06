import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../css/main/Carousel.css';

const carousels = ['one', 'two', 'three', 'four'];

class CarouselDisplay extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 3,
      speed: 500,
      dots: true,
      arrows: false,
      autoplay: false
    };
    return (
      <div
        style={{
          width: '100%',
          //marginLeft: '-138px',
          margin: '0px auto 20px auto',
          paddingTop: '50px'
          //background: '#f7f7f7'
        }}
        className="Carousel"
      >
        <Slider {...settings}>
          {carousels.map(carousel => (
            <div>
              <img
                className="Carousel--img"
                src={require(`../../assets/carousel/carousel_${carousel}_medium_720x480.jpg`)}
                width="100%"
                height="auto"
                alt="carousel"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselDisplay;
