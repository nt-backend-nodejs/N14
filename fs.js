const fs = require("fs")
const path = require("path")

const dataFilePath = path.join(__dirname , "data.json")
// console.log(dataFilePath)


// fs.readFile(dataFilePath,"utf8", (err, data)=>{
//   if(err){
//     console.error(err)
//     return
//   }

//   console.log(data)
// })


const obj= {
  users: [
    {
    name:"Khamidullo",
    isMettied:false
  },
  {
    name:"Ali",
    isMettied:true
  },
  {
    name:"Maftuna",
    isMerried:false
  }
  ]
}


// fs.appendFile(dataFilePath, JSON.stringify(obj), 'utf8',(err)=>{
//   if(err){
//     console.error(err)
//   }
//   console.log("Successful")

// })



// fs.unlink(dataFilePath,(err)=>{
//   if(err){
//     console.log(err)
//   }
// })



// fs.watch("app.txt", (eventType, filename)=>{
//   console.log({eventType, filename})
// })




const dirPath = path.join(__dirname, "os.js")

// fs.readdir(dirPath, (err, files)=>{
//   if(err){
//     console.error(err)
//   }

//   files.forEach(file=>{
//     console.log(file)
//   })

// })



// fs.stat(dirPath,(err, stats)=>{
//   if(err){
//     console.error(err)
//   }

//   console.log(stats)
// })

fs.stat(dirPath,(err, stats)=>{
  if(err){
    console.error(err)
  }

  if(stats.isFile()){
    console.log("FILE")
  }

  if(stats.isDirectory()){
    console.log("DIR")
  }
  // console.log(stats)
})
//
