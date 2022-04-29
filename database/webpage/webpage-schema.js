import mongoose from 'mongoose';
const webpageSchema = mongoose.Schema({
    profiles: {type: Array, default: []},
    genericMovies: {type: Array, default: []}
}, {collection: "webpage_final_project"})

export default webpageSchema;