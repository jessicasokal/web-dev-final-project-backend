import mongoose from 'mongoose';
const moviesSchema = mongoose.Schema({
    imdbID: String,
    comments: Array,
    likes: Number
}, {collection: "movies_final_project"})

export default moviesSchema;