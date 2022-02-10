import { UserModel } from "../models/User.js"

const  usersController = {}

usersController.getUsers = async(req, res) => {
    const users = await UserModel.find()
    res.json(users)
}
usersController.getUser = async(req, res) => {
    const user = await UserModel.findById(req.params.id)
    res.json(user)
}
usersController.createUser = async(req, res) => {
    //console.log(req.body);
    const { email, password, name, lastName, rol, status } = req.body
    const newUser = new UserModel({
        email,
        password,
        name,
        lastName,
        rol,
        status
    })
    //console.log(newUser);
    await newUser.save()
    res.json({message: 'User create'})
}
usersController.updateUser = async(req, res) => {
    const { email, password, name, lastName, rol, status } = req.body
    await UserModel.findByIdAndUpdate(req.params.id, {
        email,
        password,
        name,
        lastName,
        rol,
        status 
    })
    res.json({message: 'User update'})
}
usersController.deleteUser = async(req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    res.json({message: 'User delete'})
}

export default usersController