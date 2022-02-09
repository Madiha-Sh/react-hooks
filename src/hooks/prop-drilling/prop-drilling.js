import React, { useState } from "react";
import { data } from '../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    setPeople(people.filter(person => person.id != id));
  }
  return <section>
      <div>
        <h3>Prop drilling</h3>
        <List people={people} handleRemove={handleRemove}/>
      </div>
    </section>
};

const List = ({ people, handleRemove }) => {
  return (
    <React.Fragment>
      {people.map(person => {
        return <SinglePerson {...person} key={person.id} handleRemove={handleRemove}/>
      })}
    </React.Fragment>
  )
};

const SinglePerson = ({ id, name, handleRemove }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => handleRemove(id)}>remove</button>
    </div>
  )
};

export default PropDrilling;