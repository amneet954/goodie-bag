const router = require("express").Router();
const Candy = require("../db/models/Candy");

router.get("/", async (req, res) => {
  const candies = await Candy.findAll();
  res.json(candies);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const candy = await Candy.findById(id);
  res.json(candy);
});
module.exports = router;
