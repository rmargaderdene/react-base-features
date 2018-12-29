import React, { Component } from 'react';
import classes from './App.css';
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

    let persons = null;
    let btnClass = '';

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

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello World, Margad-Erdene</h1>
        <p className={assignedClasses.join(' ')}>This is really text</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
