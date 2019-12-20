// Dependencies
// =============================================================
const Character = require("../models/character.js");
const db = require("./models");

// Routes
// =============================================================
module.exports = function(app) {
  // use app to set up API routes
   
  // If a user sends data to add a new character...
  app.post("/api/teuxdeuxes/", async function(req, res) {
     const teuxdeux = await db.TeuxDeux.create({task: req.body.name})
     res.json(todo);
})


app.get("/api/teuxdeuxes/", async function(req, res) {
    // findAll returns all entries for a table when used with no options
    const teuxdeux = await db.TeuxDeux.findAll({}).then(function(dbTeuxDeux) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTeuxDeux);
    });
  });

// app.delete();
