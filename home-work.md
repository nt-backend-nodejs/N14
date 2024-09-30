---
id: Course.md
date: 2024-10-04
type:
  - course
title: 15-dars. OOP va prototiplar, Vorislik (Class, xususiyat, metod, getter va setter, ...)
---
# HOME WORK

----
1.
## "Kitoblar ro'yxati" klassi yaratish

#### Topshiriq:
Sizga bir "BookList" nomli JavaScript klassini yaratishingiz kerak. Ushbu klass quyidagi xususiyatlarga va metodlarga ega bo'lishi lozim:

- **Xususiyatlar:**
  - `books`: Bu bir array bo'lib, unda har bir kitob uchun ob'ekt saqlanadi. Har bir kitob ob'ekti kamida `title` va `author` kabi xususiyatlarga ega bo'lishi kerak.
  - `favoriteBook`: Bu saqlanayotgan sevimli kitobning nomi (string sifatida).

- **Metodlar:**
  - `addBook(title, author)`: Bu metod yangi kitobni `books` arrayiga qo'shadi. Kitob ob'ekti `{ title: "Kitob nomi", author: "Muallif" }` ko'rinishida bo'lishi kerak.
  - `setFavoriteBook(title)`: Bu metod `favoriteBook` xususiyatini yangilaydi.
  - `getBooksList()`: Bu metod saqlangan barcha kitoblarni consolga chiqaradi, ularning har biri uchun "Kitob nomi, muallif: Muallif" formatida chiqariladi.
  - `getFavoriteBook()`: Bu metod sevimli kitobning nomini consolga chiqaradi.

#### Qo'shimcha ma'lumot:
- Klass yaratilganda, `books` bo'sh array bilan va `favoriteBook` bo'sh string bilan boshlanishi kerak.
- Barcha metodlar va xususiyatlar to'g'ri ishlashi kerak, va barcha yangi qo'shilgan kitoblar to'g'ri qayd etilishi kerak.

Bu vazifa sizning o'quvchilaringizga JavaScript'da klasslar va ob'ekt bilan ishlashni, shuningdek array va stringlar bilan ishlash ko'nikmalarini rivojlantirishga yordam beradi. O'quvchilar klass metodlarini qanday yaratish va ularni qanday qo'llash mumkinligini amalda ko'rishlari mumkin bo'ladi.


---
2.
## Paskal uchburchagining Nta qatorini chiqaruvchi dastur tuzing.
		   1
		  1 1
		 1 2 1
	  1 3 3 1


----
3.
## Magic deb nomlangan ==class==  yarating uning **replace, length, toUpperCase** methodlari bo'lsin va shu methodlar o'z nomidek ish bajarsin!.


## example
```js
const magic = {
	replace(a, b){
	...
	},
	length(data){
	//har qanday data bersak ham uni uzunligini qaytarsin
	},
	toUpperCase(str){
	/*stringni Katta harflar bilan yozadigan qilsin buni o'ziz yozib chiqing tayyor codedan yoki string methotidan foydalanman
 obj = {
	"a":"A"
	...
	}
*/
	},
	repeat(data, n){
	/*
	data qanday bo'lsa ham n marotaba ko'paytirib qaytarsin
repeat("salom",2) => "salom salom"
*/
		}
	count(str){
// strda har bir harf necha marotabadan takrorlanganini hisoblaydigan algorithm tuzing!
//count("hello world") => {h:1, e:1, l:3, o:2, ... }
	}
}
```



----


4.  JavaScript class asosida bank hisob raqamini boshqarish uchun uy ishi vazifasi:

**Uy Ishi Vazifasi:**
1. JavaScript tilida `BankAccount` deb nomlangan class yarating. Bu classda mijozning ismi (`ownerName`), hisob raqamining boshlang'ich balansi (`balance`) va hisob raqam raqami (`accountNumber`) kabi uchta asosiy xususiyat bo'lsin. Boshlang'ich balans standart holda 0 so'm bo'lishi kerak.
2. Bu classga pul mablag'larini qo'shish (`deposit`) va yechib olish (`withdraw`) uchun ikkita metod qo'shing. Har bir metod mos ravishda mablag' qo'shish yoki yechib olish amallarini bajarib, yangi balansni konsolga chiqarib bersin.
3. Shuningdek, hisob raqamidagi joriy balansni ko'rsatuvchi metod (`showBalance`) ham yarating. Bu metod joriy balansni konsolga chiqarib berishi kerak.
4. `BankAccount` classidan bir nechta ob'ekt yarating (masalan, ikkita turli foydalanuvchilar uchun). Har bir foydalanuvchi uchun alohida hisob raqamlarini yarating va ularning harakatlarini sinab ko'ring: pul qo'shing, pul yeching va balansni tekshiring.


----
5.  JavaScript  OOP (Object-Oriented Programming) usulida aylana yaratish bo'yicha uy ishi vazifasi:


>**Uy Ishi Vazifasi:** JavaScript tilida `Circle` deb nomlangan class yarating. Bu class aylanani radiusi (`radius`) orqali yaratadi. Classni yaratish uchun quyidagi qadamlarni bajaring:

5.
	1.  **Constructor Metodi**: Bu metod `radius` argumentini qabul qilib, uni classning ichida saqlang.
	2. **getArea() Metodi**: Bu metod aylananing yuzasini hisoblab beradi. Yuzani hisoblash formula: PI * r^2. JavaScript'da `Math.PI` o'zgaruvchisini PI qiymati sifatida ishlatishingiz mumkin.
	3. **getPerimeter() Metodi**: Bu metod aylananing perimetri (aylana uzunligi)ni hisoblab beradi. Perimetri hisoblash formula: 2 * PI * r.
	4. **Testlash**: Yaratgan `Circle` classingizdan bir nechta ob'ekt yarating va ularning yuzasi hamda perimetri metodlarini chaqirib, to'g'ri ishlashini tekshiring.


----
6. Sondagi har bir raqamni kvadratlaridan hosil bo’lgan yangi sonni qaytaruvchi squareNumber(n) funksiyasini tuzing:
 ```js
n = 3221 -> 9-4-4-1 -> 9441
n = 3219 -> 9-4-1-81 -> 94181
```

---
7. Mana JavaScript tilida class yordamida bajariladigan uy ishi vazifasi. Ushbu vazifada o'quvchilar turli o'lchamdagi qutilarning hajmini hisoblab, ularning umumiy hajmini topishadi.

**Uy Ishi Vazifasi:**

JavaScript tilida `Box` deb nomlangan class yarating. Bu class har bir quti uchun uzunlik (`length`), kenglik (`width`), va balandlik (`height`) kabi xususiyatlarni saqlaydi va shu xususiyatlar asosida quti hajmini hisoblaydigan metodga ega bo'lishi kerak.

Shuningdek, barcha qutilarning umumiy hajmini hisoblovchi `totalVolume` funksiyasi yarating. Bu funksiya `Box` ob'ektlarining ro'yxatini qabul qiladi va ularning hajmlarini qo'shib, umumiy hajmini qaytaradi.

**Class va Funksiya Tavsifi:**

1. **`Box` Classi:**

    - **Constructor Metodi**: Uzunlik, kenglik va balandlikni argument sifatida qabul qiladi va bu qiymatlar classning mos xususiyatlariga saqlanadi.
    - **`getVolume()` Metodi**: Quti hajmini hisoblaydi (`length * width * height`) va natijani qaytaradi.
2. **`totalVolume(...boxes)` Funksiyasi:**

    - Bu funksiya argument sifatida bir nechta `Box` ob'ektlarini qabul qiladi.
    - Har bir `Box` ob'ektining hajmini hisoblaydi va ularning yig'indisini qaytaradi.

    ---


    ##  1. Object yordamida Todo List yaratish

    Bu yerda biz funksiyalar va ob'ektlardan foydalangan holda todo list dasturini tuzilgan

    ```javascript


    todoList.addTask('Breakfast at 8:00 AM');
    todoList.addTask('Meeting at 12:00 PM');
    todoList.displayTasks();
    todoList.removeTask(0);
    todoList.displayTasks();
    ```

    Bu kodda `todoList` ob'ekti yaratilgan, u ichida `tasks` deb nomlangan massiv, shuningdek, vazifalarni qo'shish, o'chirish va ko'rsatish uchun metodlar mavjud.

    ### 2. Class uslubiga o'tkazish

    Endi shu dasturni `class` sintaksisidan foydalanib qayta yozamiz:

    ```javascript

    const myTodoList = new TodoList();
    myTodoList.addTask('Breakfast at 8:00 AM');
    myTodoList.addTask('Meeting at 12:00 PM');
    myTodoList.displayTasks();
    myTodoList.removeTask(0);
    myTodoList.displayTasks();
    ```

    Bu yerda `TodoList` deb nomlangan yangi sinf yaratilgan. `constructor` metodida vazifalar ro'yxati boshlang'ich qiymati bilan yaratiladi. Vazifalarni boshqarish metodlari (`addTask`, `removeTask`, `displayTasks`) sinfning prototipida joylashgan.

    Bu o'zgarishlar dasturni yanada ob'ektga yo'naltirilgan qiladi va kodni kengaytirish va boshqarishni osonlashtiradi. Sinflar yordamida murakkab dasturlarni tuzish va kodni tashkil etish osonroq bo'ladi.
