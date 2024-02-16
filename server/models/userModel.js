const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  nameUser: {
    type: String, required: true, minlength: 3, maxlength: 40
  },
  userName: {
    type: String, required: true, minlength: 3, maxlength: 100, unique: true
  },
  password: {
    type: String, required: true, minlength: 3, maxlength: 200
  },
  rolUser: {
    type: String, required: true, minlength: 1, maxlength: 15
  }
},{
  timestamps:true,
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;