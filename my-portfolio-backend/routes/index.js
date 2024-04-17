const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const app= express();

mongoose.connect('mongodb://localhost:27017/portfolio')
  .then( r => console.log("connected success"+r) )
  .catch( e => {
    console.log(e);
  })
;



const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const MessageSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String
})

const UserModel = mongoose.model("users", UserSchema);
const MessageModel = mongoose.model("messages", MessageSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getMessages", (req, res) =>{
  MessageModel.find({})
    .then( users =>{
      console.log("users: "+users);
      res.json(users);
  }).catch(function (error){
    res.send("error");
  })

})

  router.get("/getUsers",( req,res ) =>{
    UserModel.find({}).then(function (users) {
      res.json(users)
    }).catch(function (err) {
      console.log(err);
    })
  })

  router.post("/sendMessages", (req, res)=>{
    MessageModel.create(req.body)
      .then(
          messages => { console.log (messages);
          res.send("Message Sent");
        })
      .catch( error => {console.log(error);})

  })

  // router.get("/getMessages",( req,res ) =>{
  //   MessageModel.find({}).then(function (users) {
  //     res.json(users)
  //   }).catch(function (err) {
  //     console.log(err);
  //   })
  // })


module.exports = router;
