import React, { Fragment } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really text</p>
      <button className={btnClass}
        onClick={props.toggle}>Switch Name</button>
    </Fragment>
  );
}

export default cockpit;