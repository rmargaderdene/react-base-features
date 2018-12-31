import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside the constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside the componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside the componentDidMount()');
    }

    render() {
        console.log('[Person.js] Inside the render()');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'am {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.nameChange} value={this.props.name} />
            </div>
        );
    }
}

export default Person;