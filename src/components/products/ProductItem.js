import React, { Component } from 'react';
import '../../css/products/ProductItem.css';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions';

//Components
import Modal from '../Modal';

class ProductItem extends Component {
  state = {
    quantity: 1,
    isModalOpen: false
  };

  renderBtn() {
    if (!this.props.isSignedIn) {
      return (
        <button onClick={this.toggleModal} className="Cart-btn btn mt-2">
          Add to cart
        </button>
      );
    } else {
      return (
        <button
          onClick={() =>
            this.props.addItemToCart(
              this.props.match.params.productId,
              this.props.product,
              this.state.quantity
            )
          }
          className="Cart-btn btn mt-2"
        >
          Add to cart
        </button>
      );
    }
  }

  onSelectChange(value) {
    this.setState({ quantity: parseInt(value, 10) });
  }

  formatPrice = num => {
    const formatedStr = num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `NT$ ${formatedStr}`;
  };

  renderOptions() {
    return [...Array(10)].map((e, i) => (
      <option value={i + 1} key={i}>
        {i + 1}
      </option>
    ));
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div className="ProductItem">
        <div className="container row" style={{ margin: '0 auto' }}>
          <div className="col-md-6 mb-2">
            <img
              width="100%"
              height="auto"
              style={{ borderRadius: '2px' }}
              src={require(`../../assets/products/${this.props.product.img}`)}
              alt={this.props.product.title}
            />
          </div>
          <div className="col-md-6">
            <div className="Info__container">
              <p className="Info__container--title">
                {this.props.product.title}
              </p>
              <p className="Info__container--price">
                {this.formatPrice(this.props.product.price)}
              </p>
              <div>
                <label className="mr-2">Quantity:</label>
                <select
                  defaultValue={this.state.quantity}
                  onChange={e => this.onSelectChange(e.target.value)}
                  style={{ fontSize: '14px' }}
                >
                  {this.renderOptions()}
                </select>
              </div>
              {this.renderBtn()}
            </div>
            <p className="Info--policy">
              <b>Shipping &amp; Policies</b>
              <br />
              Shipping &amp; returns Ready to ship in 1–2 weeks From Switzerland
              Free shipping to Taiwan Shipping upgrades available in the cart No
              returns or exchanges But please contact me if you have any
              problems with your order.
            </p>
          </div>
        </div>
        {this.state.isModalOpen && <Modal closeModal={this.toggleModal} />}
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
  { addItemToCart }
)(ProductItem);
