import React from 'react';
import './employees-item.styles.css';

class EmployeesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }));
  }

  onRise = () => {
    this.setState(({rise}) => ({
      rise: !rise
    }));
  }

  render() {
    const {name, salary} = this.props;
    const {increase, rise} = this.state;
    let itemClassNames = 'employees-item';
    if (increase) {
      itemClassNames += ' increase';
    }

    if (rise) {
      itemClassNames += ' like';
    }

    return (
      <li className={itemClassNames}>
        <span className='employees-item__name' onClick={this.onRise}>{name}</span>
        <input type='text' className='employees-item__input' defaultValue={salary + '$'}/>
        <div className='employees-item__icons'>
          <button type='button' className='employees-item__button' onClick={this.onIncrease}>
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
}

export default EmployeesItem;