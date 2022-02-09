import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName:'', email:''});
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(firstName && email) {
  //     const person = {id: uuid(), firstName, email };
  //     // console.log(person);
  //     setPeople(people => {
  //       const newPeople = [...people, person]
  //       return newPeople;
  //     })
  //     console.log(people);
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values')
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName, person.email) {
      const newPerson = {...person, id:uuid()};
      setPeople([...people, newPerson]);
      setPerson({firstName:'', email:''});
    } 
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPerson({...person,[name]:value});
  }

  return (
    <React.Fragment>
      <article>
        <form className='form'>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id='firstName' name='firstName' value={person.firstName} onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' value={person.email} onChange={handleChange}/>
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person) => {
          const {id, firstName, email} = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </React.Fragment>
  )
}
export default ControlledInputs;