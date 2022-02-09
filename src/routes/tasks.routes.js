import { Router } from "express"
import tasksController from "../controllers/tasks.controllers.js"

const routerTasks = Router()

routerTasks.route('/')
    .get(tasksController.getTasks)
    .post(tasksController.createTask)

routerTasks.route('/:id')
    .get(tasksController.getTask)
    .put(tasksController.updateTask)
    .delete(tasksController.deleteTask)

export default routerTasks