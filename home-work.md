# Vazifalar


1. Berilgan ob'ekt ichidagi barcha kalitlarni sorted tartibda qaytaring.

```jsx
function sortKeys(obj) {
    // Code here
}

// Test case
const obj = {
    b: 2,
    a: 1,
    c: 3
};
console.log(sortKeys(obj)); 
// Output: { a: 1, b: 2, c: 3 }
```

1. Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.

```jsx
function uniqueConcat(arr) {
    // Code here
}

// Test case
console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// Output: "abcd"
```

1. Berilgan massiv ichidagi o'xshash elementlarni toping.

```jsx
function findDuplicates(arr) {
   // Code here
}

// Test case
console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
// Output: [1, 2]
```

1. Berilgan ob'ekt ichidagi barcha qiymatlar yig'indisini toping (faqat son qiymatlarni).

```jsx
function sumObjectValues(obj) {
   // Code here
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(sumObjectValues(obj)); 
// Output: 6
```

1. Berilgan massiv ichidagi elementlarni n qadamga chapga siljiting.

```jsx
function rotateArrayLeft(arr, n) {
// Code here 
}

// Test case
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// Output: [3, 4, 5, 1, 2]
```

1. Berilgan satr ichidagi barcha raqamlarni olib tashlang.

```jsx
function removeDigits(str) {
    // Code here
}

// Test case
console.log(removeDigits("abc123def456")); 
// Output: "abcdef"
```

1. Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring.

```jsx
function oddIndexedElements(arr) {
    // Code here
}

// Test case
console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]
```

1. Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring.

```jsx
function doubleValues(obj) {
   // Code here
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
console.log(doubleValues(obj)); 
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }
```

1. Berilgan ob'ekt ichidagi kalit-qiymat juftliklarini arrayga aylantiring.

```jsx
function objectToArray(obj) {
    // Code here
}

// Test case
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objectToArray(obj)); 
// Output: [["a", 1], ["b", 2], ["c", 3]]
```

1. Berilgan ob'ekt ichidagi barcha kalitlarni ularning qiymati bo'yicha tartiblang.

```jsx
function sortKeysByValue(obj) {
    // Code here
}

// Test case
const obj = {
    a: 3,
    b: 1,
    c: 2
};
console.log(sortKeysByValue(obj)); 
// Output: { b: 1, c: 2, a: 3 }
```