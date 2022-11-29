const express = require("express");
const AuthorsService = require("../services/authors.service");
const service = new AuthorsService();
const route = express.Router();

route.get("/", (req, res) => {
  //const { size } = req.query;
  const authors = service.find();
  res.json(authors);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newAuthor = service.created(data);
  res.status(201).json(newAuthor);
});

route.put("/:id", (req, res) => {
    const {id} = req.params;
    const change = req.body;
    const updateAuthor = service.update(id, change);
    res.status(202).json(updateAuthor); 
  });

  route.delete("/:id", (req, res) => {
    const {id} = req.params;
    const deleteAuthor = service.delete(id);
    res.status(202).json(deleteAuthor);  
  });

 

module.exports = route;

