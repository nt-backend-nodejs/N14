### Uyga Vazifa: Kitoblar Boshqaruvi Tizimi uchun Ma'lumotlar Bazasi

#### Vazifalar Ro'yxati

**Kun 1: Ma'lumotlar Bazasini Yaratish va Jadval Tuzish**

##### Mualliflar Jadvali
- **id**: Jadvalning asosiy kaliti (Primary Key), avtomatik oshiriladigan, butun son (`SERIAL`).
- **ism**: Muallifning ismi, matn turi (`VARCHAR`).
- **tugilgan_yili**: Muallifning tug'ilgan yili, sanani saqlash uchun (`DATE`).

##### Kitoblar Jadvali
- **id**: Jadvalning asosiy kaliti (Primary Key), avtomatik oshiriladigan, butun son (`SERIAL`).
- **nomi**: Kitob nomi, matn turi (`VARCHAR`).
- **muallif_id**: Mualliflar jadvalidagi muallifning identifikatoriga bog'lanish (Foreign Key), butun son (`INTEGER`), mualliflar jadvalidagi `id` ustuniga bog'liq.
- **narxi**: Kitob narxi, o'nlik son (`DECIMAL` yoki `NUMERIC`).
- **sahifa_soni**: Kitobning sahifa soni, butun son (`INTEGER`).

##### Kitob Sotuvlari Jadvali
- **id**: Jadvalning asosiy kaliti (Primary Key), avtomatik oshiriladigan, butun son (`SERIAL`).
- **kitob_id**: Kitoblar jadvalidagi kitobning identifikatoriga bog'lanish (Foreign Key), butun son (`INTEGER`), kitoblar jadvalidagi `id` ustuniga bog'liq.
- **sana**: Sotuv sanasi, sanani saqlash uchun (`DATE`).
- **sotilgan_soni**: Sotilgan kitoblar soni, butun son (`INTEGER`).

##### Kitob Sharhlari Jadvali
- **id**: Jadvalning asosiy kaliti (Primary Key), avtomatik oshiriladigan, butun son (`SERIAL`).
- **kitob_id**: Kitoblar jadvalidagi kitobning identifikatoriga bog'lanish (Foreign Key), butun son (`INTEGER`), kitoblar jadvalidagi `id` ustuniga bog'liq.
- **mijoz_id**: Mijozlar jadvalidagi mijozning identifikatoriga bog'lanish (Foreign Key), butun son (`INTEGER`), mijozlar jadvalidagi `id` ustuniga bog'liq.
- **matn**: Sharh matni, matn turi (`TEXT`).
- **baho**: Berilgan baho, butun son (`INTEGER`).

**Kun 2: Ma'lumot Kiritish va Hisobotlar Yaratish**

- **Vazifa 4**: Har bir yaratilgan jadvalga dastlabki ma'lumotlarni kiritish.
- **Vazifa 5**: Mualliflar bo'yicha umumiy sotilgan kitoblar soni va daromadni hisoblash uchun hisobotlar tuzish.
- **Vazifa 6**: O'rtacha baho bo'yicha eng yaxshi baholangan kitoblar ro'yxatini tuzish uchun hisobotlar tuzish.

**Kun 3: So'rovlarni Amalga Oshirish**

- **Vazifa 7**: Har bir muallif uchun eng qimmat va eng arzon kitoblarini topish uchun murakkab so'rovlar ishlatish.
- **Vazifa 8**: Har bir kitob turkumiga ko'ra eng ko'p sotilgan kitoblar ro'yxatini tuzish.

#### Umumiy Ko'rsatmalar

- Har bir jadval uchun kerakli `FOREIGN KEY` bog'lanishlarini o'rnatishga ishonch hosil qiling. Bog'lanishlar o'zgarishlar va o'chirish amallarida mos ravishda kaskadli yangilanishlar va o'chirishlar yoki NULL qiymatlar qo'yilishini ta'minlashi kerak.
- Hisobotlar tuzishda `JOIN`, `GROUP BY`, `ORDER BY` va boshqa zarur SQL operatorlaridan foydalaning.
- Barcha vazifalar aniq va tushunarli tarzda bajarilishi kerak, har bir amal qadam-qadam ko'rsatilgan bo'lishi kerak.
