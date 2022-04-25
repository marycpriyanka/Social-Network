const { Thought } = require("../models");

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(thoughts => res.status(500).json(thoughts))  
            .catch(err => res.status(500).json(err));
    },
}