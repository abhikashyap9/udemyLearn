const fs = require('fs');
// ................Blocking synchronous way.............
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn) //This is reading what inside this file

// const textOut = 'This is what i am going to write'
// fs.writeFileSync('./txt/input2.txt', textOut) //This is used to write inside files in this we are writing inside textout

// ...........Non blocking asynchronous way.................

fs.readFile('./txt/async.txt', 'utf-8', (err, data1) => {
    console.log(data1)
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile(`./txt/input2.txt`, 'utf-8', (err, data3) => {
            console.log(data3)
            fs.writeFile(`./txt/input.txt`, `${data2}\n${data3}\n${data1}`, 'utf-8', (err) => {
                console.log('Your value has been writted')
            })
        })
    })
})





