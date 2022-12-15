const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn) //This is reading what inside this file

const textOut = 'This is what i am going to write'
fs.writeFileSync('./txt/input2.txt', textOut) //This is used to write inside files in this we are writing inside textout





