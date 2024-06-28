import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import MainRouter from './Routes/MainRouter.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

app.use("/code",MainRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}`)
})