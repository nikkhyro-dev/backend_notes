const router = require("express").Router();
const apiKeyMiddleWare = require('../middlewares/apiKey')

//To use router level means applie on evey router . 
// router.use(apiKeyMiddleWare) . 
// applied on every middleware. index and about too . 

 
router.get("/", (req, res) => {
  res.render("index", { title: "index html file" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "about html file" });
});

router.get("/api/products", apiKeyMiddleWare,(req, res) => {
  res.json([
    { id: 123, name: "chrome" },
    { id: 12345, name: "firefox" },
  ]);
});

// these are also exists . . .

module.exports = router;
  

