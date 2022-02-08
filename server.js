//const expresss = require('express')
import Express from "express";
import dotenv from "dotenv";
import cors from "cors"
import express from "express";

dotenv.config()
const app = Express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res ) => {
    console.log('test home');
    res.send('res ok')
})

app.listen({ port: process.env.PORT || 4000}, async () => {
    console.log('server ok');
})