import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: Number,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

export default  User;
