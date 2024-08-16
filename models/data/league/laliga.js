const { Schema, model } = require("mongoose");

const laligaSchema = new Schema({
  rank: { type: String, default: "" },
  img: { type: String, default: "" },
  club: { type: String, required: true },
  mp: { type: String, required: true },
  wins: { type: String, required: true },
  draw: { type: String, required: true },
  losses: { type: String, required: true },
  gf: { type: String, required: true },
  ga: { type: String, required: true },
  gd: { type: String, required: true },
  pts: { type: String, required: true },
  streak: { type: String, required: true }
}, { timestamps: true });

const Laliga = model('laliga', laligaSchema);

module.exports = Laliga;