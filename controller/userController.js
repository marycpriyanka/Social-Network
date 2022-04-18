const { User } = require("../models");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json(err));
    },

    // Post a new user
    createUser(req, res) {
        if (req.body.username && req.body.email) {
            User.create(req.body)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json(err));
        }
        else {
            res.status(404).json("Request body must contain username and password");
        }
    }
}