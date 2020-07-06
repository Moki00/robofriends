import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange=(event) => {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
    }
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox seachChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;