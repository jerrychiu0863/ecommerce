import React from 'react';
import { features } from '../../config/features';

const FeatureDisplay = () => {
  return (
    <section
      style={{
        background: '#f9f9f9',
        textAlign: 'center',
        padding: '40px 0',
        marginTop: '100px'
      }}
    >
      <section className="row container" style={{ margin: '0 auto' }}>
        {features.map(feature => (
          <div className="col-12 col-sm-6 col-md-4" key={feature.title}>
            <h5>{feature.title}</h5>
            <p style={{ fontSize: '14px' }}>{feature.content}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FeatureDisplay;
