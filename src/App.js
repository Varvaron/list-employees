import React from 'react';
import './App.css';
import Header from './components/header/header.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import FilterButton from './components/filter/filter.component.jsx';
import EmployeesList from './components/employees-list/employees-list.component.jsx';
import EmployeesAddForm from './components/employees-add-form/employees-add-form.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'Волков Лев', salary: 800, increase: true, rase: true, id: 1},
        {name: 'Сомова Ксения', salary: 1200, increase: false, rase: false, id: 2}, 
        {name: 'Борисов Тимур', salary: 1500, increase: false, rase: false, id: 3},
        {name: 'Николас Мартинес', salary: 3500, increase: false, rase: false, id: 4}
      ]
    }

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId,
    }

    this.setState(({data}) => {
      const newArray = [...data, newItem]
      return {
        data: newArray
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item,  [prop]: !item[prop]}
        }
        return item;
      })
    })) 
  }

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item,  rise: !item.rise}
  //       }
  //       return item;
  //     })
  //   })) 
  // }

  render() {
    const totalEmployees = this.state.data.length;
    const increasedEmployees = this.state.data.filter(element => element.increase).length;

    const {data} = this.state;

    return (
      <div className='App'>
        <Header company='Киви' totalEmployees={totalEmployees} increasedEmployees={increasedEmployees}/>
        <section className='search-box'>
          <SearchBox />
          <FilterButton />
        </section>
        <EmployeesList 
          data={data} 
          onDelete={this.deleteItem} 
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
