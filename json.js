const obj = {
  name:"ali"
}

const obj2 = obj
obj.name = "Guli"


console.log(obj, obj2)

// const car = {
//   name:"BMW",
//   year: 2024,
//   model: "A7",
//   milage: 12345,
//   isHybrid: true,
//   a: [1,2,3,4],
//   startEngine(){
//     console.log("START")
//   }
// }

// try{

//     const jsonData = JSON.stringify(car)
//     console.log(jsonData)
//     console.log(JSON.parse(JSON.parse(jsonData)))
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("TUGADI")
// }
