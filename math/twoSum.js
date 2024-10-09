// calculator.js

process.stdout.write('Birinchi sonni kiriting: ');

let numbers = [];

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (!isNaN(input)) {
    numbers.push(Number(input));
    if (numbers.length < 2) {
      process.stdout.write('Ikkinchi sonni kiriting: ');
    } else {
      const sum = numbers[0] + numbers[1];
      console.log(`Yig'indi: ${sum}`);
      process.exit();
    }
  } else {
    console.log('Iltimos, son kiriting.');
    process.exit(1);
  }
});

