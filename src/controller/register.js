const db = require("../db/db");
const user = db.user

const register = async (req,res)=>{
  try {

  let userFound = await user.findOne({
    where :{
      userName : req.body.username,
    }
  })

 

  if(userFound){
    const error = new Error('User already exists');
    error.status = 400;
    throw error;
  }



  let userCreated = await user.create({
    firstName : req.body.firstname,
    lastName : req.body.lastname,
    userName : req.body.username,
    password : req.body.password,
    email : req.body.email,
    contact  : req.body.contact,
    dob : req.body.dob
  });


  res.send(userCreated)
      
} catch (error) {
  // console.log(error);
  res.status(400).send(error.message)
}
}

module.exports = {register}