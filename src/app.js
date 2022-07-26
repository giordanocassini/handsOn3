const express = require("express");
const routes = require("./routes");
const db = require("../src/database");
const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);
app.listen(3000, ()=> console.log("Server running on port 3000!"));

(async()=>{await db.sync();})();