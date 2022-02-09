import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../hooks/custom-hooks/useFetch';
// every time props or state changes, component re-renders.

//memo function looks whether the props change.

// useMemo looks specifically for the value.

const url = 'https://course-api.com/javascript-store-products';

const calculateMostExpensive = (data) => {
  const MaxPrice = data.reduce((total, item) => {
    const { price } = item.fields;
    if(total < price) {
      total = price;
    }

    return total;
  },0);
  return MaxPrice/100;
};

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    console.log(cart);
    setCart(cart+1);
  }, [cart]);

  const mostExpensive = useMemo(() => {
    return calculateMostExpensive(products);
  }, [products]);

  return (
    <React.Fragment>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop: '3rem'}}>Cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </React.Fragment>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('biglist called');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart} ></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single product called');
  });
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}

export default Index;