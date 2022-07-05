const { model, Schema } = require("mongoose");

const MessageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    senderId: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Message = model("Message", MessageSchema);

module.exports = Message;
