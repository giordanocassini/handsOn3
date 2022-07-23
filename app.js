const express = require("express");
const app = express();
const db = require("./src/database");
const PORT = 3000;

/* (async () => {
  try {
    const result = await db.sync();
    console.log("deu boa");
  } catch (error) {
    console.log("deu erro");
  }
})();
db.hasConnection(); */

app.use(express.json());
app.use("/", require("./src/routes/root"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
