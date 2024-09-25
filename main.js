// const arr = ["n",1,2,3,4,5,6,7,8,9,"A"]
// const arr = [1,2,3,4,5,6,7,8,9]

// // arr = 12
// console.log(arr)
// console.log(arr.push("A"))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)

// console.log(arr)
// console.log(arr.unshift(0))
// console.log(arr.unshift(-1))
// console.log(arr)

// console.log(arr)
// console.log(arr.unshift(0))
// console.log(arr.unshift(-1))
// console.log(arr)

// console.log(arr)
// console.log(arr.shift())
// console.log(arr)





// --------- LOOP--------
// 1. for
// 2. for of
// for (let item of arr){
//     console.log(`item : ${item}`)
// }
// 3. for in
  // for (let index in arr){
  //   console.log(index)
  //   console.log(`index: ${index}, item : ${arr[index]} `)
  // }
// 4. forEach
// const callback = (item, index, arr)=>{
//   if(item ==5){
//     return
//   }
//   console.log(`Item : ${item}, Index:O ${index}, Arr: ${arr}`)
// }
// arr.forEach(callback)
// arr.forEach((item)=>{
//   console.log(item)
// })


// 5. map


// const newArr = arr.map((item) => typeof item === "number" ? item.toString() : item);
// const newArr = arr.map((item) => typeof item === "number" ? item.toString() : item);

// const callback = (item) => typeof item === "number" ? item.toString() : item
// const newArr = arr.map();

// console.log(arr)
// console.log("AFTER")
// console.log(newArr)

// for (let i =0; i< 10;i++) console.log(i)


// 6. FILTER

// const newArr = arr.filter((item)=> typeof item !== "number" )
// console.log(newArr)

// 7. EVERY

// const newArr = arr.every((item)=> typeof item === "number")
// console.log(newArr)

// 7. SOME

// const arr = ["n",1,2,3,4,5,6,7,8,9,"A"]
// const arr = [1,2,3,4,5,6,7,8,9]
// const newArr = arr.some((item)=> typeof item !== "number")
// console.log(newArr)

// 7. reduce

// const arr = [..."salom dunyo najot"]
// console.log(arr)
//  const arr = [1,2,3,4,5,6,7,8,9,"12"]
// // const arr = [1,2,3,4,5,6,7,8,9]
// const newarr = arr.reduce((acc, num)=> acc+ num, 0)
// console.log(newarr)

// 8. find

//  const arr = [1,2,3,"a", 4,5,6,7,8,9,"12"]
// // const arr = [1,2,3,4,5,6,7,8,9]
// const newarr = arr.find((item)=> typeof item =="string")
// console.log(newarr)

// 9. sort

//  const arr = [1,2,3,"a", 4,5,6,7,8,9,"12"]
// // const arr = [1,2,3,4,5,6,7,8,9]
// const newarr = arr.sort()
// console.log(newarr)
// console.log("12".charCodeAt(0))


// const arr = [1,2,3,4,5,6,7,8,23,9]
// const arr = [1,[2,3,[4]],[5,["a",["b",["a"]]],6],[7,[8,9]]]
// const newArr = arr.flat(100)

// const arr = ["Ali", "Vali", "Gani"]
// const newArr = arr.flatMap((item)=> item.split(""))
// const newArr2 = arr.map((item)=> item.split(""))
// console.log(newArr,"\n", newArr2)



// method chain
// const arr = [1,2,3,4,5,6,7,8,23,9]

// const result = arr
//   .filter(item=> item%2)
//   .map(item=>item**2)
//   .reduce((acc, num)=>acc+num, 0)

// console.log(result)


// console.log(typeof  [,,,,,,,6,,][0])
// console.log( [,,,,,,,6,,1])
//
// const arr = [1,2,3,4,5,6,7,8,23,9]


// console.time("A")
// for(let i =0; i < arr.length; i++){
//   // console.log(i)
// }
// console.timeEnd("A")


// console.log(arr)


// console.log("AFTER")

// console.log([...arr].sort((a,b)=>b-a))
// console.log(arr)



// const arr  = ["A", "B","C","D"]

// arr.splice(1,2)
// arr.splice(1, 0, "M","N")

// console.log(arr)



// const arr = [1]


// const arr1  =  arr.concat([2,3,4,5], [6,7,8])
// console.log(arr1)



// const arr = ["SALOM", "DUNYO", "NAJOT"]

// const newArr =  arr.join(", ")

// console.log(newArr)



console.log(new Array(100).fill("a"))










//
