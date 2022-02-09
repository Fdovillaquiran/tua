import { Router } from "express"
import usersController from "../controllers/users.controllers.js"

const routerUsers = Router()

routerUsers.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)

routerUsers.route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)
    
export default routerUsers