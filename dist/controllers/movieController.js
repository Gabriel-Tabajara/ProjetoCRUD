var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Movie } from '../models/movie.js';
const get_movies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Movie.find();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404);
    }
});
const get_movie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const find = yield Movie.findById(id);
        if (find === null) {
            res.status(404).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        }
        else {
            res.status(200).send(find);
        }
    }
    catch (err) {
        res.status(404);
    }
});
const post_movies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new Movie(req.body);
        yield movie.save();
        res.status(201).send(movie);
    }
    catch (err) {
        res.status(404);
    }
});
const delete_movies_by_body = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body._id;
        const find = yield Movie.findByIdAndDelete(id);
        if (find === null) {
            res.status(404).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        }
        else {
            res.status(200).send(JSON.stringify({ message: `The movie ${id} has been deleted` }));
        }
    }
    catch (err) {
        res.status(404);
    }
});
const delete_movies_by_param = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const find = yield Movie.findByIdAndDelete(id);
        if (find === null) {
            res.status(404).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        }
        else {
            res.status(200).send(JSON.stringify({ message: `The movie ${id} has been deleted` }));
        }
    }
    catch (err) {
        res.status(404);
    }
});
const put_movies_by_body = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body._id;
        const movie = yield Movie.findById(id);
        if (movie === null) {
            res.status(404).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        }
        else {
            yield Movie.replaceOne({ _id: id }, {
                title: req.body.title || movie.title,
                rating: req.body.rating || movie.rating,
                genre: req.body.genre || movie.genre,
                duration: req.body.duration || movie.duration
            });
            const uptdMovie = yield Movie.findById(id);
            res.status(200).send(uptdMovie);
        }
    }
    catch (err) {
        res.status(404);
    }
});
export { get_movies, post_movies, delete_movies_by_body, put_movies_by_body, get_movie, delete_movies_by_param };
