import React from 'react';
import { connect } from 'react-redux';

const ProductItem = props => {
  //console.log(props.product);
  return (
    <div style={{ marginTop: '50px' }}>
      <div className="container row" style={{ margin: '0 auto' }}>
        <div className="col-md-6">
          <div>
            <img
              width="100%"
              height="auto"
              style={{ borderRadius: '2px' }}
              src={require(`../../assets/products/${props.product.img}`)}
              alt={props.product.title}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div
            style={{
              borderBottom: '1px solid rgba(0,0,0,.2)',
              paddingBottom: '30px',
              marginBottom: '30px'
            }}
          >
            <p style={{ fontWeight: 'bold', fontSize: '30px' }}>
              {props.product.title}
            </p>
            <p style={{ fontSize: '18px' }}>Price: ${props.product.price}</p>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Add to cart
            </button>
          </div>
          <div>
            Shipping & returns Ready to ship in 1–2 weeks From Switzerland Free
            shipping to Taiwan Shipping upgrades available in the cart No
            returns or exchanges But please contact me if you have any problems
            with your order.
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProperty) => {
  return { product: state.products[ownProperty.match.params.productId] };
};

export default connect(mapStateToProps)(ProductItem);
