const books = ['JavaScript Mastery', 'Python for Beginners', 'Learning Go'];

// Kitobni yuklash funksiyasi
async function downloadBook(book) {
  console.log(`Yuklamoqda: ${book}`)
  const promise  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(`Yuklandi: ${book}`)
    },3000)
  })

  const data = await promise

  return data
}

// Barcha kitoblarni yuklab olish funksiyasi
// async function downloadBooks(books) {
// }

// Funksiyani chaqirish
downloadBook("JavaScript Mastery");
