const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "add title"]
    },
    releaseDate: {
        type: Date,
        required: [true, "add release date"]
    },
    genre: {
        type: String,
        required: [true, "add genre/genres"]
    },
    oscars: {
        type: Number,
        required: [false, "add oscars count"]
    },
    oscarNominations: {
        type: Number,
        required: [false, "add oscar nominations count"]
    },
},
{
    timestamp: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;