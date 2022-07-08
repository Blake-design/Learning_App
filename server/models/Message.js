const { model, Schema } = require("mongoose");

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    convo: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
    },
  },
  { timestamps: true }
);

const Message = model("Message", MessageSchema);

module.exports = Message;
