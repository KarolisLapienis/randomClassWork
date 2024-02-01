const Movie = require("../models/Movie")

// @ Create movie
// @ POST /api/movies

const createMovie = async(req, res) => {
    if(!req.body.title || !req.body.releaseDate || !req.body.genre || !req.body.oscars || !req.body.oscarNominations) {
        res.status(404).send("data is missing")
    }

    const movie = new Movie(
        {
            title: req.body.title,
            releaseDate: req.body.releaseDate,
            genre: req.body.genre,
            oscars: req.body.oscars,
            oscarNominations: req.body.oscarNominations,
        }
    )
    const result = await movie.save()
    res.status(200).send(result)
}

// @ Get all movies
// @ GET /api/movies
const getAllMovies = async(req, res) => {
    const allMovies = await Movie.find()

    if(!allMovies) {
        res.status(404).send("data is missing")
        return
    }
    res.status(200).json(allMovies)
}

// @ Get movie by ID
// @ GET /api/movies/:id

const getMovieByID = async(req, res) => {
    const movie = await Movie.findById(req.params.id)

    if(!movie) {
        return res.status(404).send("Movie not found")
    }
    res.status(200).send(movie)
}

// @ update movie
// @ PUT /api/movies/:id

const updateMovie = async(req,res) => {
    const movie = await Movie.findById(req.params.id)

    if(!movie) {
        return res.status(404).send("Movie not found")
    }

    movie.title = req.body.title
    const result = await movie.save()
    res.status(200).send(result)
}

// @ delete movie
// @ DELETE /api/movies/:id

const deleteMovie = async(req, res) => {
    const movie = await Movie.findById(req.params.id)

    if(!movie) {
        return res.status(404).send("Movie not found")
    }

    const result = await movie.deleteOne({_id: req.params.id})
    res.status(200).send(result)
}

module.exports = {createMovie, getAllMovies, getMovieByID, updateMovie, deleteMovie}
