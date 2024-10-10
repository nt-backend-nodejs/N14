const fs  = require("fs")
const path = require("path")
const readline = require("readline")

const rl = readline.createInterface(
  {
    input:process.stdin,
    output:process.stdout
  })




https://ray.so/#code=CgogIDsKICAoKCk9PnsKCiAgICAvLyBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2WzJdCiAgICBybC5xdWVzdGlvbigiRmlsZSBwYXRobmkga2lyaXRpbmc6ICIsIChwYXRoKSA9PiB7CgogICAgICBmcy5yZWFkRmlsZShwYXRoLnRyaW0oKSwgInV0ZjgiLCAoZXJyLCBkYXRhKSA9PiB7CiAgICAgICAgY29uc29sZS5sb2coZGF0YS50b1N0cmluZygpKQogICAgICB9KQogICAgfSkKICB9KSgp&background=false&darkMode=false&padding=16
  (()=>{

    // const args = process.argv[2]
    rl.question("File pathni kiriting: ", (path) => {

      fs.readFile(path.trim(), "utf8", (err, data) => {
        console.log(data.toString())
      })
    })
  })()
