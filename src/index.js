const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const router = require('./api/router');
const { corsOptions } = require('./services/auth/cors');
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
        url: 'http://localhost:'+PORT,
      },
    ],
  },
  apis: [
    `${path.join(__dirname, 'api/components/email/emailRouter.js')}`,
  ],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.get('/', (req, res) => {
  res.send('Woowup Api Rest V1.0');
});

const startServer = async () => {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(router);
  
  server = app.listen(PORT, (error) => {
    if (error) throw error;

    console.log(`Server running in staging mode on port ${PORT}...`);
  });
};

app.use(express.json());

startServer();
