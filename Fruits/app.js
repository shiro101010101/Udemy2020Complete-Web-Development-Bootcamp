
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"please check.Name is not specified"]
  },

  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  rating:10,
  review:"Pretty solid as fruits"


});

// fruit.save();

const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruits:fruitSchema

});

const Person = mongoose.model("Person",personSchema);

const mango = new Fruit({
  name:"mango",
  score:6,
  review:"Great fruits"
});

mango.save();
Person.updateOne({name:"John"},{favoriteFruits:mango},function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Sucecefully update mango document");
  }
});

// const person = new Person({
//   name:"Amy",
//   age:12,
//   favoriteFruits:pineapple
//
// });
//
// person.save();



Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);

    });
  }
});

// Fruit.updateOne({_id:"5f11fb9510762935f07e05d1"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Sucecefully updated");
//   }
// });

// Fruit.deleteOne({name:"apple"},function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Sucecefully deleted apple");
//   }
// });


// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }

// Person.deleteMany({name:"John"},function(err){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("Sucecefully deleted all the document");
//     }
//   });
