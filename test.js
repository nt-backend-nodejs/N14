import { hash, genSalt, compare } from "bcrypt";


const password = "qwer12345"

const salt = await genSalt(1)

const passHash1 = await hash(password, salt)


const valid = await compare(password, passHash1)
const valid2 = await compare("qwer1234567", passHash1)

console.log({ salt, password, passHash1, valid, valid2 });


// const passHash2 = await hash(password, salt)
// const passHash3 = await hash(password, salt)
// const passHash4 = await hash(password, salt)


// console.log({ passHash1, passHash2, passHash3, passHash4 });
