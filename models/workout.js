const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workOutSchema = new Schema({
  exercises: [{
    type: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    distance: { type: Number, required: true },
    weight: { type: Number, required: true },
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
  }],
  day: {
    type: Date,
    default: () => new Date()
  }
}
);
const Workout = mongoose.model("Workout", workOutSchema);
module.exports = Workout;