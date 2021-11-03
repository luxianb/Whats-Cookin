const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes");

//* Routes
//* Initial Seed
router.get("/seed", async (req, res) => {
  await Recipe.deleteMany({});

  const eggsBenedict = new Recipe({
    name: "Eggs Benedict",
    description: "The no. 1 Breakfast Egg",
    tags: ["Beginner", "Egg"],
    time: { hour: 0, minutes: 20 },
    ingredients: [
      { name: "Eggs", unit: "", amount: 4 },
      { name: "White/Rice Vinegar", unit: "tbs", amount: 2 },
      { name: "Butter", unit: "g", amount: 100 },
      { name: "Chopped Parsley", unit: "tbs", amount: 2 },
    ],
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ab/bf/5e/eggs-ben-with-bacon-delicious.jpg",
    steps: [
      {
        title: "Bring the poaching water to a simmer",
        body:
          "Bring a large saucepan two-thirds-filled with water to a boil, then add the vinegar. Bring the water to a boil again, then lower the heat to a bare simmer.",
      },
    ],
  });
  await eggsBenedict.save();

  const chickenRice = new Recipe({
    name: "Chicken Rice",
    description: "The only rice you need",
    tags: ["Beginner", "Chicken", "Asian Cuisine"],
    time: { hour: 2, minutes: 0 },
    ingredients: [
      { name: "Rice", unit: "cups", amount: 2 },
      { name: "Chicken", unit: "kg", amount: 1 },
      { name: "Garlic", unit: "cloves", amount: 4 },
    ],
    picture:
      "https://asianinspirations.com.au/wp-content/uploads/2019/07/R00376-Hainanese_Chicken_Rice-2.jpg",
    steps: [
      {
        title: "Cook the rice",
        body: "Wash rice, add pandan leaves, cook rice",
      },
      { title: "Steam chicken", body: "Season chicken with salt and steam" },
    ],
  });
  await chickenRice.save();

  res.send([eggsBenedict, chickenRice]);
});

//? Index (All)
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

//? Create
router.post("/new", async (req, res) => {
  const mealName = req.body.mealName;
  const description = req.body.description;

  console.log(mealName + description);

  const recipes = new Recipe({
    name: mealName,
    description: description,

  });

  try {
    await recipes.save();
    res.send("Recipe Saved");
  } catch (err) {
    console.log(err);
  }
});

// router.post("/new", async (req, res) => {
//   console.log("body", req.body);
//   const recipes = await Recipe.create(req.body, (err, createRecipe) => {
//     console.log("req.body",req.body)
//     console.log("recipe created", createRecipe);
//   });
//   res.json(recipes);
// });


//? Show
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recipies = await Recipe.findById(id);
  res.json(recipies);
});

//? Edit
router.put("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const recipies = await Recipe.findByIdAndUpdate(id, req.body);
  res.json(recipies);
});

//? Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Recipe.findByIdAndDelete(id);
    //? SEND BACK THE RESULT TO REACT SO IT CAN UPDATE
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
