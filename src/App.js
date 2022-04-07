import './App.css';
import Header from './components/header/header.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import FilterButton from './components/filter/filter.component.jsx';
import EmployeesList from './components/employees-list/employees-list.component.jsx';
import EmployeesAddForm from './components/employees-add-form/employees-add-form.component';

function App() {
  const data = [
    {name: 'Волков Лев', salary: 800, increase: false, id: 1},
    {name: 'Сомова Ксения', salary: 1200, increase: true, id: 1},
    {name: 'Борисов Тимур', salary: 1500, increase: false, id: 1},
    {name: 'Николас Мартинес', salary: 3500, increase: true, id: 1}
  ];

  return (
    <div className='App'>
      <Header company='Киви'/>
      <section className='search-box'>
        <SearchBox />
        <FilterButton />
      </section>
      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
