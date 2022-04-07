import React from 'react';
import './employees-add-form.styles.css';

const EmployeesAddForm = () => {
  return (
    <div className='form'>
      <h3 className="form__title">Добавьте нового сотрудника</h3>
      <form className="add-form">
        <input className="add-form__input" type="text" placeholder='Как его зовут?'/>
        <input className="add-form__input" type="text" placeholder='Зарплата в $'/>
        <button className="add-form__button" type="submit">Добавить</button>
    </form>
    </div>
  )
}

export default EmployeesAddForm;