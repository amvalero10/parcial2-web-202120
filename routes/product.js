var express = require('express');
var router = express.Router();

const Products = require("../controllers/product")
const dat =  require("../assets/data")

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {

  //res.send( res.json(dat) )

  res.send( res.json( Products ))

}); 


// router.get("/:name", function (req, res) {

//   CentroTuristico.findOne(req.params.id).then((result) => {

//     if (result === null) { return res.status(404).send("El centro turistico con el id dado no fue encontrado."); }



//     res.send(result);

//   });

// });






module.exports = router;
