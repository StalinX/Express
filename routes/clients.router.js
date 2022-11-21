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
