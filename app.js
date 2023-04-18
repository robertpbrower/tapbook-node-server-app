import express from "express"
import session from "express-session";
import cors from 'cors'
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//   || 'mongodb://127.0.0.1:27017/tuiter'


const CONNECTION_STRING = "mongodb+srv://tapbook:tapbook@tapbook.pnqdkdg.mongodb.net/tapbook"

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
mongoose.connect(CONNECTION_STRING);
app.use(express.json());
UsersController(app);
app.listen(process.env.PORT || 4000)