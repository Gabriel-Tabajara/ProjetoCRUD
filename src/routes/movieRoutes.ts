import express from "express";
import * as movieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get('/', movieController.get_movies);

movieRouter.post('/', movieController.post_movies);

//Fazer um post de array

movieRouter.delete('/', movieController.delete_movies_by_body);

//Fazer um delete de movies/:id
export { movieRouter };