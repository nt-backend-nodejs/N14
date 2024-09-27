const reverseWord = (str)=>{
 
  if(str.length ===1){
    return str[0]
  }
 
  const arr = [...str]

  return arr.pop() + reverseWord(arr)
}
console.log(reverseWord("SALOM"))
