var h = require('http')
var ser = h.createServer(function(req,res){
    res.statusCode = 200
    res.setHeader('text/html')
    res.write("welcome")
    res.write("<h1>hello</h1>")
    res.end();

});


// var mysql = require('mysql');

// var con = 9