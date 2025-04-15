const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));