import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  nameChange={(event) => this.nameChangedHandler(event, person.id)}
                  click={() => this.deletePersonHandler(index)}
                />
              );
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello World, Margad-Erdene</h1>
          <p className={classes.join(' ')}>This is really text</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
