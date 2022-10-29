const express = require("express");

const ctrl = require("../../controllers/contacts");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const {validateBody, isValidId, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.getBuId));

router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.removeById));

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
