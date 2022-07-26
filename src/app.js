const express = require("express");
const routes = require("./routes");
const db = require("../src/database");
const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);
app.listen(3500, ()=> console.log("Server running on port 3500!"));

(async()=>{await db.sync();})();