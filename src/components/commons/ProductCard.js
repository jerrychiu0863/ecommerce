import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/commons/Card.css';

const formatPrice = num => {
  const formatedStr = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `NTD $${formatedStr}`;
};

const ProductCard = props => {
  return (
    <div className={`Card ${props.gridClass}`}>
      <div className="Card__container">
        <Link to={`/product/${props.id}`}>
          <img
            src={require(`../../assets/products/${props.img}`)}
            className="Card-img"
            alt="popular product"
          />
        </Link>
        <div className="Card__caption">
          <p className="Card__caption--title">{props.title}</p>
          <p className="Card__caption--seller">{props.seller}</p>
          <p className="Card__caption--price">{formatPrice(props.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
