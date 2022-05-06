import moviesModel from "./movies-model.js";

export const findAllMovies = () => {
    return moviesModel.find()
}
export const findMovieById = (id) => {
    return moviesModel.findById(id)
}
export const findMovieByImdbID = (imdbID) => {
    return moviesModel.findOne({imdbID})
}

export const createMovie = (movie) => {
    return moviesModel.create(movie)
}
export const deleteMovie = (id) => {
    return moviesModel.deleteOne({_id: id})
}
export const updateMovie = (id, updatedMovie) => {
    return moviesModel.updateOne(
        {_id: id},
        {$set: updatedMovie}
    )
}

