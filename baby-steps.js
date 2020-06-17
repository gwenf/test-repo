const http = require('http');

const port = 8080;

const requestListener = function (req, res) {
  console.log('made a request')
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(port);
console.log('Server running on port: ', port)

// GET, POST, DELETE, PATCH
// {
//   name: '',
//   description: ''
// }

// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]))

// var total = 0
// for (var i = 2; i < process.argv.length; i++) {
//   total += parseInt(process.argv[i])
// }
// console.log(total)

// var total = process.argv.slice(2).reduce((acc, val) => {
//   return parseInt(acc) + parseInt(val)
// })
// console.log(total)
