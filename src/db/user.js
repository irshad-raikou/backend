module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password  : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email  : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob : {
      type:  DataTypes.DATE,
      allowNull: false
    },
   
  },{
    timestamps:false
  });
  return User
}