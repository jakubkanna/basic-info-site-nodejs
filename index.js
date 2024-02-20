const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading index.html: ${err}`);
      }

      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(data); // Send the contents of index.html file as the response
    });
  } else {
    // If the requested URL is not "/", send a 404 Not Found response
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
