const { model, Schema } = require("mongoose");

const ConversationSchema = new Schema({
  roomName: {
    type: String,
    trim: true,
  },

  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isGroupchat: {
    type: Boolean,
    default: false,
  },
});

const Conversation = model("Conversation", ConversationSchema);

module.exports = Conversation;
