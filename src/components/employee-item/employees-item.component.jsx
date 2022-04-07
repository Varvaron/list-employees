import React from 'react';
import './employees-item.styles.css';

const EmployeesItem = ({name, salary, increase}) => {
  let itemClassNames = 'employees-item';

  if (increase) {
    itemClassNames += ' increase';
  }
  
  return (
    <li className={itemClassNames}>
      <span className='employees-item__name'>{name}</span>
      <input type='text' className='employees-item__input' defaultValue={salary + '$'}/>
      <div className='employees-item__icons'>
        <button type='button' className='employees-item__button'>
          <i className='fas fa-cookie'></i>
        </button>
        <button type='button' className='employees-item__button'>
            <i className='fas fa-trash'></i>
        </button>
          <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default EmployeesItem;