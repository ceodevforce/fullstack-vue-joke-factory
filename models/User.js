import mongoose, { Schema, connect, model } from "mongoose";
import md5 from 'md5'

interface IUser {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    favoriteJoke: [{ id: number }];
}

const UserSchema =
    new Schema() <
    IUser > {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        favoriteJoke: {
            type: [Schema.Types.ObjectId],
            ref: "Joke",
        },
        avatar: {
            type: String,
        }
    };
// Create and add a avatar
UserSchema.pre("save", function(next) {
    // const address = String(email).trim().toLowerCase();

    // Create an MD5 hash of the final string
    const hash = md5(this.username);
    this.avatar = `https://www.gravatar.com/avatar/${hash}`;
    next()
})

UserSchema.pre("save", function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash
            next()
        })
    })
})



export const Joke = model < IUser > ("User", UserSchema)