import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    duration: {
        type: Number,
        min: 0,
        required: true
    }
},  { versionKey: false });

const Movie = mongoose.model('Movie', movieSchema);

export { Movie };