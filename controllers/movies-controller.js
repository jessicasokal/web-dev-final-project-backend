import * as moviesDao from '../database/movies/movies-dao.js';

const findAllMovies = async (req, res) => {
    const movies = await moviesDao.findAllMovies()
    res.json(movies)
}
const findMovieByID = async (req, res) => {
    const id = req.params['id']
    const movie = await moviesDao.findMovieById(id)
    res.json(movie)
}
const findMovieByImdbID = async (req, res) => {
    const id = req.params.imdbID
    const movie = await moviesDao.findMovieByImdbID(id)
    res.json(movie)
}

const createMovie = async (req, res) => {
    const newMovie = req.body
    const insertedMovie = await moviesDao.createMovie(newMovie)
    res.json(insertedMovie)
}
const deleteMovie = async (req, res) => {
    const movieID = req.params.id
    const status = await moviesDao.deleteMovie(movieID)
    res.json(status)
}
const updateMovie = async (req, res) => {
    const movieID = req.params.id
    const updatedMovie = req.body
    const status = await moviesDao.updateMovie(
        movieID,
        updatedMovie
    )
    res.json(status)
}

const movieController = (app) => {
    app.get('/api/movies', findAllMovies)
    app.get('/api/movies/:imdbID', findMovieByImdbID)

    app.post('/api/movies', createMovie)
    app.delete('/api/movies/:id', deleteMovie)
    app.put('/api/movies/:id', updateMovie)

}

export default movieController;
