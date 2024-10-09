const path = require("node:path")


// console.log(__dirname)
// console.log(__filename)

// console.log(import.meta.dirname)




const filePath = "/home/khamidullo/najot_talim/n-14/asa.dulloni"

// console.log(filePath.split("."))
// console.log(path.basename(filePath))
// console.log(path.extname(filePath))

// console.log(path.join(__dirname, "math", "index.js"))
//
//
const appFilePath = path.resolve("app.txt")

const parsedFilePath = path.parse(appFilePath)


// console.log(parsedFilePath)
const filePathObj = {
  root: '/',
  dir: '/home/khamidullo/najot-talim/n-14',
  base: 'app.txt',
  ext: '.txt',
  name: 'app'
}

// /home/khamidullo/najot_talim/n-14/es.js

console.log(path.format(filePathObj))



//
//
// soc
