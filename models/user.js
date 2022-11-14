const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const emailRegexp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const User = model("user", userSchema);

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).trim().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).trim().required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).trim().required(),
});

const schemas = {
    registerSchema,
    loginSchema, 
    verifyEmailSchema,
}

module.exports = {
    User,
    schemas,
}




