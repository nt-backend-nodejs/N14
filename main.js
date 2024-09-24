const o = {
  a:1
}

const obj = Object.create(o)

obj.a = 12

delete obj.a

console.log(obj.__proto__)









function a(){

  if(true){

    console.log(a)
  }

}












// const n = new Number("123456")


// if(typeof n === "number" ){
//   console.log("NUMBER")
// }else{
//   console.log("ELSE")
// }


// const obj = null


// if(typeof obj === "object"  && obj !== null){
//   console.log("OBJ")
// }else{
//   console.log("ELSE")
// }




// const s = "HELLO "
// console.log(s.charAt(0))
// console.log(s.repeat(3))

// for(let i =0; i < s.length; i++){
//   console.log(String.fromCharCode(s.charCodeAt(i) + 5 ))
// }
// const str1 = "SALOM"
// const str2 = "N14"

// const str3 = `${str1} ${str2}`
// const str4 = str1 + " " + str2


// console.log(NaN === NaN)

// let result  = new Number("123")
// let result  =  Number("123")

// console.log(typeof result)
