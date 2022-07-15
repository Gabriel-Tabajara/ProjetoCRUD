import express  from "express";
import mongoose from "mongoose";

const app = express();

const dbURI = 'mongodb+srv://morcego:1234@cluster0.b5g905x.mongodb.net/CRUDMovies?retryWrites=true&w=majority';

async function connectDb() {
    try{
        await mongoose.connect(dbURI);
        console.log('Conectou');
    } catch(err) {
        console.log(err);
    }
}

connectDb();
