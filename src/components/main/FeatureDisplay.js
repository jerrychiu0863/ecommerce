import React from 'react';
import '../../css/main/Feature.css';
import { features } from '../../config/features';

const FeatureDisplay = () => {
  return (
    <div className="Feature">
      <div className="row container" style={{ margin: '0 auto' }}>
        {features.map(feature => (
          <div className="col-12 col-sm-6 col-md-4" key={feature.title}>
            <h5 className="Feature--title">{feature.title}</h5>
            <p className="Feature--content">{feature.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDisplay;
