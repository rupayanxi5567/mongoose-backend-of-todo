import mongoose from "mongoose";

const sub_todo_schema = new mongoose.Schema({},{timestamps: true})

export const subTodo = mongoose.model("SubTodo", sub_todo_schema )