const express = require("express");

const ctrl = require("../../controllers/contacts");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getBuId));

router.post("/", ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", ctrlWrapper(ctrl.updateById));

module.exports = router;
