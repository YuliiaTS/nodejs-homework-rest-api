const express = require("express");

const ctrl = require('../../controllers/auth')

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const {validateBody} = require("../../middlewares");

const {schemas} = require('../../models/user');

const router = express.Router();

// signup
router.post('/users/register', validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

module.exports = router;