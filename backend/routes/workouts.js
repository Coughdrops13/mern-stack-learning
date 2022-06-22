const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});
// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout with :id" });
});
// POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});
// DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a single workout" });
});
// UPDATE a single workout
router.patch("/", (req, res) => {
  res.json({ mssg: "UPDATE  a single workout" });
});

module.exports = router;
