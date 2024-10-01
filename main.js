const promise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    resolve("URAAAA")
  // resolve("ERROR")
  }, 10000)
})

function add(a,b){
  return a+b
}

// const async = async()=>{

// }


const result = await promise
console.log(result)
// async function asynFunc(){
//   try{
//     console.log("ABC")

//     console.log("3 ", result)
//     console.log("HELLO")
//   }catch(error){
//     console.error("2 ",error)
//   }
// }

// asynFunc()

console.log("1 ", add(10,20))






// promise.then((data)=>{
//   console.log(data)
// }).catch(e=>{
//   console.log(e)
// })




const promise = new Promise(function(resolve, reject){
  const random  = Math.floor(Math.random() *10 )+1
  if(random % 2  != 0){
    reject("TOQ")
  }

  resolve("JUFT")

})

console.log(promise)




// setTimeout(function(){
//   console.log("10 secound after")
// }, 10000)


// let i = 0
// setInterval(function(){
//   console.log({i})
//   i++
// },1000)

// try {

//   Object.sasmalsla()
// // 0/1  // throw new Error("XATO")
// } catch(e) {
//   if(e instanceof ReferenceError)
//       console.error("Xato".e)
//   else
//         console.log("BOSHQA XATO",e)
// }




// class Person{}


// const obj = Object.create(Person)

// // obj.toString()

// console.log(obj)
// console.log(obj instanceof Object)
