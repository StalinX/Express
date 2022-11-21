const booksRouter = require('./books.router');
//const clientsRouter = require('/clients.router');
const authorsRouter = require('./authors.router');
const operationRouter = require('./operation.router');


const routerApi =(app) =>{
     app.use('./books', booksRouter);
     app.use('./authors', authorsRouter);
     //app.use('./clients/:clientId/books/:bookId', clientsRouter);
    app.use('./operation', operationRouter);
}

module.exports = routerApi;