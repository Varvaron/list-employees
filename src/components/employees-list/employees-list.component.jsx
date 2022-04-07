import React from 'react';
import EmployeesItem from '../employee-item/employees-item.component';
import './employees-list.styles.css';

const EmployeesList = ({data}) => {
  const elements = data.map(item => {
    return (
      <EmployeesItem key={data.id} {...item}/>
    )
  });

  return (
    <ul className='employees-list'>
     {elements}
    </ul>
  )
}

export default EmployeesList;