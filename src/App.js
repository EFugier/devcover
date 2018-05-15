import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { devs } from './devs.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            devs: devs,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredDevs = this.state.devs.filter(dev => {
            return (
                dev.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || dev.github.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        });
        return (
            <div className='tc'>
                <h1>RoboDevs</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList devs={filteredDevs}/>
            </div>
        );
    }
}


export default App;
