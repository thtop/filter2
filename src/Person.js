import React from 'react';

const Person = ({ id, name, title }) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
};

export default Person;
