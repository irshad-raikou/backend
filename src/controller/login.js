
const db = require("../db/db");
const user = db.user

const login = async(req,res)=>{
  try {
    

  if(req.body.username && req.body.password){

    let userFound = await user.findOne({
     where :{
       userName : req.body.username
     }
    })

    if(!userFound){
      const error = new Error('User Not Found');
      error.status = 404;
      throw error;
    }

    if(userFound.password !== req.body.password ){
      const error = new Error('Username or Password not correct');
      error.status = 400;
      throw error;
    }

    res.status(200).send(userFound)
    
  }else{
    const error = new Error('Please enter username and password');
    error.status = 400;
    throw error;
  }
} catch (error) {
  res.status(error.status).send(error.message)
    
}
}


module.exports = {login}