//const expresss = require('express')
import Express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from './src/db.js'

dotenv.config()
const port= process.env.PORT 
const app = Express()

app.use(cors())
app.use(Express.json())

app.get('/', (req, res ) => {
    console.log('test home');
    res.send('res ok')
})

async function main(){
    await app.listen(port)
    console.log(`server ok - in port ${port}`)
    await connectDB()
}

main()
