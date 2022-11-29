const express = require("express");
const ClientsService = require("../services/clients.service");
const service = new ClientsService();
const route = express.Router();

route.get("/", (req, res) => {
  const clients = service.find();
  res.json(clients);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newClient = service.created(data);
  res.status(201).json(newClient);
});

route.put("/:id", (req, res) => {
    const {id} = req.params;
    const change = req.body;
    const updateClient = service.update(id, change);
    res.status(202).json(updateClient);
  });

  route.delete("/:id", (req, res) => {
    const {id} = req.params;
    const deleteClient = service.delete(id);
    res.status(202).json(deleteClient);  
  });

 

module.exports = route;














const express =  require ('express');
const route = express.Router();

route.get('/', (req, res) =>{
    const {clientId, bookId} = req.params
    res.json({
        client_id: clientId,
        book_Id: bookId,
        name: "Patricio",
    });
})



module.exports = route;
