const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleSaveErrors} = require("../helpers");

const regExp = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        match: regExp,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    phone: Joi.string().pattern(regExp).required(),
    favorite: Joi.boolean(),
  });

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
}

contactSchema.post("save", handleSaveErrors)

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    schemas,
};