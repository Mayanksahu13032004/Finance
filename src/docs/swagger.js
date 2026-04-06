// src/docs/swagger.js
import swaggerJsdoc from "swagger-jsdoc";

export const specs = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance API",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.js"]
});