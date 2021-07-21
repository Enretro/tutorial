const os = require("os")

// info about current user
const user = os.userInfo()
// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} sec.`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totelMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)
