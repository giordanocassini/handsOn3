const express = require("express");
const routes = require("./routes");

const db = require("../src/database");

const app = express();

(async () => {
    try {
      const result = await db.sync();
      console.log("deu boa");
    } catch (error) {
      console.log(error);
    }
  })();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(3500, ()=> console.log("servidor rodando na porta 3500"));
