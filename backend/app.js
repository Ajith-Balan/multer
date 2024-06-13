import express from "express"
import connection from "./connection.js"
import router from "./router.js"
import cors from 'cors';
import env from 'dotenv'

env.config()
const app=express()

app.use(express.static('../frontend'))
app.use(cors())
app.use(express.json({limit:"20mb"}))
app.use('/api',router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    })
}).catch((error)=>{
    console.log(error);
})