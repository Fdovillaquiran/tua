const  usersController = {}

usersController.getUsers = (req, res) => res.json({message: []})
usersController.getUser = (req, res) => res.json({message: 'User name'})
usersController.createUser = (req, res) => res.json({message: 'User create'})
usersController.updateUser = (req, res) => res.json({message: 'User update'})
usersController.deleteUser = (req, res) => res.json({message: 'User delete'})

export default usersController