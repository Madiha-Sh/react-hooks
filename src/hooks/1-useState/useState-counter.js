import React, { useState } from 'react';

const UseStateCounter = () => {

  const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   return setCount(count+1)
  // } 

  const handleComplexIncrease = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev+1
      })
    }, 2000);
  }

  return (
    <React.Fragment>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={() => setCount(count-1)}>decrease</button>
        <button className='btn' onClick={() => setCount(0)}>reset</button>
        <button className='btn'  onClick={() => setCount(count+1)}>increase</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={handleComplexIncrease}>increase later</button>
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
