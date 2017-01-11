const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let userId = '58764981204aa2e430e54d2f';

// let id = '5876772b86e23a984ce34d21';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then(user => {
  if (!user) {
    return console.log('ID not found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch(e => console.log(e));
