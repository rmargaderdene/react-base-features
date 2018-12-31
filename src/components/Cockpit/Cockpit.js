import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really text</p>
      <button className={btnClass}
        onClick={props.toggle}>Switch Name</button>
    </div>
  );
}

export default cockpit;