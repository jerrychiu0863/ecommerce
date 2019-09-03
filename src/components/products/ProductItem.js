import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

import Modal from '../Modal';

class ProductItem extends Component {
  renderBtn() {
    if (!this.props.isSignedIn) {
      return (
        <button
          onClick={() => alert('Please login in!!')}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          Add to cart
        </button>
      );
    } else {
      return (
        <button
          onClick={() =>
            this.props.addToCart(
              this.props.match.params.productId,
              this.props.product
            )
          }
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          Add to cart
        </button>
      );
    }
  }

  formatPrice = num => {
    const formatedStr = num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `NTD $${formatedStr}`;
  };

  render() {
    //console.log(this);
    return (
      <div style={{ marginTop: '50px' }}>
        <div className="container row" style={{ margin: '0 auto' }}>
          <div className="col-md-6" style={{ marginBottom: '10px' }}>
            <img
              width="100%"
              height="auto"
              style={{ borderRadius: '2px' }}
              src={require(`../../assets/products/${this.props.product.img}`)}
              alt={this.props.product.title}
            />
          </div>
          <div className="col-md-6">
            <div
              style={{
                borderBottom: '1px solid rgba(0,0,0,.2)',
                paddingBottom: '30px',
                marginBottom: '0px',
                transform: 'translateY(-10px)'
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: '30px' }}>
                {this.props.product.title}
              </p>
              <p style={{ fontSize: '18px' }}>
                {this.formatPrice(this.props.product.price)}
              </p>
              {this.renderBtn()}
            </div>
            <div>
              <p style={{ fontSize: '15px', maxWidth: '450px' }}>
                <b>Shipping & Policies</b>
                <br />
                Shipping & returns Ready to ship in 1–2 weeks From Switzerland
                Free shipping to Taiwan Shipping upgrades available in the cart
                No returns or exchanges But please contact me if you have any
                problems with your order.
              </p>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  return {
    product: state.products[ownProperty.match.params.productId],
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductItem);
