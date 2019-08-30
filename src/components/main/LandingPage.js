import React from 'react';

import CarouselDisplay from './CarouselDisplay';
import FeatureDisplay from './FeatureDisplay';
import PopularDisplay from './PopularDisplay';
import ReviewDisplay from './ReviewDisplay';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <CarouselDisplay />
      <FeatureDisplay />
      <PopularDisplay />
      <ReviewDisplay />
      <Footer />
    </div>
  );
};

export default LandingPage;
