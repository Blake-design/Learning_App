const db = require("../config/connection");
const { User, Settings, Conversation, Message, Request } = require("../models");
const userData = require("./userData.json");
const settingsData = require("./settingsData.json");

db.once("open", async () => {
  try {
    /// destory all documents
    await User.deleteMany({});
    await Settings.deleteMany({});
    await Conversation.deleteMany({});
    await Message.deleteMany({});
    await Request.deleteMany({});

    // create new documents
    const settings = await Settings.insertMany(settingsData);
    const users = await User.create(userData);

    // destructure all user ids
    const allUserIds = users.map((user) => user._id);

    /// for each user
    for (let newUser of users) {
      // seed a random settings document
      newUser.settings =
        settings[Math.floor(Math.random() * settings.length)]._id;

      // seed  every other user as a friend
      newUser.friends = allUserIds.filter((id) => id !== newUser._id);
      await newUser.save();
    }
    console.log("seed complete!");
    process.exit(0);
  } catch (err) {
    throw console.log(err);
  }
});
