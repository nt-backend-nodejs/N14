const EventEmitter = require("events")

const event = new EventEmitter()

const callback = (message) => {
console.log(message)
}


event.on("sms", callback)
event.on("sms", (msg) => {
  console.log({msg})
})


event.on("sms", (msg) => {
  console.log({message:msg})
})
event.once("promoCode", (message) => {
  console.log({message})
})

event.emit("sms", "emeit mul")

event.removeListener("sms", callback)

event.emit("sms", "emeit mul")

// event.emit("promoCode", "salom EVENT")

// event.emit("promoCode", "salom EVENT")
// event.emit("promoCode", "salom EVENT")
// event.emit("promoCode", "salom EVENT")
// event.emit("promoCode", "salom EVENT")
