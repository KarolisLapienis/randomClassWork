const express = require("express")
const app = express()
app.use(express.json())

// importing function that connects to DB
const connectingDB = require("./config/db")

// reading all info from .env file
require("dotenv").config();

// connecting to DB
connectingDB();

// importing director controllers
const { createDirector, getAllDirectors, getDirectorByID, updateDirector, deleteDirector} = require("./controllers/directorControllers")

// creating directors nodeJS routes
app.post("/api/directors", createDirector)
app.get("/api/directors", getAllDirectors)
app.get("/api/directors/:id", getDirectorByID)
app.put("/api/directors/:id", updateDirector)
app.delete("/api/directors/:id", deleteDirector)

// importing movie controllers
const { createMovie, getAllMovies, getMovieByID, updateMovie, deleteMovie} = require("./controllers/movieControllers")

// creating movies nodeJS routes
app.post("/api/movies", createMovie)
app.get("/api/movies", getAllMovies)
app.get("/api/movies/:id", getMovieByID)
app.put("/api/movies/:id", updateMovie)
app.delete("/api/movie:id", deleteMovie)



app.listen(process.env.PORT, () => {
    console.log("Server is runing on" + process.env.PORT);
  });