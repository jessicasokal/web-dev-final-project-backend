import mongoose from 'mongoose';
const moviesSchema = mongoose.Schema({
    imdbID: String,
    comments: {type: Array, default: []},
    likes: {type: Number, default: 0}
}, {collection: "movies5"})

export default moviesSchema;