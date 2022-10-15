const express = require("express");

const ctrl = require("../../controllers/contacts");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const validateBody = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getBuId));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
