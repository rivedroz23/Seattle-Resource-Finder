import React from 'react';
import axios from 'axios';
import './App.css';
import Meals from './Meals'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelters: ''
        }
    }




/*displayAllMeals(e) {
    let config = {
        headers: {
            "X-App-Token": "XUdLH5yC5LHLJ7qdLtMw62GVe"
        }
    }
    axios.get('https://data.seattle.gov/resource/hmzu-x5ed.json', config).then( result => {
    this.setState({
    meals: result.data
          })
        })
      }*/






render() {
    return (
        <>
            
        </>
    );

}

}



export default App2

