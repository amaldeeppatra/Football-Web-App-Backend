const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
}, {timestamps: true});

const News = model("news", newsSchema);

module.exports = News;