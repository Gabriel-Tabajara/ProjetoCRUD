import express  from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import { movieRouter } from './routes/movieRoutes.js';

const app = express();

const dbURI = 'mongodb+srv://morcego:1234@cluster0.b5g905x.mongodb.net/CRUDMovies?retryWrites=true&w=majority';

async function connectDb() {
    try{
        await mongoose.connect(dbURI);
        app.listen(5000, () => console.log('Connected in port 5000'));
    } catch(err) {
        console.log('Error in connect with database');
    }
}

connectDb();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  

app.use('/movies', movieRouter);

app.use((req: any , res: any) => {
    res.status(404).send(JSON.stringify({ message: 'Route doesn´t exists'}));
});