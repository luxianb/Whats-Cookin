const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const mealPlanSchema = Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "recipe" },
    currentStep: Number,
    shoppingList: [
      { name: String, unit: String, amount: Number, got: Boolean },
    ],
  },
  { timestamps: true }
);

const MealPlan = model("mealPlan", mealPlanSchema);

module.exports = MealPlan;
