import React from 'react';
import axios from 'axios';
import './App.css';

class Shelters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelter: '',
            Address: '',
            hours: ''

        }
    }

    addShelter = ({ name, address, hours }) => {
        const user = localStorage.getItem('userId');
        axios.post('/shelters', {
            name, address, hours, user
        }).then(createdShelter => {
            console.log('createdd shelteer', createdShelter)
        }).catch(err => console.log('err creating shelter', err));
    }

    render() {
        return (
            <div className='shelterinfo'>

                <h1>Here are all the shelters in Seattle</h1>

                <div onClick={() => this.addShelter({
                    name: 'Sacred Heart',
                    address: '232 Warren Ave N, Seattle, WA 98109',
                    hours: '24 hours'
                })}>
                    Shelter: Sacred Heart , Address: 232 Warren Ave N, Seattle, WA 98109, Hours: 24 hours
                </div>

                <div onClick={() => this.addShelter({
                    name: 'St Martin De Porres Shelter',
                    address: '1561 Alaskan Way S, Seattle, WA 98134',
                    hours: '6:30pm-7:30am'
                })}>
                    Shelter: St Martin De Porres Shelter, Address: 1561 Alaskan Way S, Seattle, WA 98134, Hours: 6:30pm-7:30am
                </div>

                <div onClick={() => this.addShelter({
                    name: 'Nickelsville Tiny House Village',
                    address: '1419 22nd Ave, Seattle, WA 98122',
                    hours: '8am-9pm'
                })}>
                    Shelter: Nickelsville Tiny House Village, Address: 1419 22nd Ave, Seattle, WA 98122, Hours: 8am-9pm
                </div>

                <div onClick={() => this.addShelter({
                    name: 'Seattle\'s Union Gospel Mission',
                    address: '318 2nd Ave Ext S, Seattle, WA 98104',
                    hours: '24 hours'
                })}>
                    Shelter: Seattle's Union Gospel Mission: Men's Shelter, Address: 318 2nd Ave Ext S, Seattle, WA 98104, Hours: 24 hours
                </div>

                <div onClick={() => this.addShelter({
                    name: 'Compass Blaine Center Emergency Shelter',
                    address: '150 Denny Way, Seattle, WA 98109',
                    hours: '24 hours'
                })}>
                    Shelter: Compass Blaine Center Emergency Shelter, Address: 150 Denny Way, Seattle, WA 98109 Hours: 24 hours
                </div>
            </div>
        );
    }
}



export default Shelters

