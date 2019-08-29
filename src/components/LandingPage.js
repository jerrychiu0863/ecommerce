import React from 'react';

import CarouselDisplay from './CarouselDisplay';
import FeatureDisplay from './FeatureDisplay';
import PopularDisplay from './PopularDisplay';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <CarouselDisplay />
      <FeatureDisplay />
      <PopularDisplay />
      <Footer />
    </div>
  );
};

export default LandingPage;
