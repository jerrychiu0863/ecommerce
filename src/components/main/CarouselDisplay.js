import React, { Component } from 'react';
import '../../css/main/Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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
      autoplay: true
    };
    return (
      <div className="Carousel">
        <Slider {...settings}>
          {carousels.map(carousel => (
            <div key={carousel}>
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
