
Albatta! Sizning talablaringizga ko‘ra, biz minimal HTML koddan foydalanamiz, faqat JavaScript faylini bog‘lash uchun. Barcha foydalanuvchi bilan o‘zaro aloqa `prompt`, `alert` va `confirm` dialoglari orqali amalga oshiriladi.

Quyida loyihaning rejalari va kodlari taqdim etilgan.

---

## **Loyiha: Register va Login Ilovasi (faqat JavaScript bilan)**

### **Ta'rif:**
JavaScript'da `Map` va `Set` ma'lumot tuzilmalari yordamida foydalanuvchilarni ro'yxatdan o'tkazish va tizimga kirishni ta'minlaydigan oddiy ilova yarating. Ilova foydalanuvchi bilan `prompt`, `alert` va `confirm` dialoglari orqali o'zaro aloqada bo'ladi.

### **Talablar:**

#### **1. Foydalanuvchi Ro'yxatdan O'tkazish (Register)**
- **Foydalanuvchi ma'lumotlari:**
  - `name`: Foydalanuvchi ismi (string).
  - `email`: Foydalanuvchi email manzili (string).
  - `password`: Foydalanuvchi paroli (string).

- **Jarayon:**
  1. Ilova ishga tushirilganda, foydalanuvchiga "Register" yoki "Login" tanlovi taklif qilinadi.
  2. Agar foydalanuvchi "Register" ni tanlasa, `prompt` dialoglari orqali `name`, `email` va `password` so'raladi.
  3. Kiritilgan email allaqachon mavjud bo'lsa, `alert` orqali xabar beriladi.
  4. Yangi foydalanuvchi ma'lumotlari `Map` obyektida saqlanadi.
  5. Ro'yxatdan o'tganligi haqida `alert` bilan xabar beriladi.

#### **2. Foydalanuvchi Tizimga Kirish (Login)**
- **Jarayon:**
  1. Agar foydalanuvchi "Login" ni tanlasa, `prompt` dialoglari orqali `email` va `password` so'raladi.
  2. Kiritilgan email va parol `Map` obyektida tekshiriladi.
  3. Agar ma'lumotlar to'g'ri bo'lsa, `alert` orqali muvaffaqiyatli kirganligi haqida xabar beriladi.
  4. Aks holda, xato haqida `alert` bilan xabar beriladi.

#### **3. Ma'lumotlar Boshqaruvi:**
- **Map:**
  - Foydalanuvchilarni `email` kalitlari bilan saqlash.

- **Set:**
  - Tizimga kirgan foydalanuvchilarni saqlash (logged-in users).

---

## **Kod Misollari**

### **index.html**

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Simple Register va Login Application</title>
    <script src="main.js"></script>
</head>
<body>
</body>
</html>
```

**Izoh:**
- Bu yerda minimal HTML kod mavjud, faqat `main.js` faylini bog‘lash uchun.

### **main.js**

```javascript
// main.js

// Foydalanuvchilarni saqlash uchun Map
const users = new Map();

// Tizimga kirgan foydalanuvchilarni saqlash uchun Set
const loggedInUsers = new Set();

// Ilovani ishga tushirish
startApp();

function startApp() {

}

// Ro'yxatdan o'tkazish funksiyasi
function register() {
   }

// Login funksiyasi
function login() {

}

// Foydalanuvchi uchun menyu
function userMenu(email) {

}

// Foydalanuvchi profilini ko'rsatish
function showProfile(email) {

}
```

**Izoh:**

- **Ilovani ishga tushirish (`startApp`):**
  - Dastur boshlanishida foydalanuvchiga menyu taklif qilinadi: "Register", "Login" yoki "Exit".
  - Tanlovga qarab, tegishli funksiya chaqiriladi.

- **Ro'yxatdan o'tkazish funksiyasi (`register`):**
  - Foydalanuvchidan `name`, `email` va `password` so'raladi.
  - Email allaqachon mavjud bo'lsa, xabar beriladi.
  - Yangi foydalanuvchi `users` Map ga qo'shiladi.

- **Login funksiyasi (`login`):**
  - Foydalanuvchidan `email` va `password` so'raladi.
  - Ma'lumotlar `users` Map da tekshiriladi.
  - Agar to'g'ri bo'lsa, foydalanuvchi tizimga kiradi va `loggedInUsers` Set ga qo'shiladi.
  - Foydalanuvchi uchun shaxsiy menyu (`userMenu`) ishga tushadi.

- **Foydalanuvchi menyusi (`userMenu`):**
  - Foydalanuvchi tizimda bo'lganida, unga menyu taklif qilinadi: "Profile" yoki "Logout".
  - "Profile" tanlansa, foydalanuvchi ma'lumotlari ko'rsatiladi.
  - "Logout" tanlansa, foydalanuvchi tizimdan chiqadi.

- **Ma'lumotlar boshqaruvi:**
  - `users` Map foydalanuvchilar ma'lumotlarini saqlaydi.
  - `loggedInUsers` Set tizimga kirgan foydalanuvchilarni saqlaydi.

---

## **Xulosa**

Ushbu ilova foydalanuvchi bilan `prompt`, `alert` va `confirm` dialoglari orqali o‘zaro aloqada bo‘lib, `Map` va `Set` ma'lumot tuzilmalarini amaliyotda qo‘llashni ko‘rsatadi. Ilova HTML interfeysidan foydalanmaydi va barcha interaktivlik JavaScript dialoglari orqali amalga oshiriladi.

---

## **Qo‘shimcha Tavsiyalar**

- **Ma'lumotlarni Xavfsiz Saqlash:**
  - Parollarni shifrlash yoki hashing orqali saqlashni o‘rganing.

- **Validatsiya Qo‘shish:**
  - Email formatini tekshirish, parol uzunligini belgilash va boshqa validatsiya usullarini qo‘shish.

- **Ma'lumotlarni Saqlash:**
  - Ma'lumotlarni sessiya davomida saqlash uchun `localStorage` yoki `sessionStorage` dan foydalanish mumkin.

---

**Omad tilayman!** Agar bu loyiha bilan bog‘liq qo‘shimcha savollaringiz yoki tushunmovchiliklaringiz bo‘lsa, bemalol so‘rashingiz mumkin.
