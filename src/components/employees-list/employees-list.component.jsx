import React from 'react';
import EmployeesItem from '../employee-item/employees-item.component';
import './employees-list.styles.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)} 
        onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}
        onSalaryChange={(evt) => onSalaryChange(id, evt.currentTarget.value)}
      />
    )
  });

  return (
    <ul className='employees-list'>
     {elements}
    </ul>
  )
}

export default EmployeesList;