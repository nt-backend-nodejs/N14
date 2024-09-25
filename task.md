## **Amaliy Masalalar: Hayotiy Vaziyatlarda JavaScript Arrays**

### **1. Raqamlar Kitobini Boshqarish**

**Ta'rif:**
Elektron kitobxonlik tizimida foydalanuvchilarning o'qiyotgan kitoblarini boshqarish uchun arraylardan foydalaning. Har bir foydalanuvchi uchun uning hozirgi o'qiyotgan kitoblari ro'yxatini saqlang.

**Talablar:**
- Foydalanuvchilar ro'yxatini yaratish (`users` arrayi).
- Har bir foydalanuvchi obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `name`: Foydalanuvchi ismi (string).
  - `currentBooks`: Hozirgi o'qiyotgan kitoblar ro'yxati (array).
- Quyidagi operatsiyalarni amalga oshirish:
  - Foydalanuvchini ro'yxatga qo'shish.
  - Foydalanuvchining hozirgi o'qiyotgan kitoblarini qo'shish.
  - Foydalanuvchining kitobini ro'yxatdan olib tashlash.
  - Barcha foydalanuvchilarning hozirgi o'qiyotgan kitoblarini ko'rsatish.

**Masala:**
```javascript
const users = [];

// 1. Foydalanuvchini qo'shish
function addUser(id, name) {
    users.push({ id, name, currentBooks: [] });
}

// 2. Kitob qo'shish
function addBookToUser(userId, book) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.currentBooks.push(book);
    }
}

// 3. Kitobni olib tashlash
function removeBookFromUser(userId, book) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.currentBooks = user.currentBooks.filter(b => b !== book);
    }
}

// 4. Barcha foydalanuvchilarning kitoblarini ko'rsatish
function listAllUsersBooks() {
    users.forEach(user => {
        console.log(`${user.name} o'qiyotgan kitoblar: ${user.currentBooks.join(', ')}`);
    });
}

// Misol uchun ishlatish
addUser(1, "Alice");
addUser(2, "Bob");

addBookToUser(1, "JavaScript Asoslari");
addBookToUser(1, "Eloquent JavaScript");
addBookToUser(2, "Clean Code");

removeBookFromUser(1, "JavaScript Asoslari");

listAllUsersBooks();
// Natija:
// Alice o'qiyotgan kitoblar: Eloquent JavaScript
// Bob o'qiyotgan kitoblar: Clean Code
```

---

### **2. Shaxsiy Moliyaviy Hisob-kitob**

**Ta'rif:**
Shaxsiy moliyaviy hisob-kitob tizimini yaratish uchun arraylardan foydalaning. Har bir tranzaksiya (kirim yoki chiqim) ma'lumotlarini saqlang.

**Talablar:**
- Tranzaksiyalar ro'yxatini yaratish (`transactions` arrayi).
- Har bir tranzaksiya obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `type`: Tranzaksiya turi (`'income'` yoki `'expense'`).
  - `amount`: Summa (raqam).
  - `category`: Kategoriya (string).
  - `date`: Sana (Date obyekti).
- Quyidagi operatsiyalarni amalga oshirish:
  - Tranzaksiyani qo'shish.
  - Tranzaksiyani tahrirlash.
  - Tranzaksiyani o'chirish.
  - Umumiy daromad va xarajatlarni hisoblash.
  - Belgilangan kategoriya bo'yicha tranzaksiyalarni ko'rsatish.























**Masala:**
```javascript
const transactions = [];

// 1. Tranzaksiya qo'shish
function addTransaction(id, type, amount, category, date) {
    transactions.push({ id, type, amount, category, date });
}

// 2. Tranzaksiya tahrirlash
function editTransaction(id, updatedData) {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
        Object.assign(transaction, updatedData);
    }
}

// 3. Tranzaksiya o'chirish
function deleteTransaction(id) {
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
        transactions.splice(index, 1);
    }
}

// 4. Umumiy daromad va xarajatlarni hisoblash
function calculateTotals() {
    const totals = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.amount;
        } else if (transaction.type === 'expense') {
            acc.expense += transaction.amount;
        }
        return acc;
    }, { income: 0, expense: 0 });
    return totals;
}

// 5. Kategoriya bo'yicha tranzaksiyalarni ko'rsatish
function getTransactionsByCategory(category) {
    return transactions.filter(t => t.category === category);
}

// Misol uchun ishlatish
addTransaction(1, 'income', 5000, 'Salary', new Date('2024-01-15'));
addTransaction(2, 'expense', 1500, 'Groceries', new Date('2024-01-16'));
addTransaction(3, 'expense', 500, 'Transport', new Date('2024-01-17'));

editTransaction(2, { amount: 1600 });

deleteTransaction(3);

const totals = calculateTotals();
console.log(`Umumiy daromad: ${totals.income}`);
console.log(`Umumiy xarajatlar: ${totals.expense}`);

const groceries = getTransactionsByCategory('Groceries');
console.log(groceries);
// Natija:
// Umumiy daromad: 5000
// Umumiy xarajatlar: 1600
// [{ id: 2, type: 'expense', amount: 1600, category: 'Groceries', date: 2024-01-16T00:00:00.000Z }]
```

---

### **3. Film Koleksiyasini Boshqarish**

**Ta'rif:**
Film kolleksiyasini boshqarish uchun arraylardan foydalaning. Har bir film ma'lumotlarini saqlang va ularni tahlil qilish uchun metodlar qo'llang.

**Talablar:**
- Filmlar ro'yxatini yaratish (`movies` arrayi).
- Har bir film obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `title`: Film nomi (string).
  - `director`: Rejissor (string).
  - `year`: Chiqarilgan yil (raqam).
  - `genres`: Janrlar (array).
  - `ratings`: Reytinglar (array).
- Quyidagi operatsiyalarni amalga oshirish:
  - Film qo'shish.
  - Filmni topish (nomi yoki id orqali).
  - Filmni tahrirlash.
  - Filmni o'chirish.
  - Ma'lum bir janrdagi filmlarni ko'rsatish.
  - Filmlarning o'rtacha reytingini hisoblash.

**Masala:**
```javascript
const movies = [];

// 1. Film qo'shish
function addMovie(id, title, director, year, genres) {
    movies.push({ id, title, director, year, genres, ratings: [] });
}

// 2. Filmni topish
function findMovieById(id) {
    return movies.find(movie => movie.id === id);
}

function findMoviesByTitle(title) {
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
}

// 3. Filmni tahrirlash
function editMovie(id, updatedData) {
    const movie = findMovieById(id);
    if (movie) {
        Object.assign(movie, updatedData);
    }
}

// 4. Filmni o'chirish
function deleteMovie(id) {
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
    }
}

// 5. Janr bo'yicha filmlarni ko'rsatish
function getMoviesByGenre(genre) {
    return movies.filter(movie => movie.genres.includes(genre));
}

// 6. Filmlarning o'rtacha reytingini hisoblash
function calculateAverageRating(id) {
    const movie = findMovieById(id);
    if (movie && movie.ratings.length > 0) {
        const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / movie.ratings.length;
    }
    return null;
}

// Misol uchun ishlatish
addMovie(1, "Inception", "Christopher Nolan", 2010, ["Action", "Sci-Fi"]);
addMovie(2, "The Matrix", "The Wachowskis", 1999, ["Action", "Sci-Fi"]);
addMovie(3, "Interstellar", "Christopher Nolan", 2014, ["Adventure", "Drama", "Sci-Fi"]);

const inception = findMovieById(1);
console.log(inception); // { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010, genres: ["Action", "Sci-Fi"], ratings: [] }

editMovie(2, { year: 2000 });
console.log(findMovieById(2)); // Yangi yil: 2000

deleteMovie(3);
console.log(movies.length); // 2

const sciFiMovies = getMoviesByGenre("Sci-Fi");
console.log(sciFiMovies);
// Natija:
// [
//   { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010, genres: ["Action", "Sci-Fi"], ratings: [] },
//   { id: 2, title: "The Matrix", director: "The Wachowskis", year: 2000, genres: ["Action", "Sci-Fi"], ratings: [] }
// ]

// Reyting qo'shish va o'rtacha reytingni hisoblash
inception.ratings.push(5, 4, 5);
const avgRating = calculateAverageRating(1);
console.log(`Inception o'rtacha reytingi: ${avgRating}`); // 4.666666666666667
```

---

### **4. Shaxsiy Xarajatlarni Tahlil Qilish**

**Ta'rif:**
Shaxsiy xarajatlaringizni tahlil qilish va ularni kategoriyalar bo'yicha guruhlash uchun arraylardan foydalaning. Bu orqali xarajatlaringizni yanada samarali boshqarishingiz mumkin.

**Talablar:**
- Xarajatlar ro'yxatini yaratish (`expenses` arrayi).
- Har bir xarajat obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `description`: Xarajat tavsifi (string).
  - `amount`: Summa (raqam).
  - `category`: Kategoriya (string).
  - `date`: Sana (Date obyekti).
- Quyidagi operatsiyalarni amalga oshirish:
  - Xarajat qo'shish.
  - Xarajatni topish (id orqali).
  - Xarajatni tahrirlash.
  - Xarajatni o'chirish.
  - Kategoriya bo'yicha xarajatlarni ko'rsatish.
  - Umumiy xarajatlarni va har bir kategoriya bo'yicha xarajatlarni hisoblash.

**Masala:**
```javascript
const expenses = [];

// 1. Xarajat qo'shish
function addExpense(id, description, amount, category, date) {
    expenses.push({ id, description, amount, category, date });
}

// 2. Xarajatni topish
function findExpenseById(id) {
    return expenses.find(expense => expense.id === id);
}

// 3. Xarajatni tahrirlash
function editExpense(id, updatedData) {
    const expense = findExpenseById(id);
    if (expense) {
        Object.assign(expense, updatedData);
    }
}

// 4. Xarajatni o'chirish
function deleteExpense(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
        expenses.splice(index, 1);
    }
}

// 5. Kategoriya bo'yicha xarajatlarni ko'rsatish
function getExpensesByCategory(category) {
    return expenses.filter(expense => expense.category === category);
}

// 6. Umumiy xarajatlarni va har bir kategoriya bo'yicha xarajatlarni hisoblash
function calculateTotalExpenses() {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
}

function calculateExpensesByCategory() {
    return expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = 0;
        }
        acc[expense.category] += expense.amount;
        return acc;
    }, {});
}

// Misol uchun ishlatish
addExpense(1, "Groceries", 150, "Food", new Date('2024-02-01'));
addExpense(2, "Bus Ticket", 50, "Transport", new Date('2024-02-02'));
addExpense(3, "Restaurant", 200, "Food", new Date('2024-02-03'));

editExpense(2, { amount: 60 });

deleteExpense(3);

const foodExpenses = getExpensesByCategory("Food");
console.log(foodExpenses); // [{ id: 1, description: "Groceries", amount: 150, category: "Food", date: 2024-02-01T00:00:00.000Z }]

const total = calculateTotalExpenses();
console.log(`Umumiy xarajatlar: ${total}`); // 210

const expensesByCategory = calculateExpensesByCategory();
console.log(expensesByCategory); // { Food: 150, Transport: 60 }
```

---

### **5. Kontaktlar Rejalashtirish Tizimi**

**Ta'rif:**
Shaxsiy kontaktlar rejalashtirish tizimini yaratish uchun arraylardan foydalaning. Bu tizim orqali siz do'stlaringiz, oila a'zolaringiz va hamkasblaringizning kontakt ma'lumotlarini boshqarishingiz mumkin.

**Talablar:**
- Kontaktlar ro'yxatini yaratish (`contacts` arrayi).
- Har bir kontakt obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `name`: Ism (string).
  - `phone`: Telefon raqami (string).
  - `email`: Email manzili (string).
  - `address`: Manzil (string).
- Quyidagi operatsiyalarni amalga oshirish:
  - Kontakt qo'shish.
  - Kontaktni topish (id yoki ism orqali).
  - Kontaktni tahrirlash.
  - Kontaktni o'chirish.
  - Barcha kontaktlarni ko'rsatish.
  - Belgilangan shartlarga mos keladigan kontaktlarni qidirish (masalan, email domeni, telefon raqami prefiksi).

**Masala:**
```javascript
const contacts = [];

// 1. Kontakt qo'shish
function addContact(id, name, phone, email, address) {
    contacts.push({ id, name, phone, email, address });
}

// 2. Kontaktni topish
function findContactById(id) {
    return contacts.find(contact => contact.id === id);
}

function findContactsByName(name) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
}

// 3. Kontaktni tahrirlash
function editContact(id, updatedData) {
    const contact = findContactById(id);
    if (contact) {
        Object.assign(contact, updatedData);
    }
}

// 4. Kontaktni o'chirish
function deleteContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
    }
}

// 5. Barcha kontaktlarni ko'rsatish
function listAllContacts() {
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}, Ism: ${contact.name}, Telefon: ${contact.phone}, Email: ${contact.email}, Manzil: ${contact.address}`);
    });
}

// 6. Belgilangan shartlarga mos keladigan kontaktlarni qidirish
function searchContacts(criteria) {
    return contacts.filter(contact => {
        for (let key in criteria) {
            if (contact[key] && contact[key].toString().toLowerCase().includes(criteria[key].toLowerCase())) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    });
}

// Misol uchun ishlatish
addContact(1, "Alice Johnson", "123-456-7890", "alice@example.com", "123 Maple Street");
addContact(2, "Bob Smith", "234-567-8901", "bob@domain.com", "456 Oak Avenue");
addContact(3, "Charlie Brown", "345-678-9012", "charlie@sample.com", "789 Pine Road");

editContact(2, { phone: "234-567-8902" });

deleteContact(3);

listAllContacts();
// Natija:
// ID: 1, Ism: Alice Johnson, Telefon: 123-456-7890, Email: alice@example.com, Manzil: 123 Maple Street
// ID: 2, Ism: Bob Smith, Telefon: 234-567-8902, Email: bob@domain.com, Manzil: 456 Oak Avenue

const emailSearch = searchContacts({ email: "example.com" });
console.log(emailSearch);
// Natija:
// [{ id: 1, name: "Alice Johnson", phone: "123-456-7890", email: "alice@example.com", address: "123 Maple Street" }]
```

---

### **6. Raqamlar Statistikasi**

**Ta'rif:**
Raqamlar ro'yxati ustida statistik tahlil o'tkazish uchun array metodlarini qo'llang. Bu orqali ro'yxatdagi raqamlarning turli statistik ko'rsatkichlarini hisoblash mumkin.

**Talablar:**
- Raqamlar ro'yxatini yaratish (`numbers` arrayi).
- Quyidagi statistik ko'rsatkichlarni hisoblash:
  - O'rtacha qiymat.
  - Median.
  - Moda.
  - Eng katta va eng kichik qiymat.
  - Varians va standart og'ish.

**Masala:**
```javascript
const numbers = [4, 2, 5, 2, 3, 5, 1, 4, 5];

// 1. O'rtacha qiymat
function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// 2. Median
function calculateMedian(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    }
    return (sorted[mid - 1] + sorted[mid]) / 2;
}

// 3. Moda
function calculateMode(arr) {
    const frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    let maxFreq = 0;
    let modes = [];
    for (let num in frequency) {
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            modes = [Number(num)];
        } else if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }
    return modes;
}

// 4. Eng katta va eng kichik qiymat
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// 5. Varians va Standart og'ish
function calculateVariance(arr) {
    const avg = calculateAverage(arr);
    const squaredDiffs = arr.map(num => Math.pow(num - avg, 2));
    return calculateAverage(squaredDiffs);
}

function calculateStdDev(arr) {
    return Math.sqrt(calculateVariance(arr));
}

// Hisoblash
const average = calculateAverage(numbers);
const median = calculateMedian(numbers);
const mode = calculateMode(numbers);
const { min, max } = findMinMax(numbers);
const variance = calculateVariance(numbers);
const stdDev = calculateStdDev(numbers);

console.log(`O'rtacha qiymat: ${average}`); // 3
console.log(`Median: ${median}`); // 3
console.log(`Moda: ${mode}`); // [2, 5]
console.log(`Eng kichik qiymat: ${min}, Eng katta qiymat: ${max}`); // 1, 5
console.log(`Varians: ${variance}`); // 2
console.log(`Standart og'ish: ${stdDev}`); // 1.4142135623730951
```

---

### **7. Elektron Do'kon Inventarini Boshqarish**

**Ta'rif:**
Elektron do'kon inventarini boshqarish uchun arraylardan foydalaning. Har bir mahsulot haqida ma'lumot saqlang va ularni tahlil qilish uchun array metodlarini qo'llang.

**Talablar:**
- Mahsulotlar ro'yxatini yaratish (`products` arrayi).
- Har bir mahsulot obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `name`: Mahsulot nomi (string).
  - `category`: Kategoriya (string).
  - `price`: Narx (raqam).
  - `stock`: Omborda mavjudligi (raqam).
- Quyidagi operatsiyalarni amalga oshirish:
  - Mahsulot qo'shish.
  - Mahsulotni topish (id yoki nom orqali).
  - Mahsulotni tahrirlash.
  - Mahsulotni o'chirish.
  - Kategoriya bo'yicha mahsulotlarni ko'rsatish.
  - Ombordagi mahsulotlarni tahlil qilish (masalan, qaysi mahsulotlar kamida 10 dona mavjud).

**Masala:**
```javascript
const products = [];

// 1. Mahsulot qo'shish
function addProduct(id, name, category, price, stock) {
    products.push({ id, name, category, price, stock });
}

// 2. Mahsulotni topish
function findProductById(id) {
    return products.find(product => product.id === id);
}

function findProductsByName(name) {
    return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}

// 3. Mahsulotni tahrirlash
function editProduct(id, updatedData) {
    const product = findProductById(id);
    if (product) {
        Object.assign(product, updatedData);
    }
}

// 4. Mahsulotni o'chirish
function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

// 5. Kategoriya bo'yicha mahsulotlarni ko'rsatish
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// 6. Ombordagi mahsulotlarni tahlil qilish
function getLowStockProducts(threshold) {
    return products.filter(product => product.stock <= threshold);
}

// Misol uchun ishlatish
addProduct(1, "Laptop", "Electronics", 1200, 5);
addProduct(2, "Smartphone", "Electronics", 800, 15);
addProduct(3, "Jeans", "Clothing", 50, 25);
addProduct(4, "T-Shirt", "Clothing", 20, 8);

editProduct(1, { stock: 3 });

deleteProduct(4);

const electronics = getProductsByCategory("Electronics");
console.log(electronics);
// Natija:
// [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 3 },
//   { id: 2, name: "Smartphone", category: "Electronics", price: 800, stock: 15 }
// ]

const lowStock = getLowStockProducts(10);
console.log(lowStock);
// Natija:
// [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 3 }
// ]
```

---

### **8. Sportchilar Statistikasi**

**Ta'rif:**
Sportchilar haqidagi ma'lumotlarni saqlash va tahlil qilish uchun arraylardan foydalaning. Har bir sportchi haqida ma'lumot saqlang va ularni turli usullar bilan tahlil qiling.

**Talablar:**
- Sportchilar ro'yxatini yaratish (`athletes` arrayi).
- Har bir sportchi obyekti quyidagi xususiyatlarga ega bo'lishi kerak:
  - `id`: Unikal identifikator (raqam).
  - `name`: Sportchi ismi (string).
  - `sport`: Sport turi (string).
  - `age`: Yosh (raqam).
  - `medals`: Medal soni (raqam).
- Quyidagi operatsiyalarni amalga oshirish:
  - Sportchi qo'shish.
  - Sportchini topish (id yoki ism orqali).
  - Sportchini tahrirlash.
  - Sportchini o'chirish.
  - Sport turi bo'yicha sportchilarni ko'rsatish.
  - Eng ko'p medal to'plagan sportchini topish.
  - Yoshga qarab sportchilarni guruhlash.

**Masala:**
```javascript
const athletes = [];

// 1. Sportchi qo'shish
function addAthlete(id, name, sport, age, medals) {
    athletes.push({ id, name, sport, age, medals });
}

// 2. Sportchini topish
function findAthleteById(id) {
    return athletes.find(athlete => athlete.id === id);
}

function findAthletesByName(name) {
    return athletes.filter(athlete => athlete.name.toLowerCase().includes(name.toLowerCase()));
}

// 3. Sportchini tahrirlash
function editAthlete(id, updatedData) {
    const athlete = findAthleteById(id);
    if (athlete) {
        Object.assign(athlete, updatedData);
    }
}

// 4. Sportchini o'chirish
function deleteAthlete(id) {
    const index = athletes.findIndex(athlete => athlete.id === id);
    if (index !== -1) {
        athletes.splice(index, 1);
    }
}

// 5. Sport turi bo'yicha sportchilarni ko'rsatish
function getAthletesBySport(sport) {
    return athletes.filter(athlete => athlete.sport === sport);
}

// 6. Eng ko'p medal to'plagan sportchini topish
function getTopAthlete() {
    return athletes.reduce((top, athlete) => {
        return (athlete.medals > (top.medals || 0)) ? athlete : top;
    }, {});
}

// 7. Yoshga qarab sportchilarni guruhlash
function groupAthletesByAge() {
    return athletes.reduce((groups, athlete) => {
        const ageGroup = athlete.age >= 18 ? 'Adult' : 'Junior';
        if (!groups[ageGroup]) {
            groups[ageGroup] = [];
        }
        groups[ageGroup].push(athlete);
        return groups;
    }, {});
}

// Misol uchun ishlatish
addAthlete(1, "Usain Bolt", "Sprinting", 34, 8);
addAthlete(2, "Michael Phelps", "Swimming", 35, 23);
addAthlete(3, "Simone Biles", "Gymnastics", 24, 7);
addAthlete(4, "Lionel Messi", "Football", 36, 6);

editAthlete(4, { medals: 7 });

deleteAthlete(3);

const sprintingAthletes = getAthletesBySport("Sprinting");
console.log(sprintingAthletes);
// Natija:
// [{ id: 1, name: "Usain Bolt", sport: "Sprinting", age: 34, medals: 8 }]

const topAthlete = getTopAthlete();
console.log(topAthlete);
// Natija:
// { id: 1, name: "Usain Bolt", sport: "Sprinting", age: 34, medals: 8 }

const groupedByAge = groupAthletesByAge();
console.log(groupedByAge);
// Natija:
// {
//   Adult: [
//     { id: 1, name: "Usain Bolt", sport: "Sprinting", age: 34, medals: 8 },
//     { id: 2, name: "Michael Phelps", sport: "Swimming", age: 35, medals: 23 },
//     { id: 4, name: "Lionel Messi", sport: "Football", age: 36, medals: 7 }
//   ]
// }
```

---

### **9. Raqamlarni FizzBuzz Tahlili**

**Ta'rif:**
Kiritilgan raqamlar ro'yxati uchun FizzBuzz tahlilini amalga oshiring. Har bir raqam uchun quyidagi shartlarni tekshiring:
- Agar raqam 3 ga bo'linadigan bo'lsa, "Fizz" yozing.
- Agar raqam 5 ga bo'linadigan bo'lsa, "Buzz" yozing.
- Agar raqam 3 va 5 ga bo'linadigan bo'lsa, "FizzBuzz" yozing.
- Aks holda, raqamni o'zi yozing.

**Talablar:**
- `map()` metodidan foydalanish.
- Yangi array yaratish va natijani konsolga chiqarish.

**Misol:**
```javascript
const numbers = [1, 2, 3, 4, 5, 15, 16, 18, 20, 30];

const fizzBuzz = numbers.map(num => {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
});

console.log(fizzBuzz);
// Natija:
// [1, 2, "Fizz", 4, "Buzz", "FizzBuzz", 16, "Fizz", "Buzz", "FizzBuzz"]
```

---

### **10. Ma'lumotlarni Satrga Konvertatsiya Qilish va Qayta Satrga Olish**

**Ta'rif:**
Arraydagi ma'lumotlarni JSON formatiga konvertatsiya qiling va qayta original arrayga oling.

**Talablar:**
- `JSON.stringify()` va `JSON.parse()` metodlaridan foydalanish.
- Ma'lumotlarni saqlash va qayta tiklash.

**Masala:**
```javascript
const originalArray = [
    { id: 1, name: "Alice", scores: [90, 85, 88] },
    { id: 2, name: "Bob", scores: [75, 80, 79] },
    { id: 3, name: "Charlie", scores: [95, 92, 91] }
];

// Arrayni JSON stringga aylantirish
const jsonString = JSON.stringify(originalArray);
console.log(jsonString);
// Natija:
// '[{"id":1,"name":"Alice","scores":[90,85,88]},{"id":2,"name":"Bob","scores":[75,80,79]},{"id":3,"name":"Charlie","scores":[95,92,91]}]'

// JSON stringdan arrayga qayta olish
const parsedArray = JSON.parse(jsonString);
console.log(parsedArray);
// Natija:
// [
//   { id: 1, name: "Alice", scores: [90, 85, 88] },
//   { id: 2, name: "Bob", scores: [75, 80, 79] },
//   { id: 3, name: "Charlie", scores: [95, 92, 91] }
// ]
```

---

## **Qo'shimcha Tavsiyalar**

1. **Amaliy Mashqlarni Mustahkamlash:**
   - Har bir masalani yechishda array metodlarini turli kombinatsiyalar bilan qo'llab ko‘ring.
   - Real dunyo ma'lumotlar bazalari yoki API laridan olingan ma'lumotlar bilan ishlashni sinab ko‘ring.

2. **Kod O‘qishni Takomillashtirish:**
   - Boshqa dasturchilar yozgan kodlarni o‘rganish orqali array metodlarini qanday qo‘llashni chuqurroq tushunishingiz mumkin.
   - GitHub kabi platformalarda mavjud bo‘lgan loyihalarni ko‘zdan kechiring.

3. **Performancega E'tibor Berish:**
   - Katta arraylar bilan ishlashda metodlar va looplarning samaradorligini hisobga oling.
   - `for` loop va array metodlari (masalan, `map`, `filter`) orasidagi farqlarni o‘rganing va optimal metodni tanlang.

4. **Immutabilityni Saqlash:**
   - Original arraylarni o‘zgartirmaslik uchun `spread operator` (`...`) yoki `slice()` metodidan foydalaning.
   - Immutable data structures konseptini o‘rganing, ayniqsa React kabi kutubxonalar bilan ishlashda bu juda muhim.

5. **Test Qiling:**
   - Har bir masalani yechishda kodni turli kiritish qiymatlari bilan test qilib ko‘ring.
   - Edge cases (chegara holatlari) ni hisobga oling, masalan, bo‘sh arraylar, noto‘g‘ri ma'lumot turlari va h.k.

---

## **Qo'shimcha Resurslar**

- [MDN Web Docs - Array](https://developer.mozilla.org/uz/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Array Methods](https://javascript.info/array-methods)
- [Eloquent JavaScript - Arrays](https://eloquentjavascript.net/04_data.html)
- [You Don't Know JS: Arrays & Iterables](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/arrays-iterables)
- [JavaScript Array Cheat Sheet](https://dev.to/othneildrew/javascript-array-methods-cheat-sheet-2e2)

---

**Omad tilayman!** Agar masalalar bilan ishlash davomida savollaringiz yoki tushunmovchiliklaringiz bo‘lsa, bemalol so‘rashingiz mumkin.
