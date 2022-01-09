const swaggerJSDoc = require("swagger-jsdoc");
const json = require("./swagger.util");

const cfg = require("../../cf");

const name = cfg.projectName;
const port = cfg.port;

// Inicio - Configuraciones pertinentes a SwaggerJSDoc
const swaggerDefinition = {
  info: {
    // Información de API (requerida)
    title: `API - ${name}`, // Título (requerido)
    version: "1.0.0", // Versión (requerida)
    description: `Documentación de API ${name}`, // Descripción (Opcional)
  },
  host: cfg.host + `:` + parseInt(port), // Host (Opcional)//cfg.host,
  basePath: cfg.basePath, // Base path (Opcional)
  schemes: ["http", "https"],
};

// Opciones de Swagger
const options = {
  // Importando swaggerDefinitions
  swaggerDefinition,

  apis: [
    "./routes/*.js",
    "./swagger/definitions/*.definitions.yaml",
    "./swagger/parameters/*.parameters.yaml",
  ],
};

// Inicializar swagger-jsdoc -> Devuelve especificaciones de swagger validadas en formato json
const swaggerSpec = swaggerJSDoc(options);

// Fin - Configuraciones pertinentes a SwaggerJSDoc
function init() {
  json.saveJSON(JSON.stringify(swaggerSpec));
}
module.exports.init = init;
