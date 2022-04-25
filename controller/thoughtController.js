const { Thought } = require("../models");

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(thoughts => res.status(200).json(thoughts))  
            .catch(err => res.status(500).json(err));
    },

    // Get a single thought by its id
    getSingleThought(req, res) {
        Thought.findById(req.params.thoughtId)
            .then(thought => thought ? res.status(200).json(thought) : res.status(404).json({ message: "No thought found with that id!" }))
            .catch(err => res.status(500).json(err));
    }
}