import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((el) => {
        const {id, name} = el;
        return (
          <div key={id} className='item'>
            <h4>- {name} / ID : {id}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
          )
        })}
        <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
    </>
  );
};

export default UseStateArray;
