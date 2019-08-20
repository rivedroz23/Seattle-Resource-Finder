const mongoose = require('mongoose')

const shelterSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    address: String,
    hours: String
  });

module.exports = mongoose.model('Shelter', shelterSchema);