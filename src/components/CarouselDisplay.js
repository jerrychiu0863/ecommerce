import React, { Component } from 'react';
import Slider from 'react-slick';
import carousel_one from '../assets/carousel/carousel_one_medium_720x480.jpg';
import carousel_two from '../assets/carousel/carousel_two_medium_720x480.jpg';
import carousel_three from '../assets/carousel/carousel_three_medium_720x480.jpg';
import carousel_four from '../assets/carousel/carousel_four_medium_720x480.jpg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../css/Carousel.css';

class CarouselDisplay extends Component {
  state = { width: window.innerWidth };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth });
      this.getMarign();
    });
  }

  componentWillUnmount() {}

  getMarign = () => {
    const el = document.querySelector('.Carousel').style.maxWidth;
    console.log(el);
  };

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
          margin: '20px auto 20px auto',
          //background: '#f7f7f7'
        }}
        className="Carousel"
      >
        <Slider {...settings}>
          <div style={{ background: '#f7f7f7' }}>
            <div>
              <img
                className="Carousel--img"
                src={carousel_one}
                width="100%"
                height="auto"
                //srcSet={`${large} 1200w, ${medium} 800w, ${small} 400w`}
                alt="carousel"
              />
            </div>
          </div>
          <div style={{ background: '#f7f7f7' }}>
            <div>
              <img
                className="Carousel--img"
                src={carousel_two}
                width="100%"
                height="auto"
                //srcSet={`${large} 1200w, ${medium} 800w, ${small} 400w`}
                alt="carousel"
              />
            </div>
          </div>
          <div style={{ background: '#f7f7f7' }}>
            <div>
              <img
                className="Carousel--img"
                src={carousel_three}
                width="100%"
                height="auto"
                //srcSet={`${large} 1200w, ${medium} 800w, ${small} 400w`}
                alt="carousel"
              />
            </div>
          </div>
          <div style={{ background: '#f7f7f7' }}>
            <div>
              <img
                className="Carousel--img"
                src={carousel_four}
                width="100%"
                height="auto"
                //srcSet={`${large} 1200w, ${medium} 800w, ${small} 400w`}
                alt="carousel"
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CarouselDisplay;
