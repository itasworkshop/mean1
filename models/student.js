var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  id: String,
  name: String,
  subject: String,
  description: String,
  join_year: String,
  address: { street:String, state: String },
  updated_date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Student', StudentSchema);
