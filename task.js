const URIPosts ='https://jsonplaceholder.typicode.com/posts'
const URIUsers = 'https://jsonplaceholder.typicode.com/users'

const getData = async (uri)=>{
  const res = await fetch(uri)

  if(!res.ok){
    throw new Error('URI invalid or something')
  }

  const data = await res.json()
  return data
}

const getUserPosts = (userId, posts)=>{
  const userPosts =  posts.filter((post)=> post.userId === userId)
  return userPosts
}

const users = await getData(URIUsers)
const posts = await getData(URIPosts)
//
// console.log({email:users[0].email})
// console.log({id:users[0].id})
// console.log(users)
// console.log({posts})

const userId = users[5].id
const userPosts = getUserPosts(userId, posts)

console.log(userPosts)
