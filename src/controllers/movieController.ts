import { Movie } from '../models/movie.js';

const get_movies = async(req:any, res:any) => {
    try{
        const result = await Movie.find();
        res.status(200).send(result);
    } catch(err) {
        console.log('Erro no get_movies');
    }
};

const post_movies = async(req:any, res:any) => {
    try{
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie);
    } catch(err) {
        console.log(err);
    }
};

export {get_movies, post_movies};