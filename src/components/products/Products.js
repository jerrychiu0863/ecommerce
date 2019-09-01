import React from 'react';
import { connect } from 'react-redux';

const Products = props => {
  console.log(props.products);
  return (
    <div
      style={{
        width: '100%',
        margin: '0px auto 20px auto',
        paddingTop: '50px',
        boxShadow: 'inset 0px 4px 8px -3px rgba(17, 17, 17, .06)'
      }}
    >
      <div className="container row" style={{ margin: '0 auto' }}>
        <div className="col-md-3" style={{ background: '#f7f7f7' }}>
          left
        </div>
        <div className="col-md-9" style={{ background: 'lightgrey' }}>
          <div>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'capitalize'
              }}
            >
              {props.match.params.category}
            </p>
          </div>
          <div className="row">
            <div className="Card col-6 col-sm-4 col-md-4">
              <div className="Card__container">
                <img
                  src={require(`../../assets/products/ring/couple-rings_720x480.jpg`)}
                  className="Card-img"
                  alt="popular product"
                />
                <div className="Card__caption">
                  <p className="Card__caption--title">product.title</p>
                  <p className="Card__caption--seller">product.seller</p>
                  <p className="Card__caption--price">price</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">2</div>
            <div className="col-md-4">3</div>
            <div className="col-md-4">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProperty) => {
  return {
    products: Object.values(state.products).filter(
      product => product.category === ownProperty.match.params.category
    )
  };
};

export default connect(mapStateToProps)(Products);
