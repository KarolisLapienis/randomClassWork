const mongoose = require("mongoose")

const directorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "add full name"]
    },
    birthDate: {
        type: Date,
        required: [true, "add birth date"]
    },
    birthCountry: {
        type: String,
        required: [true, "add birth country"]
    },
    oscars: {
        type: Number,
        required: [true, "add oscars count"]
    },
    oscarNominations: {
        type: Number,
        required: [true, "add oscar nominations count"]
    },
},
{
    timestamps: true
})

const Director = mongoose.model("Director", directorSchema)

module.exports = Director