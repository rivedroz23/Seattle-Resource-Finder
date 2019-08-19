import React from 'react';
import axios from 'axios';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Meals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelters: '',
            meals: []
        }
    }





render() {
    return (
       <div className='meals'>
        <h1>Here are all the meals in Seattle</h1>
        {this.props.meals && this.props.meals.map((meal, i) => (
        <div className="meal">
        <div> {meal.meal_served} </div>
        <div> {meal.day_time} </div>
        <div> {meal.location} </div>
        <div> {meal.people_served} </div>
        <div> {meal.name_of_program} </div>
                    
        </div>
        )
        )
    }
        </div>
        
    ); 
}

}



export default Meals