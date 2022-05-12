import React from 'react';
import './header.styles.css';

const Header = ({company, totalEmployees, increasedEmployees}) => {
  return (
    <header className="header">
      <h1 className='header__title'>Учет сотрудников в компании {company}</h1>
      <h2 className='header__subtitle'>Общее число сотрудников: {totalEmployees}</h2>
      <p className='header__paragraph'>Премию получат: {increasedEmployees}</p>
    </header>
  )
}

export default Header;