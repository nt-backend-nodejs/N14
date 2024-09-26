const map = new Map()

// const map = new Map(
//   // [
//   //   [ "name", "ali" ],
//   //   ["age"],
//   // ]
// )

// console.log(map)

//1. set
map.set("a", "b")
map.set("isStudent", true)
map.set("isStudent", function(){
  console.log("MAP")
})
const arr = [1,2,3]
// const arr2 = arr

// console.log(arr  === arr2)
const obj = {
  name:"ali"
}

map.set(obj, "object")
map.set(arr, [1,2,3,4])
map.set(true, {
  name: "bek",
  greet(){
    console.log(`Hello ${this.name}`)
    return `Hello ${this.name}`
  }
})
// console.log(map)
// 2. get
// console.log(map.get("isStudent")())
// console.log(map.get({"name":"ali"}))
console.log(map.get(arr))
//3. has
// console.log(map.has(arr))
//4. delete
// console.log(map)
// console.log("AFTER")
// map.delete(arr)
// console.log(map)
// console.log(
//   map.get(true).greet()
// )
//5. size

// console.log(map)
// console.log(map.size)
map.size = 12
// map.clear()
// console.log(map.entries())
const mapArr = map.entries()

// mapArr.forEach((value, key)=>{
//   console.log(`Value: ${value}, Key: ${key}`)
// })


for( [value, key] of map){
  console.log(value," \n", key)
}
// console.log(map.entries())

//6. clear


const {name, age}  = {}
const [first, secound] = []

console.log({
  name:"ali"
} === {
  name :"ali"
})
