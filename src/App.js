import React, { Component, Fragment } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'p1', name: 'Margad', age: 26 },
      { id: 'p2', name: 'Nandin', age: 27 },
      { id: 'p3', name: 'Bat', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName, age) => {
    this.setState({
      persons: [
        { name: 'Margad-Erdene', age: 26 },
        { name: 'Nandin-Erdene', age: 27 },
        { name: newName, age: age }
      ]
    })
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    });

    const copiedPerson = { ...this.state.persons[personIndex] };
    copiedPerson.name = event.target.value;

    const copiedPersons = [...this.state.persons];
    copiedPersons[personIndex] = copiedPerson;

    this.setState({ persons: copiedPersons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const deosShow = this.state.showPersons;
    this.setState({ showPersons: !deosShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                nameChange={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}

          {/* <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, 'Saraa', 23)}            >
            My Hobbies: Hiking</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
            nameChange={this.nameChangedHandler} /> */}
        </div>
      );
    }

    return (
      <Fragment>
        <div className="App">
          <h1>Hello World, Margad-Erdene</h1>
          <p>This is really text</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
      </Fragment>
    );
    // const element = React.createElement('h1', null, 'Hello React Element');
    // return React.createElement('div', {className: 'App'}, element);
  }
}

export default App;
