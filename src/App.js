import React, { Component, Fragment } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { name: 'Margad', age: 26 },
      { name: 'Nandin', age: 27 },
      { name: 'Bat', age: 26 }
    ]
  }

  switchNameHandler = (newName, age) => {
    this.setState({
      person: [
        { name: 'Margad-Erdene', age: 26 },
        { name: 'Nandin-Erdene', age: 27 },
        { name: newName, age: age }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Margad-Erdene', age: 26 },
        { name: 'Nandin-Erdene', age: 27 },
        { name: event.target.value, age: 44 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <Fragment>
        <div className="App">
          <h1>Hello World, Margad-Erdene</h1>
          <p>This is really text</p>
          <button
            style={style}
            onClick={(event) => this.switchNameHandler('Bold', 23)}>Switch Name</button>
          <Person
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
            nameChange={this.nameChangedHandler} />
        </div>
      </Fragment>
    );
    // const element = React.createElement('h1', null, 'Hello React Element');
    // return React.createElement('div', {className: 'App'}, element);
  }
}

export default App;
