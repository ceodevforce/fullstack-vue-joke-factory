import mongoose, { Schema, model, connect, connect } from 'mongoose';

interface IJoke {
    id: number;
    joke: string;
    punchline: string;
    createdAt: Date;
}

const jokeSchema = new Schema < IJoke > ({
    joke: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Joke = model < IJoke > ('Joke', jokeSchema);