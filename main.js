// Array

const arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach((item,index, arr)=>{
//   console.log(`${index}: ${item}`)
// })


Array.prototype.myForEach = function(callback){
  for( let i = 0; i <this.length; i++){
    callback(this[i], i, this)
  }
}


Array.prototype.myForEach = a()
arr.myForEach((item, index, arr)=>{
    console.log(`${index}: ${item}`)
})
