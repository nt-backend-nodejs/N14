const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42



















// const person = {
//   name: "XAmidullo",
//   age: 1234,
//   /// hammasoni yozib bo'lib


//   getFullInformation() {
//     console.log(`Asssalomu alaykum Men ${this.name}`)
//   }
// }




// const obj = {
//   name: "john",
//   greet:()=> {
//     const a =function () {
//       const b = () =>{
//           console.log(this);
//       }
//       b()
//     }
//     a()
//   }
// }

// obj.greet()






// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
//     a() {
//         console.log(this);
//     }
    
// }

// const john = {
//   __proto__ : Person.prototype
// }
// // const john = new Person("John");

// john.name = "ALI"; // "Hello, my name is John"
// john.greet(); // "Hello, my name is John"
// john.a()
// // 
// console.log(john.__proto__); // true
// // console.log(Person.prototype.__proto__ === Object.prototype.__proto__ ); // true
// console.log(Object.prototype.__proto__ ===null); // true
