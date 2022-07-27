const express = require("express");
const db = require("../src/database");
const app = express();
const handleError = require('./middlewares/handleError')
db.hasConection();

app.use(express.json());

// rotas

app.use("/", require("./routes/root"));
app.use("/psicologos", require("./routes/psicologos"));
app.use("/pacientes", require("./routes/pacientes"));
app.use("/atendimentos", require("./routes/atendimentos"));
app.use('/login',require('./routes/login'));

// validação

app.use(handleError);

app.listen(3500, () => console.log("Server running on port 3500!"));

(async () => {
  await db.sync();
})();
