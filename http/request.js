// http_client_post.js
const http = require('http');

const postData = JSON.stringify({
  title: 'Node.js POST so‘rovi',
  body: 'Bu Node.js yordamida yuborilgan POST so‘rovidir.',
  userId: 1
});

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  console.log(`STATUS: ${res.statusCode}`);
  console.log('HEADERS:', res.headers);

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('So‘rov tugadi.');
    console.log('Javob ma‘lumotlari:', JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(`Xato: ${e.message}`);
});

// Ma'lumotlarni yuborish
req.write(postData);

// So‘rovni yakunlash
req.end();
