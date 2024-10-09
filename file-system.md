**Bayroqlar Jadvali**

Node.js'dagi **fs** modulida fayllarni ochish uchun ishlatiladigan **string bayroqlar** va ularning tavsiflari quyidagi jadvalda keltirilgan:

| Bayroq  | Tavsifi                                                                                                                                                                      |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `'r'`   | **O'qish uchun ochish.** Fayl mavjud bo'lishi **kerak**, aks holda xatolik yuz beradi.                                                                                       |
| `'r+'`  | **O'qish va yozish uchun ochish.** Fayl mavjud bo'lishi **kerak**, aks holda xatolik yuz beradi.                                                                              |
| `'rs+'` | **Sinxron o'qish va yozish uchun ochish.** Tizim keshini chetlab o'tib, bevosita diskdan o'qish va yozish. Fayl mavjud bo'lishi **kerak**.                                    |
| `'w'`   | **Yozish uchun ochish.** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, uning mazmuni **o'chiriladi** (truncation).                                        |
| `'wx'`  | **Yozish uchun ochish (eksklyuziv).** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, xatolik yuz beradi.                                                   |
| `'w+'`  | **O'qish va yozish uchun ochish.** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, uning mazmuni **o'chiriladi**.                                           |
| `'wx+'` | **O'qish va yozish uchun ochish (eksklyuziv).** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, xatolik yuz beradi.                                          |
| `'a'`   | **Qo'shish uchun ochish.** Fayl mavjud bo'lmasa, yangi fayl yaratiladi. Yozish har doim fayl **oxiriga qo'shiladi**.                                                         |
| `'ax'`  | **Qo'shish uchun ochish (eksklyuziv).** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, xatolik yuz beradi. Yozish fayl **oxiriga qo'shiladi**.             |
| `'a+'`  | **O'qish va qo'shish uchun ochish.** Fayl mavjud bo'lmasa, yangi fayl yaratiladi. O'qish va yozish mumkin, yozish har doim fayl **oxiriga qo'shiladi**.                      |
| `'ax+'` | **O'qish va qo'shish uchun ochish (eksklyuziv).** Fayl mavjud bo'lmasa, yangi fayl yaratiladi; agar mavjud bo'lsa, xatolik yuz beradi. Yozish fayl **oxiriga qo'shiladi**.    |

---

**Bayroqlar Tafsilotlari:**

- **`'r'` (Read):** Faylni faqat o'qish uchun ochadi. Fayl mavjud bo'lishi shart. Yozish mumkin emas.
- **`'r+'` (Read + Write):** Faylni o'qish va yozish uchun ochadi. Fayl mavjud bo'lishi shart. Mazmuni saqlanadi.
- **`'rs+'` (Read + Synchronous):** O'qish va yozish uchun ochadi, lekin tizim keshini chetlab o'tadi. Diskdan bevosita o'qish va yozish amalga oshiriladi. Bu flag ishlash tezligini sekinlashtirishi mumkin.
- **`'w'` (Write):** Faylni yozish uchun ochadi. Agar fayl mavjud bo'lmasa, yaratadi; agar mavjud bo'lsa, uning mazmunini o'chiradi. O'qish mumkin emas.
- **`'wx'` (Write + Exclusive):** `'w'` bilan bir xil, lekin fayl mavjud bo'lsa, xatolik yuz beradi. Bu fayllarni tasodifan yozib yuborilishini oldini oladi.
- **`'w+'` (Read + Write):** Faylni o'qish va yozish uchun ochadi. Agar fayl mavjud bo'lmasa, yaratadi; agar mavjud bo'lsa, uning mazmunini o'chiradi.
- **`'wx+'` (Read + Write + Exclusive):** `'w+'` bilan bir xil, lekin fayl mavjud bo'lsa, xatolik yuz beradi.
- **`'a'` (Append):** Faylni qo'shish (append) uchun ochadi. Agar fayl mavjud bo'lmasa, yaratadi. Yozish har doim fayl oxiriga qo'shiladi.
- **`'ax'` (Append + Exclusive):** `'a'` bilan bir xil, lekin fayl mavjud bo'lsa, xatolik yuz beradi.
- **`'a+'` (Read + Append):** Faylni o'qish va qo'shish uchun ochadi. Agar fayl mavjud bo'lmasa, yaratadi. Yozish fayl oxiriga qo'shiladi.
- **`'ax+'` (Read + Append + Exclusive):** `'a+'` bilan bir xil, lekin fayl mavjud bo'lsa, xatolik yuz beradi.

---

**Misollar:**

1. **Faylni faqat o'qish uchun ochish:**

   ```javascript
   fs.open('example.txt', 'r', (err, fd) => {
     // ...
   });
   ```

2. **Faylni o'qish va yozish uchun ochish, mavjud bo'lmasa xatolik:**

   ```javascript
   fs.open('example.txt', 'r+', (err, fd) => {
     // ...
   });
   ```

3. **Faylni yozish uchun ochish, mavjud bo'lmasa yaratish:**

   ```javascript
   fs.open('example.txt', 'w', (err, fd) => {
     // ...
   });
   ```

4. **Faylni yozish uchun ochish, mavjud bo'lsa xatolik:**

   ```javascript
   fs.open('example.txt', 'wx', (err, fd) => {
     if (err && err.code === 'EEXIST') {
       console.error('Fayl allaqachon mavjud');
       return;
     }
     // ...
   });
   ```

5. **Faylga ma'lumot qo'shish uchun ochish:**

   ```javascript
   fs.open('example.txt', 'a', (err, fd) => {
     // ...
   });
   ```

---

**Eslatma:**

- **Eksklyuziv ochish (`'x'` bayroqlari):** Fayl mavjud bo'lsa, xatolik yuz beradi (`EEXIST` xato kodi). Bu fayllarni tasodifan yozib yuborilishini oldini oladi.
- **Keshni chetlab o'tish (`'s'` bayrog'i):** `'rs'` va `'rs+'` flaglari tizim keshini chetlab o'tadi, lekin bu ishlash tezligini sekinlashtirishi mumkin.
- **Qo'shish (`'a'` bayroqlari):** Yozish har doim fayl oxiriga qo'shiladi, kursordan qat'i nazar.

---

**Qo'shimcha Ma'lumot:**

- **Ruxsatnomalarni o'rnatish:** Fayl yaratishda `mode` parametrini ishlatib, faylning ruxsatnomalarini o'rnatishingiz mumkin (masalan, `0o666`).
- **Xatolarni boshqarish:** Fayl operatsiyalarida xatolarni boshqarish juda muhim, ayniqsa fayl mavjud emasligi yoki kirish ruxsatlari cheklangan bo'lsa.

---

**Qo'llanilishi Bo'yicha Tavsiyalar:**

- **Fayl mavjudligini tekshirish:** `'wx'` yoki `'ax'` bayroqlaridan foydalanib, fayl mavjud bo'lsa, xatolik chiqarishingiz mumkin.
- **Faylni yaratish yoki o'zgartirish:** `'w'` yoki `'w+'` bayroqlaridan foydalaning. Ammo, faylning mavjud mazmuni o'chirilishini yodda tuting.
- **Ma'lumotlarni faylga qo'shish:** `'a'` yoki `'a+'` bayroqlaridan foydalaning, bu faylning mavjud mazmunini saqlab qoladi va yangi ma'lumotlarni oxiriga qo'shadi.
- **Faqat o'qish:** Faylni tasodifan o'zgartirmaslik uchun `'r'` bayrog'idan foydalaning.

---

**Misol: Faylni Yozish va O'qish Uchun Ochish**

```javascript
const fs = require('fs');

fs.open('data.txt', 'w+', (err, fd) => {
  if (err) {
    console.error('Xato:', err);
    return;
  }

  const buffer = Buffer.from('Salom, dunyo!');
  fs.write(fd, buffer, 0, buffer.length, 0, (err) => {
    if (err) {
      console.error('Yozish xatosi:', err);
      return;
    }

    fs.read(fd, Buffer.alloc(buffer.length), 0, buffer.length, 0, (err, bytesRead, data) => {
      if (err) {
        console.error('O\'qish xatosi:', err);
        return;
      }

      console.log('Fayl mazmuni:', data.toString());
      fs.close(fd, (err) => {
        if (err) {
          console.error('Faylni yopish xatosi:', err);
        }
      });
    });
  });
});
```

---
**Raqamli Bayroqlar Jadvali**

Node.js'dagi **fs** modulida fayllarni ochish uchun ishlatiladigan **raqamli bayroqlar** ham mavjud. Bu bayroqlar **`fs.constants`** obyektida saqlanadi va ular POSIX bayroqlariga mos keladi. Raqamli bayroqlarni ishlatish orqali siz fayllarni ochish usulini yanada nozik sozlashingiz mumkin.

Quyida raqamli bayroqlar va ularning tavsiflari jadvalda keltirilgan:

| Bayroq                      | Qiymati        | Tavsifi                                                                                                                                                 |
|-----------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fs.constants.O_RDONLY`     | `0`            | **Faqqat o'qish uchun ochish.** Fayl mavjud bo'lishi **kerak**.                                                                                         |
| `fs.constants.O_WRONLY`     | `1`            | **Faqqat yozish uchun ochish.** Fayl mavjud bo'lishi **kerak**.                                                                                         |
| `fs.constants.O_RDWR`       | `2`            | **O'qish va yozish uchun ochish.** Fayl mavjud bo'lishi **kerak**.                                                                                      |
| `fs.constants.O_CREAT`      | `0x00000040`   | **Agar fayl mavjud bo'lmasa, yaratish.**                                                                                                               |
| `fs.constants.O_EXCL`       | `0x00000080`   | **Eksklyuziv ochish.** Agar `O_CREAT` bilan ishlatilsa va fayl mavjud bo'lsa, xatolik yuz beradi (`EEXIST` xato kodi).                                 |
| `fs.constants.O_NOCTTY`     | `0x00000100`   | **TTY qurilmasini ushlamaslik.**                                                                                                                        |
| `fs.constants.O_TRUNC`      | `0x00000200`   | **Faylni bo'shatish.** Fayl ochilganda uning mazmuni o'chiriladi.                                                                                      |
| `fs.constants.O_APPEND`     | `0x00000400`   | **Qo'shish rejimi.** Yozish har doim fayl oxiriga qo'shiladi.                                                                                          |
| `fs.constants.O_DIRECTORY`  | `0x00020000`   | **Faqat kataloglarni ochish.** Agar yo'l katalog bo'lmasa, xatolik yuz beradi.                                                                          |
| `fs.constants.O_NOFOLLOW`   | `0x00010000`   | **Symbolic link larni kuzatmaslik.** Agar yo'l symbolic link bo'lsa, xatolik yuz beradi.                                                                |
| `fs.constants.O_SYNC`       | `0x00000800`   | **Sinxron yozish.** Yozish operatsiyalari to'liq diskka yozilmaguncha qaytmaydi.                                                                        |
| `fs.constants.O_DSYNC`      | `0x00001000`   | **Ma'lumotlarni sinxronlashtirish.** Faqat ma'lumotlar (metadata emas) diskka yozilmaguncha qaytmaydi.                                                  |
| `fs.constants.O_SYMLINK`    | `0x00200000`   | **Symbolic link yaratish.** Fayl yaratishda symbolic link yaratish imkonini beradi.                                                                     |
| `fs.constants.O_DIRECT`     | `0x00004000`   | **To'g'ridan-to'g'ri I/O.** Tizim keshini chetlab o'tib, bevosita disk bilan ishlash.                                                                   |
| `fs.constants.O_NONBLOCK`   | `0x00000800`   | **Bloklamaydigan rejim.** Operatsiyalar bloklanmaydi.                                                                                                   |
| `fs.constants.O_RSYNC`      | `0x00008000`   | **Sinxron o'qish va yozish.** `O_SYNC` va `O_DSYNC` bilan birga ishlatiladi.                                                                            |

**Eslatma:** Bayroqlar qiymatlari operatsion tizimga qarab farqlanishi mumkin. Yuqorida keltirilgan qiymatlar umumiy ma'lumot uchun berilgan.

---

**Bayroqlar Tafsilotlari:**

- **`fs.constants.O_RDONLY` (0):** Faqqat o'qish uchun ochish. Fayl mavjud bo'lishi kerak.
- **`fs.constants.O_WRONLY` (1):** Faqqat yozish uchun ochish. Fayl mavjud bo'lishi kerak.
- **`fs.constants.O_RDWR` (2):** O'qish va yozish uchun ochish. Fayl mavjud bo'lishi kerak.
- **`fs.constants.O_CREAT` (64 yoki `0x00000040`):** Agar fayl mavjud bo'lmasa, yaratadi.
- **`fs.constants.O_EXCL` (128 yoki `0x00000080`):** Eksklyuziv ochish. Agar `O_CREAT` bilan ishlatilsa va fayl mavjud bo'lsa, xatolik yuz beradi.
- **`fs.constants.O_NOCTTY` (256 yoki `0x00000100`):** Agar fayl nomi TTY qurilmasi bo'lsa, uni ushlamaslik.
- **`fs.constants.O_TRUNC` (512 yoki `0x00000200`):** Faylni bo'shatish. Fayl ochilganda uning mazmuni o'chiriladi.
- **`fs.constants.O_APPEND` (1024 yoki `0x00000400`):** Qo'shish rejimi. Yozish har doim fayl oxiriga qo'shiladi.
- **`fs.constants.O_DIRECTORY` (65536 yoki `0x00020000`):** Faqat kataloglarni ochish. Agar yo'l katalog bo'lmasa, xatolik yuz beradi.
- **`fs.constants.O_NOFOLLOW` (131072 yoki `0x00010000`):** Symbolic link larni kuzatmaslik. Agar yo'l symbolic link bo'lsa, xatolik yuz beradi.
- **`fs.constants.O_SYNC` (1052672 yoki `0x00000800`):** Sinxron yozish. Yozish operatsiyalari to'liq diskka yozilmaguncha qaytmaydi.
- **`fs.constants.O_DSYNC` (4096 yoki `0x00001000`):** Ma'lumotlarni sinxronlashtirish. Faqat ma'lumotlar diskka yozilmaguncha qaytmaydi.
- **`fs.constants.O_SYMLINK` (2097152 yoki `0x00200000`):** Symbolic link yaratish imkonini beradi.
- **`fs.constants.O_DIRECT` (16384 yoki `0x00004000`):** To'g'ridan-to'g'ri I/O. Tizim keshini chetlab o'tib, bevosita disk bilan ishlash.
- **`fs.constants.O_NONBLOCK` (2048 yoki `0x00000800`):** Bloklamaydigan rejim. Operatsiyalar bloklanmaydi.
- **`fs.constants.O_RSYNC` (1052672 yoki `0x00008000`):** Sinxron o'qish va yozish. `O_SYNC` va `O_DSYNC` bilan birga ishlatiladi.

---

**Misol: Raqamli Bayroqlarni Foydalanish**

```javascript
const fs = require('fs');

const flags = fs.constants.O_RDWR | fs.constants.O_CREAT;

fs.open('numeric.txt', flags, (err, fd) => {
  if (err) {
    console.error('Xato:', err);
    return;
  }
  // Fayl bilan ishlash
  fs.close(fd, (err) => {
    if (err) {
      console.error('Faylni yopish xatosi:', err);
    }
  });
});
```

**Izoh:** Bu misolda biz `O_RDWR` (o'qish va yozish) va `O_CREAT` (agar fayl mavjud bo'lmasa, yaratish) bayroqlarini bitwise OR (`|`) operatori bilan birlashtirdik.

---

**Bayroqlardan Foydalanish Tavsiyalari:**

- **Bayroqlarni Birlashtirish:** Raqamli bayroqlarni bir nechta amallarni bir vaqtda bajarish uchun birlashtirishingiz mumkin. Buning uchun bitwise OR (`|`) operatoridan foydalaniladi.

  ```javascript
  const flags = fs.constants.O_WRONLY | fs.constants.O_APPEND;
  ```

- **Xavfsizlik:** Fayl operatsiyalarida xavfsizlikni oshirish uchun `O_EXCL` bilan `O_CREAT` ni birga ishlatish mumkin.

  ```javascript
  const flags = fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_WRONLY;
  ```

  Bu fayl mavjud bo'lsa, xatolik yuz beradi va uni tasodifan yozib yuborishning oldini oladi.

- **Platformaga Xos Bayroqlar:** Ba'zi bayroqlar faqat muayyan operatsion tizimlarda qo'llab-quvvatlanadi. Masalan, `O_DIRECT` va `O_NOATIME` har doim ham hamma tizimlarda mavjud emas.

- **Bloklamaydigan I/O:** `O_NONBLOCK` bayrog'i bilan siz bloklamaydigan fayl operatsiyalarini amalga oshirishingiz mumkin. Bu, asosan, socket yoki named pipe lar bilan ishlaganda foydalidir.

---

**Qo'shimcha Ma'lumot:**

- **`fs.open` Metodining Sintaksisi:**

  ```javascript
  fs.open(path, flags[, mode], callback)
  ```

  - **`path`**: Fayl yo'li.
  - **`flags`**: Faylni ochish bayroqlari (raqamli yoki string).
  - **`mode`**: Fayl ruxsatnomalari (ixtiyoriy, default `0o666`).

- **Fayl Ruxsatnomalari:** Faylni yaratishda `mode` parametrini ishlatib, faylning ruxsatnomalarini o'rnatishingiz mumkin.

  ```javascript
  fs.open('example.txt', flags, 0o644, (err, fd) => {
    // ...
  });
  ```

---

**Eslatma:**

- **Xatolik Kodlari:** Agar fayl operatsiyalarida xatolik yuz bersa, `err.code` xato kodini tekshirish orqali muammoni aniqlashingiz mumkin.

  - **`EEXIST`**: Fayl allaqachon mavjud.
  - **`ENOENT`**: Fayl topilmadi.
  - **`EACCES`**: Kirish ruxsatlari rad etildi.

- **Asinxronlik:** Fayl operatsiyalari asinxron bo'lgani sababli, callback funksiyalarda yoki `async/await` bilan `fs.promises` API dan foydalanishda xatolarni to'g'ri boshqarish muhim.

---
**Kirish**

Node.js'dagi **fs** moduli fayl tizimi bilan ishlash imkonini beradi va u fayllarni yaratish, o'qish, yozish va boshqarish uchun turli xil usullarni taqdim etadi. Fayl yaratishda yoki ochishda siz faylning **ruxsatnomalari**ni (file modes) belgilashingiz mumkin. Bu ruxsatnomalar faylga kimlar qanday kirish huquqiga ega ekanligini aniqlaydi. Fayl ruxsatnomalari Unix va Linux tizimlarida ishlatiladigan **octal** (sakkizlik) raqamlar bilan belgilanadi.

---

## Fayl Ruxsatnomalari (File Modes)

### Tavsif

Fayl ruxsatnomalari faylga **o'qish** (read), **yozish** (write) va **bajarish** (execute) huquqlarini o'rnatadi. Ushbu huquqlar uchta guruhga nisbatan belgilanadi:

1. **Foydalanuvchi** (Owner)
2. **Guruh** (Group)
3. **Boshqalar** (Others)

Har bir guruh uchun huquqlar quyidagi qiymatlar bilan belgilanadi:

- **4**: O'qish huquqi (`r`)
- **2**: Yozish huquqi (`w`)
- **1**: Bajarish huquqi (`x`)

Har bir guruhning huquqlari yig'indisi o'sha guruhning ruxsatnomalarini bildiradi.

### Octal (Sakkizlik) Notatsiya

Fayl ruxsatnomalari odatda **octal** (sakkizlik) sonlar bilan ifodalanadi, masalan, `0o644`, `0o666`, `0o755` va hokazo. Bu sonlar quyidagi tartibda o'qiladi:

- **Birinchi raqam**: Foydalanuvchi (owner) huquqlari
- **Ikkinchi raqam**: Guruh (group) huquqlari
- **Uchinchi raqam**: Boshqalar (others) huquqlari

### Ruxsatnomalar Jadvali

Quyida umumiy ruxsatnomalar jadvali keltirilgan:

| Octal | Foydalanuvchi | Guruh | Boshqalar | Tavsifi                            |
|-------|---------------|-------|-----------|------------------------------------|
| `0o777` | rwx | rwx | rwx | Hammasi uchun to'liq huquqlar      |
| `0o755` | rwx | r-x | r-x | Foydalanuvchi uchun to'liq, boshqalar uchun o'qish va bajarish |
| `0o744` | rwx | r-- | r-- | Foydalanuvchi uchun to'liq, boshqalar uchun faqat o'qish      |
| `0o700` | rwx | --- | --- | Faqat foydalanuvchi uchun to'liq huquqlar                   |
| `0o666` | rw- | rw- | rw- | Hammasi uchun o'qish va yozish huquqlari                     |
| `0o644` | rw- | r-- | r-- | Foydalanuvchi uchun o'qish va yozish, boshqalar uchun faqat o'qish |
| `0o600` | rw- | --- | --- | Faqat foydalanuvchi uchun o'qish va yozish                   |

**Izoh:**

- **`r`**: O'qish huquqi
- **`w`**: Yozish huquqi
- **`x`**: Bajarish huquqi
- **`-`**: Huquq yo'q

---

## Node.js'da Fayl Ruxsatnomalarini Belgilash

### `fs.open` Metodida `mode` Parametri

`fs.open` metodida fayl ruxsatnomalarini `mode` parametri orqali belgilashingiz mumkin.

**Sintaksis:**

```javascript
fs.open(path, flags[, mode], callback)
```

- **`mode`**: Faylning ruxsatnomalari (`integer`). Default qiymat `0o666`.

### Misol: Faylni Maxsus Ruxsatnomalar Bilan Yaratish

```javascript
const fs = require('fs');

const filePath = 'example.txt';
const flags = 'w';
const mode = 0o644; // Foydalanuvchi: o'qish va yozish; Guruh va boshqalar: faqat o'qish

fs.open(filePath, flags, mode, (err, fd) => {
  if (err) {
    console.error('Xato:', err);
    return;
  }
  console.log('Fayl muvaffaqiyatli yaratildi va ochildi.');
  fs.close(fd, (err) => {
    if (err) {
      console.error('Faylni yopish xatosi:', err);
    }
  });
});
```

### `fs.writeFile` Metodida `mode` Parametri

Siz `fs.writeFile` metodida ham `mode` parametrini ishlatishingiz mumkin.

**Misol:**

```javascript
fs.writeFile('example.txt', 'Fayl mazmuni', { mode: 0o600 }, (err) => {
  if (err) {
    console.error('Xato:', err);
    return;
  }
  console.log('Fayl muvaffaqiyatli yozildi.');
});
```

Bu misolda fayl faqat foydalanuvchi uchun o'qish va yozish huquqlari bilan yaratiladi.

### `fs.chmod` Metodi orqali Ruxsatnomalarni O'zgartirish

Agar mavjud faylning ruxsatnomalarini o'zgartirmoqchi bo'lsangiz, `fs.chmod` metodidan foydalanishingiz mumkin.

**Misol:**

```javascript
fs.chmod('example.txt', 0o755, (err) => {
  if (err) {
    console.error('Ruxsatnomalarni o\'zgartirish xatosi:', err);
    return;
  }
  console.log('Ruxsatnomalar muvaffaqiyatli o\'zgartirildi.');
});
```

Bu misolda faylga foydalanuvchi uchun to'liq huquqlar, guruh va boshqalar uchun o'qish va bajarish huquqlari beriladi.

---

## Fayl Ruxsatnomalarini Tushunish

### Sakkizlik Notatsiyani Tushunish

Har bir raqam (0-7) uch bitli ikkilik raqamga mos keladi:

- **4 (100)**: O'qish (`r`)
- **2 (010)**: Yozish (`w`)
- **1 (001)**: Bajarish (`x`)

Masalan, `0o755` quyidagicha tahlil qilinadi:

- **Foydalanuvchi (7):** `rwx` (4+2+1)
- **Guruh (5):** `r-x` (4+0+1)
- **Boshqalar (5):** `r-x` (4+0+1)

### Umumiy Ruxsatnomalar

- **`0o777` (rwxrwxrwx):** Hammasi uchun to'liq huquqlar (xavfsizlik uchun tavsiya etilmaydi).
- **`0o755` (rwxr-xr-x):** Dastur fayllari va bajariladigan skriptlar uchun.
- **`0o644` (rw-r--r--):** Matnli fayllar va konfiguratsiya fayllari uchun.

---

## Amaliy Misol: Fayl Yaratish va Ruxsatnomalarni Belgilash

```javascript
const fs = require('fs');

const content = '#!/usr/bin/env node\nconsole.log("Assalomu alaykum!");';
const options = { mode: 0o755 };

fs.writeFile('script.js', content, options, (err) => {
  if (err) {
    console.error('Xato:', err);
    return;
  }
  console.log('Skript fayli yaratildi va bajarish huquqi berildi.');
});
```

Bu misolda biz `script.js` nomli fayl yaratib, unga bajarish huquqini beramiz, shunda u bajargan holda ishga tushirilishi mumkin.

---

## E'tibor Berish Kerak Bo'lgan Nuqtalar

- **Xavfsizlik:** Fayl ruxsatnomalarini belgilashda ehtiyot bo'ling. Juda keng huquqlar (masalan, `0o777`) xavfsizlik xavflarini keltirib chiqarishi mumkin.
- **Default Ruxsatnomalar:** Agar `mode` parametri berilmasa, Node.js `0o666` (rw-rw-rw-) ruxsatnomalarini qo'llaydi, lekin tizimning `umask` qiymati bu ruxsatnomalarni cheklashi mumkin.
- **`umask`:** Tizim darajasida fayl ruxsatnomalarini cheklash uchun ishlatiladi. Masalan, agar `umask` `0o022` bo'lsa, yangi fayllar uchun maksimal ruxsatnomalar `0o644` bo'ladi.

---

## `fs.promises` API Bilan Ishlash

Agar siz `async/await` usulidan foydalanishni istasangiz, `fs.promises` API orqali fayl ruxsatnomalarini belgilashingiz mumkin.

**Misol:**

```javascript
const fs = require('fs').promises;

(async () => {
  try {
    await fs.writeFile('example.txt', 'Mazmun', { mode: 0o640 });
    console.log('Fayl yaratildi.');
  } catch (err) {
    console.error('Xato:', err);
  }
})();
```

---
