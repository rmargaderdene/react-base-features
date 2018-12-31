import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside the constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside the componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside the componentDidMount()');
    }

    render() {
        console.log('[Persons.js] Inside the render()');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    nameChange={(event) => this.props.nameChange(event, person.id)}
                    click={() => this.props.delete(index)}
                />
            })
        );
    }
}

export default Persons;