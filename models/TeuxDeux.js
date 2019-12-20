// // THis file gets required into another file and contains a 
// // function that returns the model of the teux deux
const Sequelize = require ("sequelize");
// attachs model to the db 
 class TeuxDeux extends Sequelize.Model { }

    module.exports = (sequelize, DataTypes) => {
        class Project extends Sequelize.Model { }
        TeuxDeux.init({
         task: {
             type: DataTypes.STRING,
             allowNull: false
         },
         done: {
             type: DataTypes.BOOLEAN,
             defaultValue: false,
         }
        }, { sequelize , modelName: "TeuxDeux"});

        TeuxDeux.sync();

        return TeuxDeux;
      };

