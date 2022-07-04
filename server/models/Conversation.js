const { model, Schema, mongoose } = require("mongoose");

const ConversationSchema = new Schema({
  participants: [mongoose.ObjectId],
});

const Conversation = model("Conversation", ConversationSchema);

module.exports = Conversation;
