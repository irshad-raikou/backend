const { Sequelize, DataTypes } = require('sequelize');


let sequelize = ""

sequelize = new Sequelize("form", "root", "", {
  host: 'localhost',
  logging: false,
  dialect: 'mysql'
}); 

(async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.js")(sequelize, DataTypes);

module.exports = db;