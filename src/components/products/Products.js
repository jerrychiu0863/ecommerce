import React from 'react';

const Products = props => {
  console.log(props);
  return (
    <div className="container" style={{ margin: '0 auto' }}>
      {props.match.params.category}
    </div>
  );
};

export default Products;
