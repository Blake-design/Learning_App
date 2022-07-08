const { model, Schema } = require("mongoose");

const ConversationSchema = new Schema({
  roomName: {
    type: String,
    trim: true,
  },

  participants: [
    {
      type: String,
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
    deafault: false,
  },
});

const Conversation = model("Conversation", ConversationSchema);

module.exports = Conversation;
