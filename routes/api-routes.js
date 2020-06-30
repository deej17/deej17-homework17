var db = require("../models");
//most important
module.exports = function (app) {
  app.put("/api/workouts/:id", (req, res) => {
    //console.log("before creating", req);
    console.log("put function ", req.params.id);
    console.log("put function ", req.body);
    db.Workout.findByIdAndUpdate(
      req.params.id, { $push: { exercises: req.body } }, { new: true }
    )
      .then(dbworkout => {
        res.json(dbworkout);
        console.log("result", dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/api/workouts", ({ body }, res) => {
    console.log("before creating", body);
    db.Workout.create(body)
      .then(dbworkout => {
        res.json(dbworkout);
        console.log("result", dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}