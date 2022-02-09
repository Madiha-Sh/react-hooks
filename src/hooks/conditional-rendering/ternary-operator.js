import React, { useState } from 'react';

const TernaryOperator = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const handleClick = () => {
  //   setIsError(!isError);
  // }

    return (
      <React.Fragment>
        {text ? <h1>{text}</h1> : <h1>john doe</h1>}
        <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
        {isError ? <h1>error...</h1> : null}
      </React.Fragment>
    )
}
 
export default TernaryOperator;