var express = require("express");
var cf = require("../cf");
//importar controladores
const validationstxt = require("../controllers/text.controller");

var app = express.Router();

var swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger/swagger.json");

app.use(cf.routeApiDocs, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", function (req, res, next) {
  res.send("API " + cf.projectName + " works").status(200);
});

/**
 * @swagger
 * /iecho:
 *   get:
 *     summary: "envio de palabra"
 *     description: Devuelve una palabra al reves y validacion palindromo
 *     tags: [Text validation]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/text"
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: No autorizado.
 *       400:
 *         description: Error en la validación o Error en los Headers.
 */
app.get("/iecho", validationstxt.textValidation);

module.exports = app;
