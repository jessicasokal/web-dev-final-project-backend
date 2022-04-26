import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    followers: {type: Array, default: []},
    following: {type: Array, default: []},
    isAdmin: {type: Boolean, required: true},
    isWatcher: {type: Boolean, required: true},
    isCreator: {type: Boolean, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    likedMovies: {type: Array, default: []},
}, {collection: "users_final_project"})

export default usersSchema;