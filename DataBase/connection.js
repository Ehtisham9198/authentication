import mongoose from "mongoose";


export async function connectdb() {
  await mongoose.connect('mongodb+srv://b522035:<password>@cluster0.vlgcgga.mongodb.net/?retryWrites=true&w=majority');
}