const express = require('express');
const path = require('path');
require('dotenv').config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 3000;
let server;

//swagger
const options = {

  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Woowup API',
      version: '1.0.0',
      description: 'API para envio de correos',
      termsOfService: 'https://www.woowup.com',
    },
    docExpansion: 'none',
    components: {
      securitySchemes: {
        bearerAuth: {},
      },
    },
    security: {
      bearerAuth: [],
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [
    `${path.join(__dirname, 'src/api/components/email/emailRouter.js')}`,
  ],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


// Middleware para parsear JSON
app.use(express.json());

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
