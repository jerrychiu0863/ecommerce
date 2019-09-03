import React from 'react';
import '../../css/PopularDisplay.css';
import { connect } from 'react-redux';
import ProductCard from '../commons/ProductCard';

const PopularDisplay = props => {
  return (
    <React.Fragment>
      <div className="PopularDisplay container">
        <p className="PopularDisplay-header">Popular Items</p>
      </div>
      <div className="CardDisplay container row">
        {props.products.map(product => (
          <ProductCard
            id={product.id}
            gridClass="col-6 col-sm-4 col-md-2"
            img={product.img}
            title={product.title}
            seller={product.seller}
            price={product.price}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: Object.values(state.products).filter(
      product => product.popular === true
    )
  };
};

export default connect(mapStateToProps)(PopularDisplay);
