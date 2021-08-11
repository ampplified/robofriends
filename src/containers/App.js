import React from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(filterRobots);
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {return robot.name.toLowerCase().includes(searchfield.toLowerCase())})
        if (!robots.length){
            return <h1>Loading</h1>
        }
        else{
            return [
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            ];
        }
    }
}

export default App;