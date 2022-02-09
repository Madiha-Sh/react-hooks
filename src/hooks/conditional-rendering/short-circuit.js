import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const handleClick = () => {
  //   setIsError(!isError);
  // }

    return (
      <React.Fragment>
        <h1>{text || 'John Doe'}</h1>
        <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
        <h1>{isError && 'Error...'}</h1>
      </React.Fragment>
    )
}
 
export default ShortCircuit;