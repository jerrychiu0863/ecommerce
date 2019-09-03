import React, { Component } from 'react';
import '../../css/Products.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSelectChange } from '../../actions';

import ProductCard from '../commons/ProductCard';

class Products extends Component {
  getSortedProducts() {
    if (this.props.sortBy === 'lowest') {
      return this.props.products.sort((a, b) => a.price - b.price);
    } else if (this.props.sortBy === 'highest') {
      return this.props.products.sort((a, b) => b.price - a.price);
    } else if (this.props.sortBy === 'name') {
      return this.props.products.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          // names must be equal
          return 0;
        }
      });
    } else {
      return this.props.products;
    }
  }

  render() {
    //console.log(typeof this.state.select);
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
          <div className="col-md-3">
            <Link to="/products/all" style={{ color: '#333' }}>
              <b>All categories</b>
            </Link>
            <span> > {this.props.match.params.category}</span>
          </div>
          <div className="col-md-9">
            <div className="ProductsHeader__container">
              <span className="ProductsHeader-title">
                {this.props.match.params.category}
              </span>
              <div>
                <label className="ProductsHeader-label">Sort by</label>
                <select
                  className="ProductsHeader-select"
                  onChange={e => this.props.onSelectChange(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="highest">Highest Price</option>
                  <option value="lowest">Lowest Price</option>
                </select>
              </div>
            </div>
            <div className="row">
              {this.getSortedProducts().map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  gridClass="col-6 col-sm-4"
                  img={product.img}
                  title={product.title}
                  seller={product.seller}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  return {
    products: Object.values(state.products).filter(
      product => product.category === ownProperty.match.params.category
    ),
    sortBy: state.sortBy
  };
};

export default connect(
  mapStateToProps,
  { onSelectChange }
)(Products);
