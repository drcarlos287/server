// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const Customer = require("./model/customers");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

// Bring Routes
const routes = require("./routes/api");

// MongoDB remote uri setup
const MONGODB_URI =
  "mongodb+srv://kufbreezy:2020_Urus@pluto.tmt2x.mongodb.net/?retryWrites=true&w=majority";

// MongoDB connect using mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verifying if mongoDB connects
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
  //   storeData();
});

//trying a fetch request and this works
const getData = async () => {
  const result = await Customer.findOne({
    age: "28",
  });
  console.log("Result: ", result.nftBalanceUrl);
};

// storing data to user database
const storeData = async () => {
  const result = await Customer.create({
    name: "kufre Usanga",
    age: "24",
  });
  console.log("Updated: ", result);
};

// updating user Data
// const postData = async () => {
//   await Customer.updateOne(
//     {
//       name: "Ime Okon",
//     },
//     {
//       name: "Kufre Usanga",
//     }
//   );
//   console.log("Updated Successfully");
// };

// delete data base object
const deleteData = async () => {
  await Customer.deleteMany({
    nftBalanceUrl: [],
  });
  console.log("Updated Successfully");
};

//making all request coming in as or as urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Http request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
