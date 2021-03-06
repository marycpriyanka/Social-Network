const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            // Sets default value to current timestamp
            default: Date.now,
            // Getter method to format the timestamp on query.
            get: (date) => {
                if (date) {
                    return date.toLocaleDateString();
                }
            }
        },
        // The user that created this thought
        username: {
            type: String,
            required: true
        },
        // Replies
        reactions: [reactionSchema]
    },
    {
        // To include virtuals in the response
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Creates a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount")
    .get(function() {
        return this.reactions.length;
    });

// Uses mongoose.model to create a model named thought, based on schema named thoughtSchema
const Thought = model("thought", thoughtSchema);

module.exports = Thought;