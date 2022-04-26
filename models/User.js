const { Schema, model } = require("mongoose");

// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Please enter a valid email"]
            // validate: {
            //     email: true,
            //     message: "Please enter a valid email"
            // }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }
        ]
    },
    {
        // To include virtuals in the response
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Creates a virtual named friendCount that retieves the length of the user's friends array field on query
userSchema.virtual("friendCount")
    .get(function() {
        return this.friends.length;
    });

// Uses mongoose.model to create a model named user, based on schema named userSchema
const User = model("user", userSchema);

module.exports = User;