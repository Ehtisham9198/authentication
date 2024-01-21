import mongoose from "mongoose";


export async function connectdb() {
  await mongoose.connect('mongodb://localhost:27017/UserDatabase');
}