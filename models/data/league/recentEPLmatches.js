const { Schema, model } = require("mongoose");

const recentEPLMatchesSchema = new Schema({
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

const RecentEPLMatches = model("recentEPLmatches", recentEPLMatchesSchema);

module.exports = RecentEPLMatches;