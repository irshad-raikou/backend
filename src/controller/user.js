const db = require("../db/db");
const user = db.user

const userData = async(req,res)=>{
  
  try {
    

  let users = await user.findAll()

  res.status(200).send(users)
} catch (error) {
  res.status(400).send(error.message)  
}
}

module.exports = {userData}