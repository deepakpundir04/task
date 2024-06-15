import mongoose from "mongoose";
import fs from 'fs'

const creataTask = async(req,res)=>{
    try {
        const body = req.body;
        await fs.writeFile('../file/task',(err,data,)=>{
            if(err){
                console.log(err)
                throw new Error('error in reading file')
            }

        })

    } catch (error) {
        console.log(error)
        res.send(error)
    }

}

const getAllTask = async(req,res) =>{
    try {
        await fs.readFile('../file/task',(err,data)=>{
            if(err){
                console.log(err)
                throw new Error('error in reading file')
            }
        })
    } catch (error) {
        
    }
}

const getTaskById = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}

const deleteTaskById = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

const updateTask = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

export default {
    creataTask,
    updateTask,
    deleteTaskById,
    getAllTask,
    getTaskById
}