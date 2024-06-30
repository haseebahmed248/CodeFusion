import express from 'express';
import { codeRunner, test } from '../Controller/CodeRunner.js';

const MainRouter = express.Router();

MainRouter.post("/run", codeRunner);
MainRouter.get("/test", test);
MainRouter.get('/',(req,res)=>{
    res.send("hello")
})

export default MainRouter;

