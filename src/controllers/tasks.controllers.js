const  tasksController = {}

tasksController.getTasks = (req, res) => res.json({message: []})
tasksController.getTask = (req, res) => res.json({message: 'User name'})
tasksController.createTask = (req, res) => res.json({message: 'User create'})
tasksController.updateTask = (req, res) => res.json({message: 'User update'})
tasksController.deleteTask = (req, res) => res.json({message: 'User delete'})

export default tasksController