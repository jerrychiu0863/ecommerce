import React, { Component } from 'react';
import '../../css/products/Products.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSortingChange } from '../../actions';

//Components
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

  renderSubNavbar() {
    if (this.props.match.params.category === 'all') {
      return <b>All categories</b>;
    } else {
      return (
        <React.Fragment>
          <Link to="/products/all" style={{ color: '#333' }}>
            <b>All categories &nbsp;</b>
          </Link>
          <span style={{ textTransform: 'capitalize' }}>
            &gt; {this.props.match.params.category}
          </span>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="Products">
        <div className="Products__container container row">
          <div className="col-12 col-md-3 mb-2">{this.renderSubNavbar()}</div>
          <div className="col-12 col-md-9">
            <div className="ProductsHeader__container mb-2">
              <span className="ProductsHeader-title">
                {this.props.match.params.category}
              </span>
              <div>
                <label className="ProductsHeader-label mr-1">Sort by</label>
                <select
                  className="ProductsHeader-select"
                  onChange={e => this.props.onSortingChange(e.target.value)}
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
    products:
      ownProperty.match.params.category !== 'all'
        ? Object.values(state.products).filter(
            product => product.category === ownProperty.match.params.category
          )
        : Object.values(state.products),
    sortBy: state.sortBy
  };
};

export default connect(
  mapStateToProps,
  { onSortingChange }
)(Products);
