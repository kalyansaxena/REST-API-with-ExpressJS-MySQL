const express = require("express");
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workouts");

const router = express.Router();

// http://localhost:5000/api/workouts
// GET - list of all workouts
router.get("/", getWorkouts);

// http://localhost:5000/api/workouts/1234
// GET - get a single workout
router.get("/:workoutId", getSingleWorkout);

// http://localhost:5000/api/workouts
// POST - create a workout
router.post("/", createWorkout);

// http://localhost:5000/api/workouts/1234
// PUT - update a single workout
router.put("/:workoutId", updateWorkout);

// http://localhost:5000/api/workouts/1234
// DELETE - delete a single workout
router.delete("/:workoutId", deleteWorkout);

module.exports = router;
