import React from 'react';
import './filter.styles.css';

const FilterButton = ({filter, onFilterSelect}) => {
  const buttonsData = [
    {name: 'all', type: 'button', label: 'Все сотрудники'},
    {name: 'rise', type: 'button', label: 'На повышение'},
    {name: 'moreThen1000', type: 'button', label: 'ЗП больше 1000$'},
  ];

  const buttons = buttonsData.map(({name, type, label}) => {
    const activeButton = filter === name;
    const buttonClass = activeButton ? 'btn' : 'btn btn-outline';
    return (
      <button 
      className={buttonClass} 
      type={type} 
      key={name}
      onClick={() => onFilterSelect(name)}>
      {label}</button>
    )
  });

  return (
    <div className="btn-wrapper">
      {buttons}
    </div>
  )
}

export default FilterButton;