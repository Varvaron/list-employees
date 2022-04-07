import React from 'react';
import './header.styles.css';

const Header = ({company}) => {
  return (
    <header className="header">
      <h1 className='header__title'>Учет сотрудников в компании {company}</h1>
      <h2 className='header__subtitle'>Общее число сотрудников: 4</h2>
      <p className='header__paragraph'>Премию получат: 0</p>
    </header>
  )
}

export default Header;