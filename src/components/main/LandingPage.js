import React from 'react';

//Components
import CarouselDisplay from './CarouselDisplay';
import FeatureDisplay from './FeatureDisplay';
import PopularDisplay from './PopularDisplay';
import ReviewDisplay from './ReviewDisplay';

const LandingPage = () => {
  return (
    <div>
      <CarouselDisplay />
      <FeatureDisplay />
      <PopularDisplay />
      <ReviewDisplay />
    </div>
  );
};

export default LandingPage;
