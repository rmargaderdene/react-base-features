import React, { PureComponent, Fragment } from 'react';
import Proptype from 'prop-types';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import withClass from '../hoc/withClass';
import Person from '../components/Persons/Person/Person';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside the constructor', props);
    //general usage
    this.state = {
      persons: [
        { id: 'p1', name: 'Margad', age: 26 },
        { id: 'p2', name: 'Nandin', age: 27 },
        { id: 'p3', name: 'Bat', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside the componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside the componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside the shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside the componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside the componentDidUpdate()');
  }


  //modern approach
  // state = {
  //   persons: [
  //     { id: 'p1', name: 'Margad', age: 26 },
  //     { id: 'p2', name: 'Nandin', age: 27 },
  //     { id: 'p3', name: 'Bat', age: 26 }
  //   ],
  //   showPersons: false
  // }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !deosShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] Inside the render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler} />
    }

    return (
      <Fragment>
        <button onClick={() => this.setState({
          showPersons: true
        })}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler} />
        {persons}
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: Proptype.func,
  name: Proptype.string,
  age: Proptype.number,
  changed: Proptype.func
};  

export default withClass(App, classes.App);
