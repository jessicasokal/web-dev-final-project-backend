import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    followers: {type: Array, default: []},
    following: {type: Array, default: []},
    isAdmin: {type: Boolean, required: true, default: false},
    isWatcher: {type: Boolean, required: true, default: true},
    isCreator: {type: Boolean, required: true, default: false},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    likedMovies: {type: Array, default: []},
    comments: {type: Array}
}, {collection: "users_final_project"})

export default usersSchema;