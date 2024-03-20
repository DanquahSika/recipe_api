import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv  from 'dotenv';
import recipes from  './routes/recipe.routes.js';
import mongoose from "mongoose";

// load env variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//  load routes
app.use(recipes);

// Make database  connection
await mongoose.connect(process.env.MONGO_URI)

// server starter
app.listen(6000, () => {
    console.log("Express is running" )
});

