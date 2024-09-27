**Soddaroq Loyihaning Talablari: Hisobdan Hisobga Pul O'tkazish**

### Maqsad:

- JavaScript'da o'tilgan mavzularni mustahkamlash.
- **Destructuring**, **Date**, **JSON** va **Functional Programming** bo'yicha amaliy ko'nikmalarni oshirish.
- **prompt**, **alert**, **confirm** funksiyalaridan foydalanish.

### Talablar:

1. **Foydalanuvchi Obyekti (User Object)**

   - Har bir foydalanuvchi quyidagi xususiyatlarga ega bo'lsin:
     - `name` (Foydalanuvchining ismi)
     - `cardNumber` (Kartaning raqami)
     - `cardName` (Kartaning nomi yoki turi)
     - `balance` (Hisob balansi)

   - Misol:

     ```javascript
     const user = {
       name: 'Ali',
       cardNumber: '8600 1234 5678 9012',
       cardName: 'Humo',
       balance: 1000000,
       transferHistory:[
         {
           tranfer:"income",
           balance:1234,
           date:"Fri Sep 27 2024 11:56:38 GMT+0500 (Uzbekistan Standard Time)"
         }
       ]
     };
     ```

2. **Pul O'tkazish Funksiyasi**

   - Foydalanuvchi pul o'tkazish uchun boshqa bir foydalanuvchining kartasiga pul o'tkazishi mumkin.
   - **prompt** yordamida foydalanuvchidan quyidagi ma'lumotlarni so'rang:
     - Qabul qiluvchi foydalanuvchining `cardNumber` ini.
     - O'tkaziladigan summa.

3. **Ma'lumotlarni Tekshirish**

   - Jo'natuvchining hisobida yetarli mablag' borligini tekshiring.
   - Qabul qiluvchi foydalanuvchi mavjudligini tekshiring (kartaning raqami bo'yicha).

4. **OTP (One-Time Password) Generatsiya Qilish**

   - Pul o'tkazishdan oldin 6 xonali tasodifiy **OTP** kodi yarating.
   - Ushbu **OTP** kodini **console.log** orqali konsolga chiqarib qo'ying.
   - Foydalanuvchiga **alert** orqali "OTP kodi telefoningizga yuborildi, iltimos kiriting." degan xabarni ko'rsating.
   - **prompt** yordamida foydalanuvchidan **OTP** kodini kiriting.

5. **OTP ni Tekshirish**

   - Foydalanuvchi kiritgan **OTP** kodini yaratilgan kod bilan solishtiring.
   - Agar kod mos kelsa, pul o'tkazmasini amalga oshiring.
   - Agar kod noto'g'ri bo'lsa, **alert** orqali "Noto'g'ri OTP kod, qaytadan urinib ko'ring." degan xabarni chiqaring.

6. **Pul O'tkazmasini Amalga Oshirish**

   - Jo'natuvchining `balance` dan summa ayiring.
   - Qabul qiluvchining `balance` ga summa qo'shing.
   - **alert** orqali muvaffaqiyatli amalga oshirilganligi haqida xabar bering: "Pul o'tkazmasi muvaffaqiyatli amalga oshirildi."

7. **Xatoliklarni Qo'lga Olish**

   - Agar jo'natuvchining balansida yetarli mablag' bo'lmasa, **alert** orqali "Hisobingizda yetarli mablag' mavjud emas." degan xabarni chiqaring.
   - Agar qabul qiluvchi foydalanuvchi topilmasa, **alert** orqali "Qabul qiluvchi topilmadi." degan xabarni chiqaring.

8. **Tasdiqlash**

   - Pul o'tkazishdan oldin foydalanuvchiga **confirm** orqali quyidagi matnni ko'rsating: "Siz [summani] so'mni [qabul qiluvchi ismi] ga o'tkazmoqchisiz. Tasdiqlaysizmi?"
   - Foydalanuvchi tasdiqlasa, davom eting; aks holda, operatsiyani bekor qiling.

9. **Kod Tuzilishi**

   - Barcha kodlar `main.js` faylida yoziladi va `index.html` ga ulangan bo'lishi kerak.
   - Kodni modular tarzda yozing, funksiyalardan foydalaning.
   - Obyektlarni va ma'lumotlarni saqlashda **JSON** formatidan foydalanishingiz mumkin.

10. **Qo'shimcha Talablar**

    - **Date** obyektidan foydalanib, tranzaksiya vaqtini saqlang va konsolga chiqaring.
    - **Destructuring** yordamida foydalanuvchi obyektlaridan ma'lumotlarni ajratib oling.
    - **Functional Programming** tamoyillariga amal qilib, sof funksiyalar yozishga harakat qiling.

### Ishlash Tartibi:

1. **Foydalanuvchilarni Yarating**

   - Kamida ikkita foydalanuvchi yarating (`user1`, `user2`).
   - Ularning balanslari va kartalari har xil bo'lsin.

2. **Interaktivlikni Ta'minlash**

   - Kod ishga tushganda, foydalanuvchidan pul o'tkazishni boshlash uchun **prompt** yoki **confirm** orqali so'rang.
   - Foydalanuvchi bilan muloqot qilishda **prompt**, **alert**, **confirm** funksiyalaridan foydalaning.

3. **Testlash**

   - Turli holatlarni sinab ko'ring:
     - To'g'ri **OTP** kiritilganda.
     - Noto'g'ri **OTP** kiritilganda.
     - Balans yetarli bo'lganda va bo'lmaganda.
     - Qabul qiluvchi mavjud bo'lganda va bo'lmaganda.

### Eslatmalar:

- **OTP** kodini haqiqiy tizimlarda foydalanuvchiga SMS yoki email orqali yuboriladi. Biz esa bu kodni soddalashtirish maqsadida konsolga chiqaramiz.
- Ma'lumotlarni xavfsizligi uchun haqiqiy tizimlarda **console.log** orqali **OTP** yoki shaxsiy ma'lumotlarni chiqarish tavsiya etilmaydi. Ammo o'quv maqsadida bunday qilamiz.
- **prompt**, **alert**, **confirm** funksiyalari asinxron emas, ya'ni kodni to'xtatib turadi. Bu bilan hisobga oling.

### Misol Ish Jarayoni:

1. Foydalanuvchi pul o'tkazish niyatini bildiradi.
2. Foydalanuvchidan qabul qiluvchi kartaning raqami va o'tkaziladigan summa so'raladi.
3. Tizim ma'lumotlarni tekshiradi.
4. **OTP** kodi generatsiya qilinadi va konsolga chiqariladi.
5. Foydalanuvchiga **alert** orqali xabar beriladi va **prompt** orqali **OTP** kodi so'raladi.
6. **OTP** kodi tekshiriladi.
7. Agar hammasi joyida bo'lsa, pul o'tkazmasi amalga oshiriladi va balanslar yangilanadi.
8. Foydalanuvchiga muvaffaqiyatli operatsiya haqida xabar beriladi.

---

**Omad tilaymiz!**
