class Person{
  books = [];
  constructor(name, age){
    this.name = name
    this.age = age
    this._balance = 0
  }
  get balance(){
    return this._balance
  }
  set balance(amount){
    this._balance += amount
  }
  logName(){
    console.log(this.name)
  }
}

const person = new Person("Guli", 123)

// console.log(person)
// person.logName()
// console.log(person.name)
// console.log(person.balance)
// person.balance = 10

// console.log(person.balance)


class Student extends Person{
  constructor(name, age, course){
    super(name, age)
    this.course = course
  }
  logName(){
    console.log(`Hello my name is ${this.name}`)
  }
}

class MITStudent  extends Student {
      constructor(name, age, course, score){
        super(name, age, course)
        this.score= score
      }
}

class Worker extends Person{
  constructor(name, age, job){
    super(name, age)
    this.job= job
  }
}

const student = new Student("Bilol", 21, 3)
const worker = new Worker("Bilol", 21, "Developer")

console.log(worker instanceof Object)
console.log(worker instanceof Person)
console.log(worker instanceof Student)
console.log(student instanceof Student)
// console.log(student.balance)
// student.balance = 10
// console.log(student.balance)
// student.logName()
