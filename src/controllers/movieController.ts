import { Movie } from '../models/movie.js';

const get_movies = async(req:any, res:any) => {
    try{
        const result = await Movie.find();
        res.status(200).send(result);
    } catch(err) {
        console.log('Erro no get_movies');
    }
};

export {get_movies};