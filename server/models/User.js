const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
      trim: true,
      match: [
        /^[a-z ,.'-]+$/i,
        "Name can only contain A-Z, comma, period, apostrophe, space, and hyphen",
      ],
    },

    username: {
      type: String,
      required: [true, "username required"],
      trim: true,
      match: [
        /^(\d|\w)+$/g,
        "username can not have spaces or special charaters",
      ],
      unique: [true, "sorry that username is already taken"],
      maxLength: [14, "UserName must be less than 14 characters"],
    },

    email: {
      type: String,
      required: [true, "Please enter Email Address"],
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email address.",
      ],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [8, "Password must be greater than 8 characters"],
      maxLength: [25, "Password must be less than 25 characters"],
    },
    bio: {
      type: String,
      trim: true,
      maxLength: [150, "Bio can only be up to 150 characters"],
    },
    avatar: {
      type: String,
      required: true,
      trim: true,
      default: "goldfish.png",
    },
    active: {
      type: Boolean,
      default: false,
    },
    settings: {
      type: Schema.Types.ObjectId,
      ref: "Settings",
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: "Request",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

/// hash password before saving
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

/// check password for login
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

/// custom error for unique errors
UserSchema.post("save", (error, doc, next) => {
  console.log("enter function");
  if (error.name === "MongoServerError" && error.code === 11000) {
    console.log(error);
    next(new Error(`${JSON.stringify(error.keyValue)} already exist`));
  } else {
    console.log("next");
    next();
  }
});

// exporting user model
const User = model("User", UserSchema);
module.exports = User;
