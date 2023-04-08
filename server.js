const express = require("express");

const app = express();
const http = require("http").createServer(app);

const publicdir = __dirname;
app.use(express.static(publicdir, {extensions:["html"]}));
app.use(bodyParser.urlencoded({extended:false}));

const PORT = process.env.PORT || 3000;
http.listen(PORT, function() {
    console.log("Server is running on PORT:", PORT);
});