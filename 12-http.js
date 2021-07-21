const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to en home page")
  }
  if (req.url === "/about") {
    res.end("here is en short history")
  }
  res.end(`
  <h1>Oopss!</h1>
  <p>En can not find page en is looing for</p>
  <a href="/">back to en home page</a>
  `)
})

server.listen(3000)
