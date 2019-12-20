import React from 'react';
import SearchBox from './SearchBox';
import PersonList from './PersonList';

import { persons } from './persons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: persons, searchField: '' };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const filterPersons = this.state.persons.filter(person =>
      person.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div>
        <h1>On-site Test version 2</h1>
        <SearchBox searchChage={this.onSearchChange} />
        <PersonList persons={filterPersons} />
      </div>
    );
  }
}

export default App;
