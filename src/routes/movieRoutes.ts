import express from "express";
import * as movieController from '../controllers/movieController.js';

const movieRouter = express.Router();

movieRouter.get('/', movieController.get_movies);

export { movieRouter };