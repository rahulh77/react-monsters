import React, { Component } from 'react';
import './App.css';
import  CardList  from './components/card-lists/card-list.component.jsx';
import './components/card-lists/card-list.styles.css';
import SearchBox from './components/search-box/search-box'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      mystring: 'Hello Rahul',
      monsters: [],
      searchField: '',
      meaningOfLife: 47
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value}, () => 
      console.log(this.state.searchField))
  }

  asyncStateChange = () => {
    this.setState((prevState, prevProps) => {
     return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    }, () => console.log(this.state.meaningOfLife))
  }

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()) );
    return (
      <div className="App">
          <h1>React Monsters</h1>
          <SearchBox className="search" placeholder='Search monsters' changeHandler={this.handleChange} />

          <button onClick={this.asyncStateChange}>Async State</button>

          <CardList myprop='rahulprop' monsters={filteredMonsters}></CardList>
          <p>{this.state.mystring}</p>
          {/* Anonymous function calling this.setstate() */}
          <button onClick={() => this.setState({mystring: 'Hi Rahul'})}>Click Me</button>
          {/* id is to let react know if any listitem changed */}
          
      </div>
    );
  }
}

export default App;
