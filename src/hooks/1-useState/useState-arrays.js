import React, { useState } from 'react';
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClick = (id) => {
    const newPeople = people.filter(person => {
      return person.id !== id
    })
    setPeople(newPeople);
  }

  // const handleRemove = () => {
  //   return setPeople([])
  // }

  return (
    <React.Fragment>
      {people.map(person => {
        const { name, id } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => handleClick(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </React.Fragment>
  );
};

export default UseStateArray;
