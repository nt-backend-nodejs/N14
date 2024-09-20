# HOME WORK


1. 
> Closure function yarating u butun sonlar **(n)(m)** qabul qilsin (**n > 0, m > 0**). 
1 dan ==n== gacha bo'lgan sonlarning ==m== chi darajasidagi sonlar yig'indisini hisoblang!

```js
/*
1^m + 2^m + 3^m ... n^m
*/
calc(3)(2) //=> 1^2 + 2^2 + 3^2 = 
```

2. 
> Closure function yarating ular butun sonlar **(n)(m)**  qabul qilsin (**n > 0, m > 0**) shu hola ==n== dan ==m== gacha bo'lgan sonlar ichidagi o'ziga va birga bo'linadigan tub sonlar yi'g'indisini yarating

```js
calc(1)(10) //=> 1 + 2 + 3 + 5 + 7  
```




3. 
> Closure function yarating ular string typedagi ma'lumot qabul qilsin **(str1)(str2)**  qabul qilsin **m** va **n** dagi harflar bir biroda bormi shuni hisoblaydigan dastur tuzing


```js
isEqual("abc")("bac") //=> true
isEqual("apple")("elppa") //=> true
isEqual("abcde")("abode") //=> false
// harflar bir birida bo'lishi kerak biroda bor biroda yo'q so'zlarda hato berishi kerak!. 
```

4. 
> Recursive function bilan fibonacci algorithimni tuzing. function butun Number typedafi parametr qabul qilsin**(n)**.

![[Pasted image 20240404115153.png]]
![[Pasted image 20240404115309.png]]


5. 
> Closure function yarating ular massiv va butun son **(n)(m)**  qabul qilsin (**n = [], m > 0**) shu hola ==n== massivning ichidagi elementlarni ichida **m** soniga yaqin bo'lgan sonni topadigan algorithm tuzing!.

```js

func([16,8,2,1,5,9,3],6) //=> 5
func([1,12,32,2,10,5,4],30) //=> 32
```





---- 
> [! note]
Buni o'z ustida ishlamoqchi bo'lganlar ishlasa bo'ladi majburiy emas ammo bonus bal qo'shiladi!.



# **Bonus** ( Buni o'z ustida ishlamoqchi bo'lganlar ishlasa bo'ladi majburiy emas ammo bonus bal qo'shiladi!.)
> Magic deb nomlangan object yarating uning **replace, length, toUpperCase** methodlari bo'lsin va shu methodlar o'z nomidek ish bajarsin!.

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