//const expresss = require('express')
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from './src/db.js'
import routerUsers from './src/routes/users.routes.js'
import routerTasks from './src/routes/tasks.routes.js'

//settings
dotenv.config()
const port= process.env.PORT ? process.env.PORT : 4000
const db = process.env.ATLAS_URI ? process.env.ATLAS_URI : 'mongodb://localhost/dbtua'
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', routerUsers)
app.use('/api/tasks', routerTasks)

app.get('/', (req, res ) => {
    console.log('test home');
    res.send('res ok')
})

const main = async () => {
    await app.listen(port)
    console.log(`server http://localhost:${port}`)
    await connectDB(db)
}

main()
