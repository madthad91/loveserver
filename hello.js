var http = require('http');

/*https.get({ host: 'echo.jsontest.com/key/value/one/two', path: '/' }, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);


  res.on('data', function(d) {
    process.stdout.write(d);
  });


}).on('error', function(e) {
  console.error(e);
});*/

var s = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("hello world\n");
  console.log('woah');
  res.end("world\n")

});

s.listen(8000);