const { Schema, model } = require("mongoose");

const recentLaligaMatchesSchema = new Schema({
    teamLogo: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    opponentLogo: {
        type: String,
        required: true
    },
    opponentName: {
        type: String,
        required: true
    },
    opponentScore: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {timestamps: true});

const RecentLaligaMatches = model("recentLaligamatches", recentLaligaMatchesSchema);

module.exports = RecentLaligaMatches;