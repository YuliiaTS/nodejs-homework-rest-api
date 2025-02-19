const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const func = async(req, res, next) => {
    const { error } = schema.validate(req.body);
    if(error) {
      next(RequestError(400, `Missing fields`));
    }
    next()
  }
  return func;
}

module.exports = validateBody;