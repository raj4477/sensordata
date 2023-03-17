require('dotenv').config()
var express = require('express')
const mongoose = require('mongoose');

var router = require("./routes/api_routes")


var app = express();  
app.use(express.json())



const uri ='mongodb+srv://rajritik200177:zCmEmuEDk2d3dK83@cluster0.yyefuuu.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(uri,{useNewUrlParser: true})
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })  

app.get('/', function (req,res){
    res.send('Hello')
})

app.use("/api/v1",router)