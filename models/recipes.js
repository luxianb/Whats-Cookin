// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const recipeSchema = Schema(
  {
    name: { type: String },
    description: { type: String },
    tags: [String],
    time: {
      hour: Number,
      minutes: { type: Number, min: 0, max: 59 },
    },
    ingredients: [{ amount: Number, unit: String, name: String }],
    picture: String,
    steps: [{ title: String, body: String }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

//* should be singular not plural
const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;

// const recipeSchema = Schema(
//   {
//     name: { type: String },
//     description: { type: String },
//     tags: [String],
//     time: {
//       hour: Number,
//       minutes: { type: Number, min: 0, max: 59 },
//     },
//     ingredients: [{ amount: Number, unit: String, name: String }],
//     picture: String,
//     steps: [{ title: String, body: String }],
//     // owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
//   },
//   { timestamps: true }
// );

// const recipeSchema = Schema(
//   {
//     name: { type: String },
//     description: { type: String },
//     tags: [String],
//     hours: { type: Number },
//     minutes: { type: Number, min: 0, max: 59 },
//     amount: { type: Number },
//     unit: { type: String },
//     ingridientName: { type: String },
//     picture: { type: String },
//     title: { type: String },
//     body: { type: String },
//     // owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
//   },
//   { timestamps: true }
// );