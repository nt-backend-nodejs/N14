# 17-dars. Fetch va axios HOME WORK

1.
https://handlers.education.launchcode.org/static/planets.json
shu url yordamida namelarni arrayga yig'gib qaytarib bersin



![sasa](/image.png)

----
2. Eng keksa insonni topish

#### Vazifa maqsadi:

Berilgan, har bir insonning tug'ilish va vafot etish yillari bilan ifodalangan ob'ektlar massividagi eng keksa insonni aniqlash.

#### Vazifalar:
>  **Funksiyani yozish**: Insonlarning tug'ilish va vafot etish yillarini o'z ichiga olgan ob'ektlar massividan eng keksa insonni topadigan funksiya yozing. Bu funksiya eng uzun umr ko'rgan insonni qaytarishi kerak.

```javascript
const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 }
];
```
----
3. https://jsonplaceholder.typicode.com/posts?userId=1 va https://jsonplaceholder.typicode.com/users/1 linklaridan foydalanib kiritilgan userId ga mos keluvchi Avtorning name, city va companyNamelarini va uning barcha maqolalarnining titlelarini chiqarib beruvchi dastur yozing. Dastur async-awaitdan foydalanib yozilsin!
----
4.  https://jsonplaceholder.typicode.com/todos todos dagi barcha just `id` dagi todolarning hammasni qaytarib bervuchi dastur tuzing!

----
5. product nomli object yarating(nomi, miqdori, narxi) - product to'g'risida ma'lumot beruvchi productInfo nomli metod (getter) qo'shing - product narxini o'zgartirish uchun setPrice nomli metod (setter) qo'shing - productdan tovar nomli objectga nusxa oling - tovarning narxini setter orqali o'zgartiring - ekranga product va tovar objectlari to'g'risidagi ma'lumotni productInfo orqali chiqaring 2. Unga uzatilgan objectdagi faqat metodlar ro’yxatini chiqaruvchi FindAllMethods(obj) funksiyasini yozing.3. Unga uzatilgan objectdagi key va valuelar o’rnini almashtiruvchi InvertKeyValue(obj) funksiyasini yozing. Input: InvertKeyValue({red: «qizil», green: «yashil»}) Output:{«qizil»: «red», «yashil»: «green»}
---
6. Imtihon Savoli: Anagrammalarni Aniqlash
#### Vazifa ta'rifi:

> Anagramma - bu bir xil harflardan tashkil topgan, lekin harflari turli tartibda joylashgan ikki so'z. Masalan, "tuk" va "kut" so'zlari anagrammadir, chunki ular bir xil harflarga ega va faqat harflarning tartibi boshqacha.

#### Vazifa talablari:

> Yozilgan JavaScript funksiyasini ishlatib, berilgan ikkita so'z anagramma ekanligini aniqlang. Agar ikkita so'z anagramma bo'lsa, funksiya `true` qaytarsin, aks holda `false`.

---
7.  Avtobusdagi odamlar sonini hisoblash

#### Vazifa ta'rifi:

Funksiya avtobusning har bir bekatda qancha odam chiqqanligi va qancha odam chiqqanligini ko'rsatuvchi ikki o'lchovli massivni qabul qiladi. Har bir bekatdan keyin avtobusdagi qolgan odamlar sonini hisoblab, oxirgi bekatdan keyin avtobusda qancha odam qolganini qaytaradi.

#### Vazifa talablari::

- Funksiya nomi: `odamSoni`
- Kirish ma'lumotlari: Ikki o'lchovli massiv, har bir ichki massivda ikkita son mavjud: birinchisi avtobusga chiqqan odamlar soni, ikkinchisi esa avtobusdan tushgan odamlar soni.
- Chiqish ma'lumotlari: Oxirgi bekatdan keyin avtobusdagi odamlar soni.


```javascript
// Misollar
console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
])); // Output: 5

console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); // Output: 15
```

---
8. API Orqali Ma'lumotlarni Qayta Ishlash

#### Vazifa ta'rifi:

Sizdan "Breaking Bad" seriali haqidagi iqtiboslar (quotes) beruvchi API'dan ma'lumot olib, eng ko'p takrorlangan muallif (author) nomini aniqlab, ro'yxat shaklida qaytaradigan JavaScript funksiyasini yozishingiz so'raladi. Ushbu vazifa API so'rovlari, ma'lumotlarni qayta ishlash va natijalarni tahlil qilish kabi muhim dasturlash ko'nikmalarini sinovdan o'tkazadi.

#### Vazifa talablari:

1. `fetch` API yordamida ma'lumotlarni olib kelish.
2. Ma'lumotlarni qayta ishlash orqali har bir muallifning iqtiboslar sonini hisoblash.
3. Eng ko'p takrorlangan muallif(lar)ni topish va ularni ro'yxat shaklida qaytarish.
