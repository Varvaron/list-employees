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
        {name: 'Волков Лев', salary: 800, increase: true, rise: false, id: 1},
        {name: 'Сомова Ксения', salary: 1200, increase: false, rise: false, id: 2}, 
        {name: 'Борисов Тимур', salary: 1500, increase: false, rise: true, id: 3},
        {name: 'Титова Вероника', salary: 3500, increase: true, rise: false, id: 4}
      ], 
      term: '',
      filter: 'all'
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

  onSalaryChange = (id, value) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item,  salary: value}
        }
        return item;
      })
    })) 
  }

  searchEmployees = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'moreThen1000': 
        return items.filter(item => item.salary > 1000);
      default: 
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const { data, term, filter} = this.state;
    const totalEmployees = data.length;
    const increasedEmployees = data.filter(element => element.increase).length;
    const filteredData = this.filterPost(this.searchEmployees(data, term), filter);

    return (
      <div className='App'>
        <Header company='Киви' totalEmployees={totalEmployees} increasedEmployees={increasedEmployees}/>
        <section className='search-box'>
          <SearchBox onUpdateSearch={this.onUpdateSearch}/>
          <FilterButton filter={filter} onFilterSelect={this.onFilterSelect}/>
        </section>
        <EmployeesList 
          data={filteredData} 
          onDelete={this.deleteItem} 
          onToggleProp={this.onToggleProp}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
