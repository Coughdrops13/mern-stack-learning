const Workout = require("../models/workoutModel");

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ created_at: -1 });
  res.status(200).json(workouts);
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById({ id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout." });
  }

  res.status(200).json(workout);
};
// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add document to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// DELETE a single workout

// UPDATE a single workout

module.export = { getWorkouts, getWorkout, createWorkout };
