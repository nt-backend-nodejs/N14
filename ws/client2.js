import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('error', console.error);


process.stdout.write('Habaringizni kiriting: ');
ws.on('open', function open() {
  process.stdin.on('data', (data) => {
    const message = data.toString().trim();

    ws.send(`${message}  from 2`);
    // process.stdout.write('Habaringizni kiriting: ');

    // process.exit();
  });

});

ws.on('message', function message(data) {
  console.log(data.toString());
  process.stdout.write('Habaringizni kiriting: ');

});