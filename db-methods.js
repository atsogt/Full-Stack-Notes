// CRUD Operation in mongodb

// CREATE operation to insert into collection (table)

// Inserting single tuple
db.collection("users").insertOne({
  name: "Anand",
  age: 29,
});

// Inserting multiple items
db.collection("tasks").insertMany([
  { description: "Walk", complete: false },
  { description: "Jog", complete: false },
  { description: "Sprint", complete: false },
]);

// READ operation to retrive form collection (table)

// find one tuple
db.collection("users").findOne(
  { _id: new ObjectId("65ca5d546591516985494555") },
  (error, result) => {
    if (error) {
      return console.log(`Can't find ${this.name} in users table!`);
    }
    console.log(result);
  }
);

// find multiple tuples based on age
db.collection("users")
  .find({ age: 29 })
  .toArray((error, result) => {
    console.log(result);
  });
