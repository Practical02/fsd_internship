const express = require("express");
const cors = require("cors");
// npm i body-parser
const bodyParser = require("body-parser"); // Change 1
const mongoose = require("mongoose");

const app = new express();
app.use(cors());
app.use(bodyParser.json()); // Change 2

let Person = require("./person.model");

mongoose.connect(
  "mongodb+srv://amalmanoj02:Trial!234@cluster0.ocvpk12.mongodb.net/SampleDb?retryWrites=true&w=majority"
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// const persons = [
//   { name: "ICT", place: "Koratty" },
//   { name: "Midhun", place: "Eenakulam" },
// ];

const users = [
  {
    id: 1,
    username: "test1@mail.com",
    joiningdate: "08-08-2000",
    status: "active",
  },
  {
    id: 2,
    username: "test2@mail.com",
    joiningdate: "08-08-2000",
    status: "active",
  },
  {
    id: 3,
    username: "test3@mail.com",
    joiningdate: "08-08-2000",
    status: "inactive",
  },
  {
    id: 4,
    username: "test4@mail.com",
    joiningdate: "08-08-2000",
    status: "inactive",
  },
  {
    id: 5,
    username: "test5@mail.com",
    joiningdate: "08-08-2000",
    status: "active",
  },
];

app.get("/", (req, res) => {
  res.json("Hello");
});

// To get the list of persons from the databases
app.get("/persons", async (req, res) => {
  let data = await Person.find().catch((_) => {
    res.json("Error finding data");
  });
  res.json(data);
});

// To create a new person entry in the database.
app.post("/persons", (req, res) => {
  console.log(req.body);
  let person = new Person(req.body);
  person
    .save()
    .then((_) => {
      res.json("Data Saved");
    })
    .catch((_) => {
      res.json("Not Saved");
    });
});

// To get a person on the selected Id from the database.
app.get("/persons/:id", async (req, res) => {
  let id = req.params.id;
  let data = await Person.findById(id).catch((_) => {
    res.json("Error finding data");
  });
  if (!data) {
    res.json("no data");
  } else {
    res.json(data);
  }
});

// To delete a selected person from the database.
app.delete("/persons/:id", async (req, res) => {
  let id = req.params.id;
  await Person.findByIdAndDelete(id)
    .then(() => {
      res.json("Data Removed suuccessfully");
    })
    .catch(() => {
      res.json("Failed deleting data");
    });
});










// To update the details of a selected person
app.put("/persons/:id", (req, res) => {
  let id = req.params.id;
  Person.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.json("Details updated successfully");
    })
    .catch(() => {
      res.json("Error updating the details");
    });
});








app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  console.log(req);
  res.json({ message: "data saved" });
});

app.listen("8080", () => {
  console.log("Started server on 8080");
});
