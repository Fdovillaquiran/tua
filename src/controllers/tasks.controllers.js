import { taskModel } from "../models/Task.js"

const  tasksControllers = {}

tasksControllers.getTasks = async(req, res) => {
    const tasks = await taskModel.find()
    res.json(tasks)
}
tasksControllers.getTask = async(req, res) => {
    const task = await taskModel.findById(req.params.id)
    res.json(task)
}
tasksControllers.createTask = async(req, res) => {
    //console.log(req.body);
    const { title, description, status } = req.body
    const newtask = new taskModel({
        title,
        description,
        status
    })
    //console.log(newtask);
    await newtask.save()
    res.json({message: 'task create'})
}
tasksControllers.updateTask = async(req, res) => {
    const { title, description, status } = req.body
    await taskModel.findByIdAndUpdate(req.params.id, {
        title,
        description,
        status 
    })
    res.json({message: 'task update'})
}
tasksControllers.deleteTask = async(req, res) => {
    const task = await taskModel.findByIdAndDelete(req.params.id)
    res.json({message: 'task delete'})
}

export default tasksControllers