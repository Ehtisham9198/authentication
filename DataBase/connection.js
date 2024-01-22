import mongoose from "mongoose";


export async function connectdb() {
  await mongoose.connect('mongodb+srv://b522035:Ehtisham@cluster0.vlgcgga.mongodb.net/?retryWrites=true&w=majority');
}