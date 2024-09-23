# HOME WORK

1. Drink Sorting

> You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

> Array ichida object bo'lsin objectlarni price bo'yicha sort qiladigan algorithm tuzing!

```
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
```

The output of the sorted drinks object will be:
### Examples

```
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
```

2. Convert Key, Values in an Object to Array
>Write a function that converts an object into an array of keys and values.

>objectToArray Function object olsin va o'sha objectni  array ko'rinishida qaytarib bersin!.
### Examples

```
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
```

3. ES6: Destructuring Objects X

> Given an array of user objects.

> function yarating u arraychida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin
```
let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

for(/* add code inside these parenthesis only */) {
      names.push(name)
}

console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
```

4.  Ageing the Population...

Given an object of _people_ and their _ages_, return how old the people would be after `n` years have passed. Use the **absolute value** of `n`.

> afterNYears function yarating **people**  deb nomlanagan object va **n** year ni kiritilsin **n** kiritilganda objectdagi hamma qiymatlar **n** yerga ortishi kerak!.

### Examples

```
afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) ➞ {
  "Genie" : 1005,
  "Joe" : 45
}
```


5.  CRUD DATABASE Simulation application
```js

const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		//yangi userni studentsList ga qo'shsin va  studentsList ni qaytarib yuborsin
	},

	read(name) {
		//userni studentsList dan topib qaytarib bersin!.
	},

	update(name, user) {
		// studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
	},

	delete(name) {
		// studentsList dan faqat bitta userni o'chiring! qaytarish ihtihoriy message qaytarish ihtiyoriy
		delete this.studentsList["xamidullo"]

	}

}

database.create({
	name: "xamidullo",
	age: 33,
	id: 123,
	tolov: false // yoki true
})

database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})

database.delete("xamidullo")

console.log(database.studentsList)
```




6 . Repeating Letters

Create a function that takes a string and returns a string in which each character is repeated once.

### Examples

```js
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
```
----

7. Check If It's a Title String

Check if a string `title` is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

### Examples

```js
checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false
```

----


# Leetcode

1. [387. First Unique Character in a String ](https://leetcode.com/problems/first-unique-character-in-a-string/description/)
2. [415. Add Strings ](https://leetcode.com/problems/add-strings/description/)
