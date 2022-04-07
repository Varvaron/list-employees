import React from 'react';
import './filter.styles.css';

const FilterButton = () => {
  return (
    <div className="btn-wrapper">
      <button className='btn' type='button'>Все сотрудники</button>
      <button className='btn btn-outline' type='button'>На повышение</button>
      <button className='btn btn-outline' type='button'>ЗП больше 1000$</button>
    </div>
  )
}

export default FilterButton;