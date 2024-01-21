import mongoose from 'mongoose';

const { Schema } = mongoose;

// Creating collection/model
const userModel = mongoose.models.User || mongoose.model("User", new Schema({
  name: String,
  email: String,
  password: String,
}));

export default userModel;
