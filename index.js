//! CRUD Operations
const express = require("express");
require("./db/conn");

const userModel = require("./models/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello User!");
});

//! GET METHOD
app.get("/users", async (req, res) => {
  try {
    const usersData = await userModel.find();
    res.send(usersData);
  } catch (e) {
    res.send(e);
  }
});
//! get User by ID
app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const userData = await userModel.findById(_id);

    if (!userData) {
      return res.status(404).send();
    } else {
      res.send(userData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//! POST METHOD
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new userModel(req.body);
  user
    .save()
    .then(() => {
      res.status(201);
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// //! PUT METHOD
app.put("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await userModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

// //! DELETE METHOD
app.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log("App Started on Port 3000");
});
