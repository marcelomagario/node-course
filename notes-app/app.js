const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('marcelo@gmail.com'))
console.log(validator.isURL('https://www.marcelo.com'))