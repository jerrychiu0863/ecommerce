import React from 'react';
import '../../css/PopularDisplay.css';
import { connect } from 'react-redux';

const formatPrice = num => {
  const formatedStr = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `NTD $${formatedStr}`;
};

const PopularDisplay = props => {
  console.log(props.products);
  return (
    <React.Fragment>
      <div className="PopularDisplay container">
        <p
          style={{ paddingLeft: '5px', fontSize: '22px', marginBottom: '10px' }}
        >
          Popular Items
        </p>
      </div>
      <div className="CardDisplay container row">
        {props.products.map(product => (
          <div className="Card col-6 col-sm-4 col-md-2">
            <div className="Card__container">
              <img
                src={require(`../../assets/products/${product.img}`)}
                className="Card-img"
                alt="popular product"
              />
              <div className="Card__caption">
                <p className="Card__caption--title">{product.title}</p>
                <p className="Card__caption--seller">{product.seller}</p>
                <p className="Card__caption--price">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          </div>
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
