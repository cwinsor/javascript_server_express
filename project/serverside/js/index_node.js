"use strict"

const http = require('http');
const port = 3030

const requestListener = (req, res) => {
    console.log("request received...\n");
    console.dir(res, { depth: 0});

    //<meta charset="utf-8" />

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello from NodeJs server\n');
    res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(port, () => {
    console.log('Server is running on port ' + port);

});


