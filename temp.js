// //! CRUD Operations

// const express = require("express");

// const app = express();

// app.get("/user", (req, res) => {
//   res.send("This is Get Method"); //? READ
// });

// app.post("/user", (req, res) => {
//   res.send("This is Post Method"); //? CREATE
// });

// app.delete("/user", (req, res) => {
//   res.send("This is Delete Method"); //? DELETE
// });

// app.put("/user", (req, res) => {
//   res.send("This is Put Method"); //? UPDATE
// });

// app.listen(4000, (res, err) => {
//   console.log("App Started");
// });

// //! CRUD Operations
// const express = require("express");
// require("./db/conn");
// const userModel = require("./models/user");

// const app = express();

// app.use(express.json());

// const users = [
//   { id: 1, name: "user1", email: "user1@gmail.com", tech: "nodejs" },
//   { id: 2, name: "user2", email: "user2@gmail.com", tech: "mongodb" },
//   { id: 3, name: "user3", email: "user3@gmail.com", tech: "express" },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello User!");
// });

// //! GET METHOD
// app.get("/api/users", (req, res) => {
//   //? ALL Users
//   res.send(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   //? Single USer
//   const newUser = users.find((val) => val.id === parseInt(req.params.id));
//   if (!newUser) res.status(404).send("User Not Found");
//   res.send(newUser);
// });

// //! POST METHOD
// app.post("/api/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//   };
//   users.push(newUser);
//   res.send(newUser);
// });

// //! PUT METHOD
// app.put("/api/users/:id", (req, res) => {
//   const user = users.find((val) => val.id === parseInt(req.params.id));
//   if (!user) res.status(404).send("User Not Found");

//   user.name = req.body.name;
//   res.send(user);
// });

// //! DELETE METHOD
// app.delete("/api/users/:id", (req, res) => {
//   const user = users.find((val) => val.id === parseInt(req.params.id));
//   if (!user) res.status(404).send("User Not Found");

//   const index = users.indexOf(user);
//   users.splice(index, 1);

//   res.send(user);
// });

// app.listen(3000, () => {
//   console.log("App Started on Port 3000");
// });

// ! Database
// mongoose
//   .connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database is connected successfully..."))
//   .catch((err) => console.log(err));

// mongoose
//   .connect(
//     "mongodb+srv://manikumar:manikumar@localatlasdemo.xpjfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     {
//       // useCreateIndex: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("Connection is Sucessful");
//   })
//   .catch((e) => {
//     console.log("No Connections");
//   });
