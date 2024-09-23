const obj = {
  name: 12,
  age:  21
};
console.log(obj.__proto__ === Object.prototype); // true


const arr = [];
console.log(arr.__proto__ === Array.prototype); // true







const obj = {};
obj.__proto__ = { a: 1 };
console.log(obj.a); // 1

obj.__proto__.a = 2;
console.log(obj.a); // 2



const a = {
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const user = {
    name: "Liam",
    __proto__: a
};

user.greet(); // "Hello, Liam"




const proto = {
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};


const user = Object.create(proto);
user.name = "Liam";
user.greet(); // "Hello, Liam"

// Prototipni olish
console.log(Object.getPrototypeOf(user) === a); // true

// Prototipni o'zgartirish
const newProto = {
    farewell: function() {
        console.log(`Goodbye, ${this.name}`);
    }
};

Object.setPrototypeOf(user, newProto);
user.farewell(); // "Goodbye, Liam"







// function Person(name) {
//   this.name = name;
// }
// Person.prototype.age = 12

// const obj = {

// }
// const person = new Person("ali")

// obj.prototype = person.__proto__



// console.log(obj);





// const car = {
//   make: "TAYOTA",
//   model: "CR",
//   year: 2020,(params) {

//   }
// }