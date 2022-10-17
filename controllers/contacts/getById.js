const {Contact} = require("../../models/contact")

const { RequestError } = require("../../helpers");

const getBuId = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw RequestError(404, `Not found`);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getBuId;
