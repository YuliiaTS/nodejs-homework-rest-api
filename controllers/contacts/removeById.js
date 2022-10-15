const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw RequestError(404, `Not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: result,
  });
};

module.exports = removeById;
