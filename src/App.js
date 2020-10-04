import React from 'react'
import './App.css'
import { CardList } from './component/card-list/card-list.component'
import { SearchBox } from './component/search-box/search-box.component'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      monstor: [],
      SearchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monstor: users
      }))
  }

  handleChange = e => {
    this.setState({ SearchField: e.target.value })
  }

  render() {
    const { monstor, SearchField } = this.state;
    const FilterMonstor = monstor.filter(monstor =>
      monstor.name.toLowerCase().includes(SearchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monstor For Sale</h1>
        {/* <input
          type="search"
          placeholder='Search monstors'
          onChange={e => this.setState({ SearchField: e.target.value })} /> */}
        <SearchBox placeholder='Search Monstor' handleChange={this.handleChange} />
        <CardList monstor={FilterMonstor}>
        </CardList>
        {console.log(FilterMonstor)}
      </div>
    )
  }
}
export default App