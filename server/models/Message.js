const { model, Schema, default: mongoose } = require("mongoose");

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  senderId: mongoose.ObjectId,
  timeSent: Date,
});

const Message = model("Message", MessageSchema);

module.exports = Message;
