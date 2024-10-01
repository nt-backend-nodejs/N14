const URI = "https://jsonplaceholder.typicode.com/todos"



const getUserData = async (URI)=>{
  try{
    const response = await fetch(URI)
    const userData  = await response.json()
    console.log(userData)
  } catch(e){
    console.log("XATO ", e)
  }
  }



getUserData(URI)
