const { model, Schema } = require("mongoose");

const ActiveUsersSchema = new Schema({
  active: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const ActiveUsers = model("ActiveUsers", ActiveUsersSchema);
module.exports = ActiveUsers;
