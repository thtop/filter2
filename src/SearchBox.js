import React from 'react';

const SearchBox = ({ searchChage }) => {
  return (
    <div>
      <label htmlFor="search">Filter: </label>
      <input
        type="search"
        placeholder="Search by name..."
        onChange={searchChage}
      />
    </div>
  );
};

export default SearchBox;
