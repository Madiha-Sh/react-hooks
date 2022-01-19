import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'anything'
  })

  const handleClick = () => {
    return setPerson({...person, message:'something'})
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={handleClick}>change message</button>
    </React.Fragment>
  )
};

export default UseStateObject;
