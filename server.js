// server.js
const http = require('http');
const Router = require('./router');

const PORT = 3000;
const router = new Router();

// Yo'naltirishlarni belgilash
router.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Asosiy sahifa');
});

router.get('/about', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Haqqimizda sahifasi');
});

router.post('/data', (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ received: body }));
  });
});

const server = http.createServer((req, res) => {
  const routeHandler = router.findRoute(req);
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlamoqda`);
});

