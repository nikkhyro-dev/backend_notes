
const router = require("express").Router();

router.get("/products", (req,res) =>{
res.render("products" ,{title:"PRODUCTS TITLE PAGE"} )

})

module.exports = router;