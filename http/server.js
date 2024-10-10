const http = require("node:http")
const server = http.createServer((request, response) => {
  console.log({METHOD:request.method})
  // console.log({HEADER:request.headers })
  let body = " "
  request.on("data",(chunk)=>{
    console.log(chunk.toString())
    body += chunk.toString()
  })
  request.on("end",()=>{
    console.log({BODY: body})
  })
  response.writeHead(500, { "Content-Type" : "text/html" })
  response.write("<html> <h1>HELLO HTTP</h1></html>")
  response.end()
})

server.listen(3333, ()=>{
  console.log("Server running on port 3001")
})
