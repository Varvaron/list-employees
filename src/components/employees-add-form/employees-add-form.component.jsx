import React from 'react';
import './employees-add-form.styles.css';

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    }
  }

  onInputChange = (evt) => {
    this.setState(() => ({[evt.target.name]: evt.target.value})); 
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className='form'>
        <h3 className="form__title">Добавьте нового сотрудника</h3>
        <form className="add-form">
          <input className="add-form__input" type="text" placeholder='Как его зовут?' 
          name='name' value={name} onChange={this.onInputChange}/>
          <input className="add-form__input" type="number" placeholder='Зарплата в $' 
          name='salary' value={salary} onChange={this.onInputChange}/>
          <button className="add-form__button" type="submit">Добавить</button>
        </form>
      </div>
  )
  }
}

export default EmployeesAddForm;