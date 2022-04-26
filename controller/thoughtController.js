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
    },

    // Create a new thought
    createThought(req, res) {
        if (req.body.thoughtText && req.body.username && req.body.userId) {
            Thought.create(req.body)
                .then(thought => {
                    // Push the created thought's _id to the associated user's thoughts array field
                    return User.findByIdAndUpdate(
                        req.params.userId,
                        { $addToSet: { thoughts: thought._id }},
                        { runValidators: true, new: true }
                    )
                })
                .then(user => user ? res.status(200).json(user) : res.status(404).json({ message: "No user found with this id!" }))
                .catch(err => res.status(500).json(err));
        }
        else {
            res.status(404).json({ message: "Request body must contain thoughtText, username and userId" });
        }
    },

    updateThought(req, res) {

    },

    deleteThought(req, res) {

    },

    createReaction(req, res) {

    },

    deleteReaction(req, res) {

    }
};