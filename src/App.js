import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      mystring: 'Hello Rahul',
      monsters: []
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Monster
          </a>
          <p>{this.state.mystring}</p>
          {/* Anonymous function calling this.setstate() */}
          <button onClick={() => this.setState({mystring: 'Hi Rahul'})}>Click Me</button>
          {/* id is to let react know if any listitem changed */}
          {this.state.monsters.map(x => <li key={x.id}> { x.name } </li>)}
        </header>
      </div>
    );
  }
}

export default App;
