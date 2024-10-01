# HOME WORK

Quyida berilgan masalalar `instanceof`, `mixin`, `try...catch`, `callback`, `promise`, va `async-await` kabi mavzularni qamrab olgan holda tushunish darajasini osondan qiyinroqqa qarab rivojlantirish uchun mo'ljallangan. Har bir masala ushbu tushunchalarni mustahkamlashga yordam beradi.

### Masala 1: `instanceof`ni Tushunish
- **Vazifa**: Bir obyekt va konstruktor qabul qiladigan JavaScript funksiyasini yozing va agar obyekt ushbu konstruktorga tegishli bo'lsa true qiymatini qaytarsin.
- **O'rganish Maqsadi**: `instanceof` operatoridan foydalanishni tushunish.









### Masala 2: Callbacklardan Foydalanish
- **Vazifa**: Boshqa funksiyani parametr sifatida qabul qilib, uni salomlashuv xabar bilan chaqiradigan funksiya yarating.
- **O'rganish Maqsadi**: Callback funksiyalarni qanday amalga oshirish va foydalanishni o'rganish.















### Masala 3: Asosiy Promise Ishlov Berish
- **Vazifa**: 2 soniyali kechikishdan so'ng "Hello, Promises!" xabari bilan hal etiladigan JavaScript promise'ini yarating.
- **O'rganish Maqsadi**: Promise'larni o'rnatish va ularning hal etilishini tushunish.












### Masala 4: Try va Catch
- **Vazifa**: `JSON.parse()` yordamida noto'g'ri JSON stringini parse qilishga urinish va xatolik yuz berganda uni qayd etish funksiyasini yozing.
- **O'rganish Maqsadi**: `try...catch` yordamida xato ishlov berishni mashq qilish.













### Masala 5: Mixin'dan Foydalanish
- **Vazifa**: Har qanday sinfga `greet()` va `depart()` metodlarini qo'shadigan mixin yarating. Bu mixin'ni `Person` sinfida qo'llang.
- **O'rganish Maqsadi**: Sinflarning funksionalligini kengaytirish uchun mixinlardan foydalanish.

### Masala 6: Kengaytirilgan Promise Ishlov Berish
- **Vazifa**: Shartga asoslangan holda promise yarata oladigan funksiya yozing. Promise shartga qarab hal qilinadi yoki rad etiladi.
- **O'rganish Maqsadi**: Dinamik shartlarga asoslangan promise yaratish va ishlov berishni chuqur tushunish.

### Masala 7: Promise Zanjirini Yaratish
- **Vazifa**: Natijani qayd etishdan oldin uch bosqichli hisob-kitobni o'z ichiga olgan promise zanjirini yarating. Potentsial xatolarni boshqaring.
- **O'rganish Maqsadi**: Promise'larni zanjirlash va zanjir ichidagi xatolarni boshqarishni mashq qilish.

### Masala 8: `async/await`dan Foydalanish
- **Vazifa**: Promise'dan foydalangan funksiyani `async` funksiyaga aylantiring va promise'ni `await` yordamida kuting.
- **O'rganish Maqsadi**: `async` va `await` promise'lar bilan ishlashni qanday soddalashtirishini tushunish.

### Masala 9: `try...catch` bilan `async/await`ni Integratsiya Qilish
- **Vazifa**: Async funksiyani yozing, bu funksiya API'dan ma'lumot olishga urinib, yuzaga kelishi mumkin bo'lgan xatolarni tutadi.
- **O'rganish Maqsadi**: Robust xato ishlov berish uchun `

async/await` bilan `try...catch`ni birlashtirish.

### Masala 10: Murakkab Mixin va Meros qo'llanilishi
- **Vazifa**: Merosni o'z ichiga olgan va asosiy sinfga bir nechta metodlarni qo'shadigan mixin yarating. Ushbu metodlar `super`dan foydalanib funksionallikni kengaytirishi kerak.
- **O'rganish Maqsadi**: Meros va metodlarni qayta yozishni o'z ichiga olgan ilg'or mixin tushunchalarini amalga oshirish.

Bu masalalar JavaScriptning obyektga yo'naltirilgan va asinxron xususiyatlarini tushunishni amaliy jihatdan qo'llab-quvvatlash uchun mo'ljallangan bo'lib, ular sizga real dunyo dasturlash senariylarida ushbu tushunchalarni qo'llashni o'rganishga yordam beradi.


GitHub foydalanuvchilari loginlarini massiv ko’rinishida qabul qilib, GitHubdan ularning ma'lumotlarini so'raydigan va natijani foydalanuvchi ob'ektlari massivi ko’rinishida qaytaradigan getUsers(names) funksiyasini yozing . GitHub foydalanuvchisi haqida maʼlumot quyidagi havolada mavjud: https://api.github.com/users/USERNAME. Bu yerda USERNAME foydalanuvchi logini Bunda:

1. Har bir foydalanuvchiga bitta fetch so'rovi kelishi kerak.
2. So'rovlar bir-birining bajarilishini kutmasligi kerak.
3. Agar ba'zi so'rovlar bajarilmasa yoki so'ralgan foydalanuvchi haqida ma'lumot yo'qligi aniqlansa, funksiya natijalar massiviga null qaytishi kerak.
