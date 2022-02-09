import React, { useContext, useState } from "react";
import { data } from '../../data';

const PersonContext = React.createContext();
// access to 2 components -> provider and consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    setPeople(people.filter(person => person.id != id));
  }
  return (
    <PersonContext.Provider value={{ handleRemove, people }}>
      <h3>context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <React.Fragment>
      {people.map(person => {
        return <SinglePerson {...person} key={person.id} />
      })}
    </React.Fragment>
  )
};

const SinglePerson = ({ id, name }) => {
  const { handleRemove } = useContext(PersonContext)
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => handleRemove(id)}>remove</button>
    </div>
  )
};

export default ContextApi;