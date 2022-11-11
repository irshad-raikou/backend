const express = require("express")
var cors = require('cors')
const app = express() 
const db = require('./src/db/db')
const { register } = require("./src/controller/register")
const { userData } = require("./src/controller/user")
const { login } = require("./src/controller/login")

app.use(cors())
app.use(express.json());

// database sync
db.sequelize.sync({ alter: false })  
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  app.post('/register',register)

  app.post('/login',login)

  app.get('/users',userData)

  app.get('/',(req,res)=>{
    res.send("hello")
  })

//listening to port
app.listen(5000, () => {
  console.log(`Server is up on http://localhost:5000`);
});
