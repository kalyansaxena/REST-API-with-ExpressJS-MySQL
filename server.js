const express = require("express");
const { connectDB } = require("./config/database");
const { errorHandler } = require("./middlewares/error");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();

// Init express app
const app = express();

// connect to the db
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
