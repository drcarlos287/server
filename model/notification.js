// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const notificationSchema = new Schema({
  time: String,
});

// Define Model
const notification = mongoose.model("notification", notificationSchema);

module.exports = notification;
