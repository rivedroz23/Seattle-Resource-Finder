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
            shelter: '',
            Adress: '',
            hours: ''
            
        }
    }








render() {
    
    return (
        <div className='shelterinfo'>
        <h1>Here are all the shelters in Seattle</h1>
        <div>Shelter: Sacred Heart , Address: 232 Warren Ave N, Seattle, WA 98109, Hours: 24 hours</div>
        <div>Shelter: St Martin De Porres Shelter, Address: 1561 Alaskan Way S, Seattle, WA 98134, Hours: 6:30pm-7:30am</div>
        <div>Shelter: Nickelsville Tiny House Village, Address: 1419 22nd Ave, Seattle, WA 98122, Hours: 8am-9pm</div>
        <div>Shelter: Seattle's Union Gospel Mission: Men's Shelter, Address: 318 2nd Ave Ext S, Seattle, WA 98104, Hours: 24 hours</div>
        <div>Shelter: Compass Blaine Center Emergency Shelter, Address: 150 Denny Way, Seattle, WA 98109</div>
        </div>
    );

}

}



export default Shelters

