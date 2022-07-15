import express  from "express";
import mongoose from "mongoose";
import { movieRouter } from './routes/movieRoutes.js';

const app = express();

const dbURI = 'mongodb+srv://morcego:1234@cluster0.b5g905x.mongodb.net/CRUDMovies?retryWrites=true&w=majority';

async function connectDb() {
    try{
        await mongoose.connect(dbURI);
        app.listen(5000, () => console.log('conectou na porta 5000'));
    } catch(err) {
        console.log('Erro no connectDB!');
    }
}

connectDb();

app.set( "view engine", "ejs" );

app.use(express.urlencoded({ extended: true }));

app.use('/movies', movieRouter);