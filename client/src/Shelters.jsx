import React from 'react';
import axios from 'axios';
import './App.css';
import Meals from './Meals'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Shelters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelters: '',
            
        }
    }








render() {
    
    return (
        <div className='meals'>
        <h1>Here are all the shelters in Seattle</h1>
        <div>Shelter: Sacred Heart , Address: 232 Warren Ave N, Seattle, WA 98109, Hours: 24hrs</div>
        <div>Shelter: </div>
        </div>
    );

}

}



export default Shelters

