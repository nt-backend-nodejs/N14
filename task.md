### **JavaScript `call`, `bind`, `apply` Metodlari Bo'yicha Amaliy Mashg'ulotlar**

Quyidagi amaliy mashg'ulotlar orqali o'quvchilar `call`, `bind`, va `apply` metodlarini chuqurroq tushunib, ularni samarali qo'llay olishlari mumkin. Har bir mashg'ulotda vazifa tavsifi, kerakli qadamlar va namunaviy kod keltirilgan.

---

#### **Mashg'ulot 1: `call` Metodi Bilan Funksiya Qarzga Olish**

**Ma'lumot:**
`call` metodi yordamida bir obyektning metodini boshqa obyektlarda ishlatish.

**Vazifa:**
1. **Obyektlarni Yaratish:**
    - `person1` va `person2` nomli ikkita obyekt yarating. Har bir obyektda `firstName` va `lastName` xususiyatlari bo'lsin.
2. **Metod Yaratish:**
    - `getFullName` nomli funksiyani yarating, u `this.firstName` va `this.lastName` yordamida to'liq ismni qaytarsin.
3. **`call` Metodidan Foydalanish:**
    - `getFullName` funksiyasini `person2` obyektiga qarzga oling va konsolga chiqaring.

**Kod Namuna:**
```javascript
// 1. Obyektlarni yaratish
const person1 = {
    firstName: 'Ali',
    lastName: 'Valiyev'
};

const person2 = {
    firstName: 'Vali',
    lastName: 'Xudoyberdiyev'
};

// 2. getFullName funksiyasini yaratish
function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

// 3. call metodi bilan person2’da ishlatish
const fullNamePerson2 = getFullName.call(person2);
console.log(fullNamePerson2); // Natija: "Vali Xudoyberdiyev"
```

**Savol:**
- `person1` uchun `getFullName` funksiyasini `call` metodi orqali chaqiring va natijasini konsolga chiqaring.

---

#### **Mashg'ulot 2: `apply` Metodi Bilan Funksiya Qarzga Olish**

**Ma'lumot:**
`apply` metodi `call` metodiga o'xshash, lekin argumentlarni massiv (`array`) shaklida qabul qiladi.

**Vazifa:**
1. **Obyekt va Funksiya Yaratish:**
    - `mathOperations` nomli obyekt yarating va uning ichida `sum` nomli metod yarating, u istalgan sonlar massividagi elementlar yig'indisini hisoblab beradi.
2. **`apply` Metodidan Foydalanish:**
    - `mathOperations.sum` metodini `null` konteksti bilan chaqiring va `[10, 20, 30]` sonlar massivi bilan ishlating.
3. **Natijani Konsolga Chiqaring:**

**Kod Namuna:**
```javascript
// 1. mathOperations obyektini yaratish
const mathOperations = {
    sum: function() {
        return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
    }
};

// 2. apply metodi bilan chaqirish
const numbers = [10, 20, 30];
const total = mathOperations.sum.apply(null, numbers);
console.log(total); // Natija: 60
```

**Savol:**
- `[5, 15, 25, 35]` sonlar massivi uchun `mathOperations.sum` metodini `apply` yordamida chaqiring va natijasini konsolga chiqaring.

---

#### **Mashg'ulot 3: `bind` Metodi Bilan Funksiya Kontekstini Bog'lash**

**Ma'lumot:**
`bind` metodi yangi funksiyani qaytaradi, bunda `this` konteksti oldindan belgilangan bo'ladi.

**Vazifa:**
1. **Obyekt Yaratish:**
    - `user` nomli obyekt yarating, uning `name` xususiyati bo'lsin.
2. **Funksiya Yaratish:**
    - `greet` nomli funksiyani yarating, u `greeting` argumenti bilan foydalanuvchi nomi bilan salomlashsin.
3. **`bind` Metodidan Foydalanish:**
    - `greet` funksiyasini `user` obyekti bilan bog'lang va yangi funksiyani `greetUser` nomi bilan saqlang.
4. **Yangi Funksiyani Chaqirish:**


**Savol:**
- `user2` nomli yangi obyekt yarating (`name` sifatida `Jane`), va `greet` funksiyasini `bind` yordamida `user2` bilan bog'lang. Yangi bog'langan funksiyani chaqiring.

---

#### **Mashg'ulot 4: `call`, `apply`, `bind` Metodlarini Solishtirish**

**Ma'lumot:**
`call`, `apply`, va `bind` metodlarining farqlari va ularni qachon ishlatish kerakligini tushunish.

**Vazifa:**
1. **Funksiya Yaratish:**
    - `introduce` nomli funksiyani yarating, u `language` argumenti bilan foydalanuvchi haqida ma'lumotni konsolga chiqaradi.
    ```javascript
    function introduce(language) {
        console.log(`Mening ismim ${this.firstName} ${this.lastName} va men ${language} tilini bilaman.`);
    }
    ```
2. **Obyektlarni Yaratish:**
    - `developer1` va `developer2` nomli ikkita obyekt yarating, ularning har birida `firstName` va `lastName` xususiyatlari bo'lsin.
3. **`call`, `apply`, `bind` Metodlarini Ishlatish:**
    - `introduce` funksiyasini `call`, `apply`, va `bind` metodlari bilan `developer1` va `developer2` obyektlarida chaqiring.
4. **Natijalarni Solishtiring:**


**Savol:**
- `developer3` nomli yangi obyekt yarating (`firstName`: `Alice`, `lastName`: `Johnson`). `introduce` funksiyasini `bind` yordamida `developer3` bilan bog'lab, `language` sifatida `TypeScript` ni belgilang va yangi bog'langan funksiyani chaqiring.

---

#### **Mashg'ulot 5: `call`, `apply`, `bind` Metodlari Bilan Real Hayotdagi Scenario’da Ishlatish**

**Vazifa:**
1. **Obyekt va Funksiya Yaratish:**
    - `calculator` nomli obyekt yarating, uning ichida `add` nomli metod bo'lsin, u ikkita sonni qo'shib beradi.
    ```javascript
    const calculator = {
        add: function(a, b) {
            return a + b;
        }
    };
    ```
2. **Boshqa Obyekt Yaratish:**
    - `mathUser` nomli obyekt yarating, uning `name` xususiyati bo'lsin.
    ```javascript
    const mathUser = {
        name: 'Math Enthusiast'
    };
    ```
3. **`bind` Metodidan Foydalanish:**
    - `calculator.add` metodini `mathUser` obyektiga bog'lang va yangi funksiyani `addWithContext` nomi bilan saqlang.
4. **Yangi Funksiyani Chaqirish:**
    - `addWithContext(15, 25)` ni chaqiring va natijasini konsolga chiqaring.
5. **Bonus:**
    - Agar `calculator.add` metodida `this.name` ishlatilsa, `bind` metodining qanday ishlashini ko'ring.


**Savol:**
- `calculator.subtract` nomli metod yarating, u ikkita sonni ayiradi. `bind` metodidan foydalanib, `mathUser` bilan bog'lang va `subtractWithContext(50, 20)` ni chaqiring.

---
