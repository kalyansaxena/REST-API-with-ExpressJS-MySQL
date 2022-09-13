const Workout = require("../models/workout");

const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.findAll();
    res.status(200).json({
      success: true,
      workouts,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleWorkout = async (req, res, next) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    res.status(400);
    return next(new Error("Workout Id is required"));
  }

  try {
    const workout = await Workout.findOne({ where: { id: workoutId } });

    if (!workout) {
      res.status(400);
      return next(new Error("Workout not found"));
    }

    res.status(200).json({
      success: true,
      workout,
    });
  } catch (error) {
    next(error);
  }
};

const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  console.log(title, reps, load);

  if (!title || !reps) {
    res.status(400);
    return next(new Error("title & reps fields are required for request body"));
  }

  // Some exercises/workouts may not have load/weight, Hence load will be taken as 0 if not provided during request
  let loadValue;
  if (!load) {
    loadValue = 0;
  } else {
    loadValue = load;
  }

  try {
    const workout = await Workout.create({
      title,
      reps,
      load: loadValue,
    });

    res.status(201).json({
      success: true,
      workout,
    });
  } catch (error) {
    next(error);
  }
};

const updateWorkout = async (req, res, next) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    res.status(400);
    return next(new Error("Workout Id is required"));
  }

  if (Object.keys(req.body).length === 0) {
    res.status(400);
    return next(new Error("request body is required"));
  }

  try {
    // Check if workout exists before updating
    const workout = await Workout.findOne({ where: { id: workoutId } });

    if (!workout) {
      res.status(400);
      return next(new Error("Workout not found"));
    }

    const updatedWorkout = await Workout.update(req.body, {
      where: { id: workoutId },
    });

    res.status(200).json({
      success: true,
      updatedWorkout,
    });
  } catch (error) {
    next(error);
  }
};

const deleteWorkout = async (req, res, next) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    res.status(400);
    return next(new Error("Workout Id is required"));
  }

  try {
    // Check if workout exists before deletion
    const workout = await Workout.findOne({ where: { id: workoutId } });

    if (!workout) {
      res.status(400);
      return next(new Error("Workout not found for deletion"));
    }

    await Workout.destroy({ where: { id: workoutId } });

    res.status(200).json({
      success: true,
      message: "Workout deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
