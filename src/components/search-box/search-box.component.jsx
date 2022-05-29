import {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  constructor (props) {
    super (props);

    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (evt) => {
    const term = evt.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input className='search-box__input' 
      type="search" 
      name="search" 
      id="search" 
      placeholder='Найти сотрудника'
      value={this.state.term}
      onChange={this.onUpdateSearch}
    />
  )}  
}

export default SearchBox;