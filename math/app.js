// stdin_example.js

process.stdout.write('Ismingizni kiriting: ');

process.stdin.on('data', (data) => {
  console.log(data)
  const ism = data.toString().trim();
  console.log(`Salom, ${ism}!`);
  process.exit();
});
