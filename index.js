const express = require("express");
const routerApi = require("./routes/index");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Primer server express");
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log(`escuchando desde el puerto ${port}`);
});
