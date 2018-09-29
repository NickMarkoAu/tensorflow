/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let express = require("express");
let app = express();

app.use(function(req, res, next){
    console.log('Server Running...');
    next();
});

app.use(express.static("../client"));
        
app.listen(8081, function () {
    console.log("Serving at 8081")
});
