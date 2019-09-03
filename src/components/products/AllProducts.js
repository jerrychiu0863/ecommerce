import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../commons/ProductCard';

const AllProducts = props => {
  //console.log(props.products);
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
        <div className="col-md-3">left</div>
        <div className="col-md-9">
          <div className="row">
            {props.products.map(product => (
              <ProductCard
                key={product.id}
                gridClass="col-6 col-sm-4"
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { products: Object.values(state.products) };
};

export default connect(mapStateToProps)(AllProducts);
