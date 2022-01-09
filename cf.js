//variables generales
module.exports = {
  projectName: "2022-backend-base-toolbox",
  // ------------- CONSTANTES  --------------
  allowMethods: "GET,PUT,POST,DELETE",
  allowHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-filename, Content-disposition",
  allowExpose: "x-filename, Content-disposition",
  allowOrigin: "*",

  //variables de configuracion
  routeApiDocs: "/api-docs",
  host: "localhost",
  port: parseInt(8000),
  messageTerminal: "Backend base nodejs",
  nodeEnvironment: "development",
};
