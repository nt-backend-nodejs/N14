import http from "node:http"
import fs from "node:fs"
import path from "node:path"


import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 5050 });


wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    console.log({ message: data.toString() })
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });


  ws.send('something');
});

const readFile = (path) => {
  const html = fs.readFileSync(path, 'utf8')
  // const data = JSON.parse(json)

  return html
}



const server = http.createServer((req, res) => {
  console.log({ METHOD: req.method })
  console.log({ URL: req.url })

  if (req.method === "POST" && req.url === "/chat") {

    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })

    req.on("end", () => {
      const message = body
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    })

  }

  const htmlFilePath = path.join(import.meta.dirname, "..", "static", "index.html")
  const htmlData = readFile(htmlFilePath)
  res.writeHead(200, { "Content-Type": "text/html" })

  res.write(htmlData)
  res.end()
})


server.listen(5000, () => {
  // console.log(server)
  console.log(`Server is running on port ${5000}`)
})
