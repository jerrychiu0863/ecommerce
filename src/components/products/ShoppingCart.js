import React, { Component } from 'react';
import '../../css/products/ShoppingCart.css';
import { connect } from 'react-redux';
import {
  removeItemFromCart,
  addOneQuantity,
  removeOneQuantity
} from '../../actions';

class ShoppingCart extends Component {
  renderTotalPrice() {
    if (this.props.products.length === 0) {
      return null;
    } else {
      const totalPrice = this.props.products
        .map(product => product.price * product.quantity) //Caculate total price of each item
        .reduce((totalPrice, productPrice) => totalPrice + productPrice); //Caculate total price of all items
      return this.formatPrice(totalPrice);
    }
  }

  formatPrice(num) {
    const formatedPrice = num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `NT$ ${formatedPrice}`;
  }

  renderContent() {
    if (!this.props.auth) {
      return (
        <div className="ShoppingCart" style={{ minHeight: '65vh' }}>
          <div className="container">
            Please sign in to add item to your shopping cart!!
          </div>
        </div>
      );
    } else if (this.props.products.length === 0) {
      return (
        <div className="ShoppingCart" style={{ minHeight: '65vh' }}>
          <div className="container">
            You haven't added any item to your cart!
          </div>
        </div>
      );
    }
    return (
      <div className="ShoppingCart">
        <div className="ShoppingCart__container row pt-3 pb-3">
          <div className="ShoppingCart__left col-md-9">
            {this.props.products.map(product => (
              <div className="Item__container mb-2 pb-2" key={product.id}>
                <div className="Item--img">
                  <img
                    width="100%"
                    height="auto"
                    src={require(`../../assets/products/${product.img}`)}
                    alt={product.title}
                  />
                </div>
                <p className="Item--title mr-2 ml-2">{product.title}</p>
                <div className="Item__quantity ml-4 mr-auto">
                  <p>
                    <i
                      className="Item__quantity--arrow fas fa-caret-left"
                      onClick={() => this.props.removeOneQuantity(product.id)}
                    ></i>
                    <span className="Item__quantity--quantity mr-2 ml-2">
                      {product.quantity}
                    </span>
                    <i
                      className="Item__quantity--arrow fas fa-caret-right"
                      onClick={() => this.props.addOneQuantity(product.id)}
                    ></i>
                  </p>
                </div>
                <p className="Item--price">
                  {this.formatPrice(product.price)}
                  <i
                    onClick={() => this.props.removeItemFromCart(product.id)}
                    className="Item--remove ml-2 fas fa-times"
                  ></i>
                </p>
              </div>
            ))}
          </div>
          <div className="col-md-3">
            <p className="ShoppinCart--price">
              <span>Total:</span>
              <span>{this.renderTotalPrice()}</span>
            </p>
            <button className="ShoppinCart--btn btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.shoppingcart),
    auth: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { addOneQuantity, removeOneQuantity, removeItemFromCart }
)(ShoppingCart);
