const {
  textValidationServices,
} = require("../services/text/text.validation.services");

exports.textValidation = async (req, res) => {
  const { text } = req.query;
  const result = await textValidationServices(text);

  if (!result.valid)
    return res.status(400).send({ error: "no text", msg: "", valid: false });

  res.status(200).send({ ...result, msg: "Texto validado" });
};
