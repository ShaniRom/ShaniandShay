import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public/build'));
app.use(express.json());

//MONGODB_URI="mongodb+srv://ShaniRom:CakFWbktCxPEqGS3@cluster0.vh1hg.mongodb.net/airbnb-clone?retryWrites=true&w=majority"

mongoose
  .connect(
    "mongodb+srv://ShaniRom:CakFWbktCxPEqGS3@cluster0.vh1hg.mongodb.net/shudemy?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
