import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
<<<<<<< HEAD
=======
import ErrorBoundry from '../components/ErrorBoundry';
>>>>>>> 9ad731e410354a382fdcf37c58589014ae5a8842
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
<<<<<<< HEAD
            <CardList robots={filteredRobots} />
=======
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
>>>>>>> 9ad731e410354a382fdcf37c58589014ae5a8842
          </Scroll>
        </div>
      );
  }
}

export default App;