import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const url = 'https://api.github.com/users';
 
const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>{loading ? '...loading' : 'data fetched'}</h2>
    </div>
  );
}

export default Example;