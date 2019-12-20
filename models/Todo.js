const Sequelize = require('sequelize')

// Create the function for the 
// magic index file to make
// the things work
module.exports = function(sequelize, DataTypes){
  // make a class to get attached to the db
  class Todo extends Sequelize.Model { }

  // define the schema
  Todo.init({
    task: {
      type:DataTypes.STRING,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, { sequelize, modelName: 'Todo' });

  // make every thing work with db
  // do this in the index for the server
  // Todo.sync();

  // return it so it is on the db 
  // and we can use it!
  return Todo;
}