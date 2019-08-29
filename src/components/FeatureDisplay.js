import React from 'react';

const FeatureDisplay = () => {
  return (
    <section
      style={{
        background: '#f9f9f9',
        textAlign: 'center',
        padding: '40px 0',
        marginTop: '60px'
      }}
    >
      <section className="row container" style={{ margin: '0 auto' }}>
        <div className="col-12 col-sm-6 col-md-4">
          <h5>Unique everything</h5>
          <p style={{ fontSize: '14px' }}>
            We have millions of one-of-a-kind so you can find whatever you need
            (or really, really want).
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h5>Independent sellers</h5>
          <p style={{ fontSize: '14px' }}>
            Buy directly from someone who put their heart and soul into making
            something special.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h5>Secure shopping</h5>
          <p style={{ fontSize: '14px' }}>
            We use best-in-class technology to protect your transactions.
          </p>
        </div>
      </section>
    </section>
  );
};

export default FeatureDisplay;
