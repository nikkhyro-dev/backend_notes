
const express = require("express");
const path = require("path")
const mainRouter = require('./router/index')
const app = express();
const apiKeyMiddleWare = require('./router/index')
const productsRouter = require('./router/products')


app.set("view engine","ejs")

// app.use(express.static('public'))
// applie on evey middleware but its a router.

// app.use(mainRouter)
// app.use(express.static('public'))

// if we directly applie middle ware in main file .
app.use(productsRouter)

app.use(apiKeyMiddleWare);


const PORT = process.env.PORT||3000;
// create server .
app.listen(PORT, () => {
  console.log("listimg on port 3000");
});
