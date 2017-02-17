import mongoose   from 'mongoose';
let Schema = mongoose.Schema;

/*
  collection - specifies which collection to search for in db
  else mongoose looks for small case plural of first param in mongoose.modal
  which in this case UserList - userlists
*/
var userSchema = new Schema({
  name: String,
  previlage: String,
  pass: String
}, {collection: 'userLists'});

// create a model using Schema
var User = mongoose.model('UserList', userSchema);

module.exports = User;
