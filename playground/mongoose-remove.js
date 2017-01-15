const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '587bc5e7045c7218af2182ca'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('587bc5e7045c7218af2182ca').then((todo) => {
  console.log(todo);
});
