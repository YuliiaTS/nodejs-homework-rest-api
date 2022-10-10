const express = require('express');

const contacts = require("../../models/contacts");

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await contacts.listContacts();

    res.json({ status: "success", code: 200, data: result });
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);

    if(!result) {
      const error = new Error(`Contact ${contactId} is not found`);
      error.status = 404;
      throw error;
      // return res.status(404).json({
      //   status: "error",
      //   code: 404,
      //   message: `Contact ${contactId} is not found`,
      // })
    }
    res.json(result)
  } catch (error) {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
      message,
    })
    // next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await contacts.addContact(body)
    res.json(result)
  } catch (error) {
    next(error);
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId)
    res.json(result)

  } catch (error) {
    next(error);
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, body)
    res.json(result)

  } catch (error) {
    next(error);
  }
})

module.exports = router
