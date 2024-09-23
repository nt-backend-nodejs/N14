const person = {
  name: "ALI",
  age:123456
};

// object1.a = 42
Object.defineProperty(person, 'password', {
  // value: "12345q12345",
  enumerable: true,
  configurable: true,
 get() {
    console.log("Getting Value...");
    return val;
  },
  set(newVal) {
    console.log(typeof newVal);
    
    if (typeof newVal != "number")
    {
    console.log("Invalid value..");

    throw Error("sasa")
    }
    console.log("Setting Value...");
    val = newVal;
  },  
});

person.password = "1234"
// 
console.log(person.password);


for (const key in person) {
console.log(key);

}
