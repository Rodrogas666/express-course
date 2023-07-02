const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.send("lista de productos");
});

app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.patch("/products", (req, res) => {
  res.send("actualizando una parte del productos");
});



app.listen(3000);
console.log(`Servidor en el puerto ${3000}`);

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((res, req)=>{
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Servidor en puerto ${3000}`)
