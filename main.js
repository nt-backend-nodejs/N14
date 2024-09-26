const cache = {}

const sum = (num)=>{
  const result = cache[num]
  if(result){
    console.log("CACHED")
  return cache[num]
  }

 const data =  Math.floor(((num*100+0.1)**10) + 1)
 cache[num] = data

return data
}

console.time("t")
const result = sum(10000)
const result1 = sum(10000)
const result2 = sum(10000)
const result3 = sum(10000)
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.timeEnd("t")




const s = "javascript"

const arr = [...new Set(s)]
console.log(arr)
