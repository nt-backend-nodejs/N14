const URI = "https://api.github.com/users"



const getUserData = async (URI, username)=>{
  try{
    const response = await fetch(`${URI}/${username}`)
    const userData  = await response.json()
    console.log(userData)
  } catch(e){
    console.log("XATO ", e)
  }
  }



getUserData(URI, "xam1dullo")
