import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from './route/food.route.js'

const app = express();


dotenv.config();

const URI=process.env.MongoDBURI;


    try {
        mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Error: ",error);
    }

app.use("/food",bookRoute)

