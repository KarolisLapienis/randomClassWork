const User = require("../models/User.js")

// @ Create user
// @ POST /api/users

const createUser = async(req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) {
        res.status(404).send("data is missing")
    }

    const user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
    )
    const result = await user.save()
    res.status(200).send(result)
}

module.exports = createUser


// @ Get ALL users
// @ GET /api/users

const getAllUsers = async(req, res) => {
    const allUsers = await User.find()
    if(!allUsers){
        res.status(404).send("data is missing")
        return
    }
    res.status(200).json(allUsers)
}


// @ Get One user
// @ GET /api/users/:id

const getUserByID = async(req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404).send("data is missing")
        return
    }
    res.status(200).send(user)
}

// @ update user
// @ PUT /api/users/:id

const updateUser = async(req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404).send("data is missing")
        return
    }
    user.name = req.body.name
    const result = user.save()
    res.status(200).send(result)

}

// @ delete user
// @ DELETE /api/users/:id

const deleteUser = async(req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404).send("data is missing")
        return
    }

    const result = await user.deleteOne({_id: req.params.id})
    res.status(200).send(result)
}


module.exports = { createUser, getAllUsers, getUserByID, updateUser, deleteUser}