require('..')('http', 'file = fs', './package');

http.createServer().listen(function () {
  console.log('http server started.');
});

file.readdir('./', function () {
  console.log('fs.readdir success.');
});

console.log(package);