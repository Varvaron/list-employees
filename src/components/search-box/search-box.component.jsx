import React from 'react';
import './search-box.styles.css';

const SearchBox = () => {
  return <input className='search-box__input' 
  type="search" name="search" id="search" placeholder='Найти сотрудника'/>
}

export default SearchBox;