const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    day_time: String,
    meal_served: String,
    people_served: String,
    location: String,
    name_of_program: String
    
  });

module.exports = mongoose.model('Meal', mealSchema);