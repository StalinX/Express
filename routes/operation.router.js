const express = require("express");
const OperationsService = require("../services/operation.service");
const service = new OperationsService();
const route = express.Router();

route.get("/", (req, res) => {
  //const { size } = req.query;
  const operations = service.find();
  res.json(operations);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newOperation = service.created(data);
  res.status(201).json(newOperation);
});

route.put("/:id", (req, res) => {
    const {id} = req.params;
    const change = req.body;
    const updateOperation = service.update(id, change);
    res.status(202).json(updateOperation); 
  });

  route.delete("/:id", (req, res) => {
    const {id} = req.params;
    const deleteOperation = service.delete(id);
    res.status(202).json(deleteOperation);  
  });

 

module.exports = route;

