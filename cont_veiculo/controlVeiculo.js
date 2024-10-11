const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get("/vehicle_page", (req,res)=>{
    res.render("vehicles/vehicles-page");
})

router.get("/cadastro-veiculos", (req,res)=>{
    res.render("vehicles/cadastro-vehicles");
})

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({extended: true}));     ------------------THIS IS THE BASIC------------------

// router.get("/perfil_page", (req,res)=>{
//     res.render("perfil/perfil-page");
// })

// module.exports = router;