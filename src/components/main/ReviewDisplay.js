import React from 'react';
import '../../css/PopularDisplay.css';

const ReviewDisplay = () => {
  return (
    <React.Fragment>
      <div className="PopularDisplay container">
        <p
          style={{ paddingLeft: '5px', fontSize: '22px', marginBottom: '10px' }}
        >
          Reviews from buyers
        </p>
      </div>
      <div
        className="container row"
        style={{ margin: '0 auto', textAlign: 'center' }}
      >
        <div className="col-12 col-md-4" style={{ marginBottom: '20px' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              background: '#999',
              margin: '0 auto 10px auto'
            }}
          >
            <img
              src={require('../../assets/products/ring/couple-rings_720x480.jpg')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%'
              }}
            />
          </div>
          <p style={{ marginBottom: '10px' }}>
            <b>Abrayard</b> wrote on August 26
          </p>
          <p style={{ maxWidth: '250px', margin: '0 auto', fontSize: '14px' }}>
            Love it! Gorgerous little piece for my nightstand!
          </p>
        </div>
        <div className="col-12 col-md-4">
          {' '}
          <div
            style={{
              width: '50px',
              height: '50px',
              background: '#999',
              margin: '0 auto'
            }}
          >
            <img
              src={require('../../assets/products/ring/couple-rings_720x480.jpg')}
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          </div>
          <p style={{ marginBottom: '10px' }}>
            <b>Abrayard</b> wrote on August 26
          </p>
          <p style={{ maxWidth: '250px', margin: '0 auto', fontSize: '14px' }}>
            Love it! Gorgerous little piece for my nightstand!
          </p>{' '}
        </div>
        <div className="col-12 col-md-4"> 3</div>
      </div>
    </React.Fragment>
  );
};

export default ReviewDisplay;
