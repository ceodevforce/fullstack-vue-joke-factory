import mongoose, { Schema, connect, model } from "mongoose";

interface IUser {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    favoriteJoke: [{ id: number }];
}

const userSchema =
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
    };