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

const delete_movies_by_body = async(req:any, res:any) => {
    try{
        const id = req.body._id;
        const find = await Movie.findByIdAndDelete(id);
        if(find === null){
            res.status(200).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        }else{
            res.status(200).send(JSON.stringify({ message: `The movie ${id} has been deleted` }));
        }
    } catch(err) {
        console.log(err);
    }
};

const put_movies_by_body = async(req:any, res:any) => {
    try{
        const id = req.body._id;
        const movie = await Movie.findById(id);
        if(movie === null){
            //res.status(200).send(JSON.stringify({ message: `The movie ${id} doesn´t exists` }));
        } else {
            await Movie.replaceOne({ _id: id }, { 
                title: req.body.title || movie.title,
                rating: req.body.rating || movie.rating,
                genre: req.body.genre || movie.genre,
                duration: req.body.duration || movie.duration
            });
           const uptdMovie = await Movie.findById(id);
            res.status(200).send(uptdMovie);
        }
    } catch(err) {
        console.log(err);
    }
};

export {
    get_movies, 
    post_movies, 
    delete_movies_by_body,
    put_movies_by_body
};