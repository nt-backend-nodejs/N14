// write_to_file.js

import fs  from "fs"

const writeStream = fs.createWriteStream('output.txt');

process.stdin.pipe(writeStream);

