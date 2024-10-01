Mashq: Kitoblar Kutubxonasi (Library) Tizimini Yaratish

Maqsad: Ko'p darajali meros olish, kompozitsiya va polimorfizmni amaliyotga tadbiq etish.

Vazifa:

    Library nomli klass yarating.
        Xususiyatlar:
            name (kutubxona nomi)
            books (kitoblar ro'yxati – array)
        Metodlar:
            addBook(book) – kutubxonaga yangi kitob qo'shish.
            removeBook(book) – kutubxonadan kitob olib tashlash.
            findBooksByAuthor(author) – muallif bo'yicha kitoblarni qidirish.
            displayBooks() – kutubxona kitoblarini ko'rsatish.
    Book nomli abstrakt klass yarating.
        Xususiyatlar:
            title (sarlavha)
            author (muallif)
            isbn (ISBN)
        Metodlar:
            getInfo() – kitob haqida ma'lumot chiqarish.
    FictionBook va NonFictionBook nomli subklasslar yarating, ular Book klassidan meros oladi.
        FictionBook klassida qo'shimcha xususiyat:
            genre (janr)
        NonFictionBook klassida qo'shimcha xususiyat:
            subject (fan sohasi)
        Har ikkala subklassda getInfo() metodini qayta belgilash.
