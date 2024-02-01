const Director = require("../models/Director")

// @ Create directors
// @ POST /api/directors

const createDirector = async(req, res) => {
    if(!req.body.name || !req.body.birthDate || !req.body.birthCountry || !req.body.oscars || !req.body.oscarNominations) {
        res.status(404).send("data is missing")
    }

    const director = new Director(
        {
            name: req.body.name,
            birthDate: req.body.birthDate,
            birthCountry: req.body.birthCountry,
            oscars: req.body.oscars,
            oscarNominations: req.body.oscarNominations,
        }
    )
    const result = await director.save()
    res.status(200).send(result)
}


// @ Get all directors
// @ GET /api/directors

const getAllDirectors = async(req, res) => {
    const allDirectors = await Director.find()
    
    if(!allDirectors) {
        res.status(404).send("data is missing")
        return
    }
    res.status(200).json(allDirectors)
}


// @ Get director by ID
// @ GET /api/directors/:id
const getDirectorByID = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id)

        if (!director) {
            return res.status(404).send("Director not found")
        }
        res.status(200).send(director)
    } catch (error) {
        console.error(`Error fetching director by ID: ${error.message}`)
        res.status(500).send("Internal Server Error")
    }
};

// @ update director
// @ PUT /api/directors/:id

const updateDirector = async(req, res) => {
    try {
        const director = await Director.findById(req.params.id)

        if (!director) {
            return res.status(404).send("Director not found")
        }
        console.log("Director updated succesfully")
        director.name = req.body.name
        const result = director.save()
        res.status(200).send(result)
    } catch (error) {
        console.error(`Error fetching director by ID: ${error.message}`)
        res.status(500).send("Internal Server Error")
    }
}

// @ delete director
// @ DELETE /api/directors/:id

const deleteDirector = async(req, res) => {
    const director = await Director.findById(req.params.id)

    if(!director) {
        res.status(404).send("Director not found")
        return
    }
    const result = await director.deleteOne({_id: req.params.id})
    res.status(200).send(result)
}

module.exports = { createDirector, getAllDirectors, getDirectorByID, updateDirector, deleteDirector }