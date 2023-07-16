const http = require('http');

const server = http.createServer((req, res) =>
{
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
});
server.listen(3000);

// server.on('connection',(socket) => {
//     console.log('New Connection');
// });

console.log('Simple Server Listening on port 3000...');