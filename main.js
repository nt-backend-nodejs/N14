// req -> request
// res -> response

const getData = async (URI)=>{
 try{
  const res = await fetch(URI)
  if(!res.ok){
    throw new Error('URL invalid')
  }

  const data = await res.text()
  console.log(data)

 }catch(error){
   console.log(`ERROR FROM  ${URI} `,error )
  }

}

getData("https://nodejs.org/en")
