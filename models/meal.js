const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    day_time: Text,
    meal_served: String,
    people_served: String,
    location: Text,
    name_of_program: String
    
  });

module.exports = mongoose.model('Meal', mealSchema);