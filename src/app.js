const express = require("express");
const routes = require("./routes");
const db = require("../src/database");
const app = express();

db.hasConection();

app.use(express.json());

app.use('/',require('./routes/root'));
app.use('/psicologos',require('./routes/psicologos'));
app.use('/pacientes',require('./routes/pacientes'));
app.use('/atendimentos',require('./routes/atendimentos'));
//app.use('/login',require('./routes/login'));


app.listen(3500, ()=> console.log("Server running on port 3500!"));

(async()=>{await db.sync();})();