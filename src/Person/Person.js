import React from 'react';

import classes from './Person.css';

const person = (props) => {
    
    const randomNum = Math.random();

    if (randomNum > 0.7) {
        throw new Error('Hey Margad, Something went wrong!!!');
    }
    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'am {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.nameChange} value={props.name}/>
        </div>
    );
};

export default person;