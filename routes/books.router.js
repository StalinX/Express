const express = require("express");
const BooksService = require("../services/books.service");
const service = new BooksService();
const route = express.Router();

route.get("/", (req, res) => {
  //const { size } = req.query;
  const books = service.find();
  res.json(books);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newBook = service.created(data);
  res.status(201).json(newBook);
});

route.put("/:id", (req, res) => {
    const change = req.body;
    const updateBook = service.update(id, change);
    res.status(204).json(updateBook); // investigar status
  });

  route.delete("/:id", (req, res) => {
    const {id} = req.params;
    const deleteBook = service.delete(id);
    res.status(202).json(deleteBook);  // investigar status
  });

  route.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, precio} = req.body;
    if(name && precio){
      _.each(books, (book, i)=>{
        if(book.id == id){
          book.name = name;
          book.precio = precio;
        }
      });
      res.json(books);
    }else{
      res.status(500).json({error: 'ERRORRRRR'})
    }
  })

module.exports = route;
