const contacts = require("../../models/contacts");

const getAll = async (req, res, next) => {
    try {
      const result = await contacts.listContacts();
  
      res.json({ status: "success", code: 200, data: result });
    } catch (error) {
      next(error);
    }
  }

  module.exports = getAll;