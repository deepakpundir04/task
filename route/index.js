import { Router } from "express";
import {creataTask,getAllTask,getTaskById,deleteTaskById,updateTask} from "/controller"

const router = Router();
router.get('/',getAllTask)
router.get('/:id',getTaskById)
router.post('/',creataTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTaskById)

export default {
    router
} 