import './employees-item.styles.css';

const EmployeesItem = (props) => {
  const {name, salary, onDelete, onToggleProp, increase, rise} = props;

  let itemClassNames = 'employees-item';
  if (increase) {
    itemClassNames += ' increase';
  }

  if (rise) {
    itemClassNames += ' like';
  }

  return (
    <li className={itemClassNames}>
      <span className='employees-item__name' onClick={onToggleProp} data-toggle="rise">{name}</span>
      <input type='text' className='employees-item__input' defaultValue={salary + '$'}/>
      <div className='employees-item__icons'>
        <button type='button' 
          className='employees-item__button' 
          onClick={onToggleProp} 
          data-toggle="increase">
          <i className='fas fa-cookie'></i>
        </button>
        <button type='button' 
          className='employees-item__button' 
          onClick={onDelete}>
          <i className='fas fa-trash'></i>
        </button>
          <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default EmployeesItem;