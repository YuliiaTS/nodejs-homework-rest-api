const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const getBuId = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);

  if (!result) {
    throw RequestError(404, `Not found`);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getBuId;
