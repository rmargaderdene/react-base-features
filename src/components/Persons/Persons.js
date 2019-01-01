import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside the componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside the shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside the componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside the componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] Inside the render()');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                    clicked={() => this.props.clicked(index)}
                />
            })
        );
    }
}

export default Persons;