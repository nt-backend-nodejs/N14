Mana "promise" ni mustahkamlash uchun masala:

### Masala: Kitoblarni yuklab olish

**Shart:**
- Sizda biron bir onlayn kitob do'konidan PDF formatidagi kitoblarni yuklab olish uchun xizmat bor. Har bir kitob yuklanishi uchun 3 soniya kerak bo'ladi.
- Barcha kitoblarni parallel ravishda yuklab olish vaqti umumiy vaqtdan tezroq bo'ladi, lekin ular bajarilganligi haqida ogohlantirish kutilishi kerak.
- Sizga bir necha kitoblar ro'yxati beriladi va siz ularni yuklab olishingiz kerak.

**Talablar:**
1. Har bir kitobni yuklab olish 3 soniya davom etadi.
2. Barcha kitoblarni parallel ravishda yuklab olish kerak.
3. Yuklash jarayoni tugagandan so'ng, ekranga har bir kitob muvaffaqiyatli yuklab olingani haqida xabar chiqarilsin.
4. Kitoblar yuklanganini kuzatish uchun "promise" dan foydalaning.

**Misol:**
```javascript
const books = ['JavaScript Mastery', 'Python for Beginners', 'Learning Go'];

// Kitobni yuklash funksiyasi
function downloadBook(book) {

}

// Barcha kitoblarni yuklab olish funksiyasi
async function downloadBooks(books) {
}

// Funksiyani chaqirish
downloadBooks(books);
```

**Natija:**
```
Yuklanmoqda: JavaScript Mastery
Yuklanmoqda: Python for Beginners
Yuklanmoqda: Learning Go
3 soniyadan keyin:
JavaScript Mastery muvaffaqiyatli yuklandi.
Python for Beginners muvaffaqiyatli yuklandi.
Learning Go muvaffaqiyatli yuklandi.
```

Ushbu misol orqali talabalarni **Promise** va **async/await** bilan tanishtirishingiz mumkin.
