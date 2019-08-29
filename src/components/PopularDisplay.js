import React from 'react';
import pic from '../assets/carousel/carousel_one_medium_720x480.jpg';
import '../css/PopularDisplay.css';

const PopularDisplay = () => {
  return (
    <div
      className="container row"
      style={{
        margin: '40px auto 40px auto',
        background: '#999',
        height: 'auto'
      }}
    >
      <div
        className="col-6 col-sm-4 col-md-2"
        style={{ background: '#fff', padding: '0' }}
      >
        <div style={{ padding: '0 5px' }}>
          <img
            src={pic}
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '5px',
              borderRadius: '2px'
            }}
            alt="p"
          />
          <div>
            <p
              className="title"
              style={{
                margin: '0',
                fontWeight: 'bold',
                letterSpacing: '.2px',
                lineHeight: '1.2',
                height: '40px'
              }}
            >
              Normail sentenct i was ther for you butwhere are you
            </p>

            <p style={{ margin: '3px  0', color: '#666', fontSize: '14px' }}>
              Jerry Chiu
            </p>
            <p style={{ margin: '0', fontSize: '15px' }}>NTD $14,000</p>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-sm-4 col-md-2"
        style={{ background: '#fff', padding: '0' }}
      >
        <div style={{ padding: '0 5px' }}>
          <img
            src={pic}
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '5px',
              borderRadius: '2px'
            }}
            alt="p"
          />
          <div>
            <p
              className="title"
              style={{
                margin: '0',
                fontWeight: 'bold',
                letterSpacing: '.2px',
                lineHeight: '1.2',
                height: '40px'
              }}
            >
              Normail sentenct i was ther for you butwhere are you
            </p>

            <p style={{ margin: '3px  0', color: '#666', fontSize: '14px' }}>
              Jerry Chiu
            </p>
            <p style={{ margin: '0', fontSize: '15px' }}>NTD $14,000</p>
          </div>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">1</div>
      <div className="col-6 col-sm-4 col-md-2">1</div>
      <div className="col-6 col-sm-4 col-md-2">1</div>
      <div className="col-6 col-sm-4 col-md-2">1</div>
    </div>
  );
};

export default PopularDisplay;
