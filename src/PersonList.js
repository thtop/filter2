import React from 'react';
import Person from './Person';
import './PersonList.css';

const PersonList = ({ persons }) => {
  return (
    <div className="PersonList-contaier">
      {persons.map(person => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            title={person.title}
          />
        );
      })}
    </div>
  );
};

export default PersonList;
