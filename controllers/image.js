const router = require("express").Router();
const cloudinary = require("../imageUtility/cloudinary");
const upload = require("../imageUtility/multer");
const Image = require("../models/image");

//* Upload image
router.post("/", upload.single("avatar"), async (req, res) => {
    console.log("req.file", req.file);
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("result", result)
    // Create new image
    let image = new Image({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save image
    await image.save();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});

//* find all images
router.get("/", async (req, res) => {
  try {
    let image = await Image.find();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;