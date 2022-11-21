const express =  require ('express');


const route = express.Router();

route.get('/',(req, res)=>{
    res.json({
        id: 1,
        name: "Stalin",
        lastname: "Riofrio",
        edad: 30
    });
});

module.exports = route;
