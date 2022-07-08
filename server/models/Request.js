const { model, Schema } = require("mongoose");

const RequestSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
});

const Request = model("Request", RequestSchema);
module.exports = Request;
