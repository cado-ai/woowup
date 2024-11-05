const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const { apiUrl } = require('./config');
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
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access these api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: {
      bearerAuth: [],
    },
    servers: [
      {
        url: apiUrl,
      },
    ],
  },
  apis: [
    `${path.join(__dirname, 'api/components/auth/authRouter.js')}`,
    `${path.join(__dirname, 'api/components/email/emailRouter.js')}`,
  ],
};

const specs = swaggerJsdoc(options);

app.get('/', (req, res) => {
  res.send('Woowup Solutions Architecture 1.0');
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

const startServer = async () => {


  server = app.listen(PORT, (error) => {
    if (error) throw error;
    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(router);
    console.log(`Server running in staging mode on port ${PORT}...`);
  });
};

startServer();
