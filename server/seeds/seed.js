const db = require("../config/connection");
const { User, Settings, Conversation, Message, Request } = require("../models");
const userData = require("./userData.json");
const settingsData = require("./settingsData.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Settings.deleteMany({});
    await Conversation.deleteMany({});
    await Message.deleteMany({});
    await Request.deleteMany({});

    const settings = await Settings.insertMany(settingsData);
    const users = await User.create(userData);

    for (let newUser of users) {
      newUser.settings =
        settings[Math.floor(Math.random() * settings.length)]._id;
      await newUser.save();
    }
    console.log("seed complete!");
    process.exit(0);
  } catch (err) {
    throw console.log(err);
  }
});
