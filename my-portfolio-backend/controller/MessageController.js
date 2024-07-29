const MessageModel = require("../Model/Message")


const sendMessage = async (req, res) =>{

  MessageModel.create(req.body)
    .then(
      messages => {
        console.log (messages);
        res.send("Message Sent");
      })
    .catch( error => {console.log(error);})

}

module.exports = {sendMessage}