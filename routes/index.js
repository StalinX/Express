const booksRouter = require("./books.router.js");
const clientsRouter = require('./clients.router');
const authorsRouter = require("./authors.router.js");
const operationRouter = require("./operation.router");
const express = require('express')
const routerApi = (app) => {
    const route = express.Router();
    app.use('/api/v1', route)
  route.use("/books", booksRouter);
  route.use("/authors", authorsRouter);
  route.use('/clients', clientsRouter);
  route.use("/operation", operationRouter);
};

module.exports = routerApi;
