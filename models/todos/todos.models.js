import mongoose from "mongoose";

const user_schema = new mongoose.Schema({},{timestamps : true})

export const User = mongoose.model("Todo", todo_schema )