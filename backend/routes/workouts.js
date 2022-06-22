const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);
// GET a single workout
router.get("/:id", getWorkout);
// POST a new workout
router.post("/", createWorkout);
// DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a single workout" });
});
// UPDATE a single workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE  a single workout" });
});

module.exports = router;
