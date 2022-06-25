const db = require("../config/connection");
const { User, Settings } = require("../models");
const userData = require("./userData.json");
const settingsData = require("./settingsData.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Settings.deleteMany({});
    const settings = await Settings.insertMany(settingsData);
    const users = await User.insertMany(userData);

    for (newUser of users) {
      newUser.joined = Date.now();
      newUser.settings =
        settings[Math.floor(Math.random() * settings.length)]._id;
      await newUser.save();
    }
    console.log("seed complete!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
