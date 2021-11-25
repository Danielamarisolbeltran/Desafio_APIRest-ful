let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = 3000
require("./routes/productsRoutes.js")(app);

 
let server = app.listen(PORT, function () {
  
  let host = server.address().address
  let port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);
});

