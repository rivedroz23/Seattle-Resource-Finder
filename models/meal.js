const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    day_time: Text,
    meal_served: Text,
    people_served: Text,
    location: Text,
    name_of_program: Text
    
  });

module.exports = mongoose.model('Meal', mealSchema);