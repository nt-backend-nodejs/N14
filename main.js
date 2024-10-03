// const obj  = {
//   name:"ali",
//   greet(){
//     console.log(this)
//   }
// }



// const add = function (a,b){
//   console.log(arguments)
//   return this
// }

// console.log(globalThis === add(1,2))


// // obj.greet()




// --------

// const person = {
//   firstName:"ali",
//   lastName:"Valiyev",
// }

// function greet(a,b ){
//   console.log({a,b})
//   console.log({this:this})
// }

// const result = greet.call(person, "salom")
// const result2 = greet.call({age:13}, "salom")
// const result3 = greet.call({isMeried:false}, "salom")
// // const result = greet("salom", "salom")

// apply
// const result = greet.apply(person,[ "salom"])
// const result2 = greet.apply({age:13}, "salom")
// const result3 = greet.apply({isMeried:false}, "salom")
// console.log(result)





// const person = {
//   firstName : "Guli",
//   lastName : "Aliyeva"
//     greet(){
//       console.log(this)
//       console.log(arguments)
//     }
// }


// const greet = function(a,b,c,d){
//  console.log(this)
//  console.log(a,b,c,d)
// }

// console.log(
//   greet.prototype
// )

// greet.apply(person,[12,1,23,14])






// const person = {
//   firstName : "Guli",
//   lastName : "Aliyeva",
//     greet(){
//       console.log(`Hello my name is ${this.firstName} and my last name is ${this.lastName}.`)
//     }
// }




// const newThis = {
//   firstName : "Abdulaziz",
//   lastName : "Aliyev"
// }

// person.greet.call(newThis, "s","sasa","Sas" )
// person.greet.apply(newThis, [ "s","sasa","Sas"] )



// ----


const person = {
  firstName : "Guli",
  lastName : "Aliyeva",
    greet(a){
      console.log(a)
      console.log(`Hello my name is ${this.firstName} and my last name is ${this.lastName}.`)
    }
}




const newThis = {
  firstName : "Abdulaziz",
  lastName : "Mirzayev"
}

const result = person.greet.bind(newThis, "sasasa")("ARGUENNT")

// console.log(result("adkjbaskdbkjasbfjasbfjb"))
