import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import MainRouter from './Routes/MainRouter.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/code", MainRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});