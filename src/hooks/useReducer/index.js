import React, { useState, useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import Modal from './modal';
import { data } from '../../data';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newPerson = {id: uuid(), name};
      dispatch({ type : "ADD_ITEM", payload: newPerson });
      setName('');
    } else {
      dispatch({ type : "NO_VALUE"});
    }
  };

  const closeModal = () => {
    dispatch({ type : "CLOSE_MODAL" });
  };

  return <React.Fragment>
    {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button type='submit'>add</button>
    </form>
    <div>
      {state.people.map(person => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type : "REMOVE_ITEM", payload: id})}>remove</button>
          </div>
        )
      })}
    </div>
  </React.Fragment>
}

export default Index;