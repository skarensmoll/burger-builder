import React from 'react';
import styles from './Input.module.css';
import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case ('text'):
      inputElement =
        <input className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement =
        <textarea className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case('select'):
      inputElement =
      <select
        className={classes.InputElement}
        value={props.value}
        onChange={props.changed} >
        {props.elementConfig.options.map(option=> (
          <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
      </select>
      break;

    default:
      inputElement = <input className={inputClasses.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed} />;
  }
  return (
    <div className={styles.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;