const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  userID: String,
  name: String,
  biciID: String
});

const model = mongoose.model('User', mySchema);
module.exports = model;