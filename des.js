const startTime = Date.now()

const  arr  = [1,2]
const [a,b] = arr



const sum  = ({x:a, y:b})=>{
console.log({a,b})
  return a + b
}


console.log(
  sum({x:20, y :10}))

const endTime = Date.now()

const diffTime = endTime - startTime
console.log({diffTime})
