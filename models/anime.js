const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    name: {
        type: String,
            required: true
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comments: [
        {
        name: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = anime = mongoose.model('anime', AnimeSchema)