import mongoose from "mongoose";


export async function connectdb() {
  await mongoose.connect('mongodb+srv://b522035:RpOoGuLBjsRnWZLg@cluster0.fi8lmb1.mongodb.net/?retryWrites=true&w=majority');
}

