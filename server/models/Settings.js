const { model, Schema } = require("mongoose");

const SettingsSchema = new Schema({
  theme: {
    type: String,
    default: "light",
    required: true,
    trim: true,
  },
  showActive: {
    type: Boolean,
    default: true,
    required: true,
  },
  shareEmail: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Settings = model("Settings", SettingsSchema);

module.exports = Settings;
