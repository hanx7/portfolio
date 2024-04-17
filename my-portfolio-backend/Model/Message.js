const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = Schema ({
  firstName: String,
  lastName: String,
  message: String
});

const Message = mongoose.model("Message", MessageSchema)
module.exports = Message;