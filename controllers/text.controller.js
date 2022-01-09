const {
  textValidationServices,
} = require("../services/text/text.validation.services");

/**
 * controlador para validar texto
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.textValidation = async (req, res) => {
  const { text } = req.query;
  //llamamos a nuestro servicio
  const result = await textValidationServices(text);

  //validamos si se realizo correctamente
  if (!result.valid)
    return res.status(400).send({ error: "no text", msg: "", valid: false });

  res.status(200).send({ ...result, msg: "Texto validado" });
};
