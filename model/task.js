import mongoose from "mongoose"

export const task = new mongoose.Schema({
    title:String,
    description:String,
    dueDate:Date,
    createdDate:Date,
    modifiedDate:Date,
    user:String
})

