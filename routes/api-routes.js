const db = require("../models");

module.exports = function(app) {
  // use app to setup api routes

  //route to create a todo
  app.post("/api/todos/", async function(req, res) {
    console.log(">>>>>>>>>>>", req.body)
    const todo = await db.Todo.create({ task: req.body.task });
    res.json(todo);
  });
  //route to get all the todos
  app.get("/api/todos", (req, res) => {
    db.Todo.findAll({}).then(todos => {
      res.json(todos);
    });
  });
};
