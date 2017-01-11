const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  //Delete Many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // Delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}). then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({age: 43}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({_id: new ObjectID("58753591045c7218af2182c2")}).then((result) => {
    console.log(result);
  });

  // db.close();
});
