import express from "express";
import * as movieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get('/', movieController.get_movies);
movieRouter.get('/:id', movieController.get_movie);

movieRouter.post('/', movieController.post_movies);

//Fazer um post de array

movieRouter.delete('/', movieController.delete_movies_by_body);
movieRouter.delete('/:id', movieController.delete_movies_by_param);

movieRouter.put('/', movieController.put_movies_by_body);

export { movieRouter };