/**
 * 
 * @param {string} name 
 * @returns 
 */

function greet(name) {
  console.log(name)
  return ""
}


greet(name)



// function calc({ num2, num1 }) {
//   console.log(num1, num2)
//   console.log(arguments)
// }

// const a = 12
// // calc({ num1: 1, num2: 2 })

// {

//   const b = 10
// }
// const obj = {
//   name: "ALI",
//   age: 22,
//   isMerried: false
// }

// const { name: ismi, age: yoshi } = obj
// // const name = obj.name
// // const age = obj.age

// console.log(ismi, yoshi)





// function calc(...args) {
//   console.log(args)
//   if (true) {
//     const c = 12
//   }
// }

// calc(...[11, 22, 44, 1, 2, 3, 4, 5, 6])
// calc(..."SALOM")



// const arr1 = [1, 2, 2, 4, 5];
// const arr2 = [6, 7, 5, 9];
// const arr3 = [...arr2, ...arr1]

// const obj1 = { name: "Azli", age: 11 }
// const obj2 = { age: 2 }
// const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)
























// function calc() {

// }

// calc(11, 22, 44, 1, 2, 3, 4, 5, 6)




// function processUserInput(callback) {
//   const name = prompt("NAME?")
//   callback(name)
// }

// const logger = function (str) {
//   console.log(`Hello ${str}`)
// }

// processUserInput(logger)




// function greet(name, callback) {
//   callback(name)
// }


// function greet2(name, callback) {
//   callback(name)
// }
// function greet3(name, callback) {
//   callback(name)
// }
// function greet4(name, callback) {
//   callback(name)
// }
// function greet5(name, callback) {
//   callback(name)
// }


// // function callback(str) {
// //   console.log(str)
// // }

// function logger(str) {
//   alert(`Hello ${str}`)
// }

// // function calcTwoNum(a, b) {
// //   return a + b
// // }


// greet("ALI", logger)
// greet2("SALIM", logger)
// greet3("KARIM", logger)
// greet4("XALIM", logger)
// greet5("XALIM", logger)












// function reverStr(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     // res = res + str[i]
//     res += str[i]
//   }
//   return res
// }



// /**
//  * 
//  * @param {string} str 
//  * @returns 
//  */
// function reverStr(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     // res = res + str[i]
//     res += str[i]
//   }
//   return res
// }



// alert(reverStr("XAMIDULLO"))


// const greet = (name) => `Hello ${name}`

// const greet2 = (name) => {
//   console.log(`Hello ${name}`)
//   return `Hello ${name}`
// }

// const result = greet("ALi")

// console.log(result)


// (function (str) {
//   let sum = 0
//   const len = str.length
//   for (let i = 0; i < len; i++) {
//     const diget = str[i]
//     if (Number(diget)) {
// sum = sum + +diget
//       sum = sum + Number(diget)
//     }
//   }
//   console.log(sum)
// })("123sd3d4f5")

// sumOfDigets("123sd3d4f5")



// function sumOfDigets(str) {
//   let sum = 0
//   const len = str.length
//   for (let i = 0; i < len; i++) {
//     const diget = str[i]
//     if (Number(diget)) {
//       // sum = sum + +diget
//       sum = sum + Number(diget)
//     }
//   }
//   console.log(sum)
// }

// sumOfDigets("123sd3d4f5")




// // console.log(greet)
// greet("Ali")

// function greet(name) {
//   console.log(`Hello ${name}`)
// }

// let greet = function (name) {
//   console.log(`Hello ${name}`)
// }

// const greet = function (name) {
//   console.log(`Hello ${name}`)
// }
