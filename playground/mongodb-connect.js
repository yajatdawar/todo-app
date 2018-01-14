const MongoClient = require('mongodb').MongoClient;


var user = {name:'Yajat',age : 20};
var {name} = user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/bits', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('bitsians').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
db.close();
});
  // Insert new doc into Users (name, age, location)
//   db.collection('Users').insertOne({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert user', err);
//     }
//
//     console.log(result.ops);
//   });
//
//   db.close();
// });
