import React, { Component, useEffect } from 'react';

function UseEffectCleanup() {
  const [size, setSize] = React.useState(window.innerWidth);

  const checkSize = () => {
    return setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('resize', checkSize)

    return () => {
      console.log('cleanup called')
      window.removeEventListener('resize', checkSize)
    };
  });
  console.log('render');
  return <React.Fragment>  
    <h1>window</h1>
    <h2>{size} px</h2>
  </React.Fragment>
}

export default UseEffectCleanup;