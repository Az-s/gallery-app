const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true,
    }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;