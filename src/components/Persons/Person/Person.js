import React, { Component, Fragment } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside the constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside the componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside the componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside the render()');
        return (
            <Fragment>
                <p onClick={this.props.clicked}>I'am {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Fragment>
        )

        // return [
        //     <p key="1" onClick={this.props.clicked}>I'am {this.props.name} and {this.props.age} years old!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type='text' onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}

export default withClass(Person, classes.Person);