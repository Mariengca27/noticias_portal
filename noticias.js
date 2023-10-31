var http = require('http');

var servidor = http.createServer(function(req,res){

res.end("<html><body>Portal de notícias</body></html>");
});

servidor.listen(3000);

