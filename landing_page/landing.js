// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // what file are we looking for?
    var file;
    // use the switch to evaluate what the request.url was entered as
    switch (request.url) {
        case "/":
            file = "index.html";
            break;
        case "/ninjas":
            file = "ninjas.html";
            break;
        case "/dojos/new":
            file = "dojos.html";
            break;
        default:
            file = null;
            break;
    }
    // If we have a file from above...
    if(file != null) {
        fs.readFile(file, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.end('Nice try ;) File not found though!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");