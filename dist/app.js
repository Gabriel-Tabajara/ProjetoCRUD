var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import { movieRouter } from './routes/movieRoutes.js';
const app = express();
const dbURI = 'mongodb+srv://morcego:1234@cluster0.b5g905x.mongodb.net/CRUDMovies?retryWrites=true&w=majority';
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(dbURI);
            app.listen(5000, () => console.log('Connected in port 5000'));
        }
        catch (err) {
            console.log('Error in connect with database');
        }
    });
}
connectDb();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/movies', movieRouter);
app.use((req, res) => {
    res.status(404).send(JSON.stringify({ message: 'Route doesn´t exists' }));
});
