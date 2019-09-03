import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  renderContent() {
    if (!this.props.auth) {
      return <div>Please Sign in!!</div>;
    } else if (this.props.products.length === 0) {
      return <div>You haven't added any item to your cart!</div>;
    }
    return (
      <div>
        {this.props.products.map(product => (
          <div>{product.title}</div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div
        className="container"
        style={{ margin: '0 auto', minHeight: '78vh' }}
      >
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.shoppingcart),
    auth: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(ShoppingCart);
