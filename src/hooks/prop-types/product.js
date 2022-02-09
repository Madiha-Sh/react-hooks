import React from 'react';
import PropTypes from 'prop-types';
// import defaultImage from '../../../assets/default-image.jpeg';

const defaultImage = 'https://github.com/john-smilga/react-advanced-2020/blob/master/src/assets/default-image.jpeg?raw=true';

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;