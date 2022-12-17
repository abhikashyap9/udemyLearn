const fs = require('fs')
const http = require('http')
const url = require('url')
var slugify = require('slugify')

let data = fs.readFileSync(`${__dirname}/Data.json`, 'utf-8')
const dataObj = JSON.parse(data)
console.log(slugify('Hello Guyssyss'))
console.log(dataObj)
let obj = dataObj.map((el) => slugify(el.employee.name, { lower: true }))
console.log(obj)

const server = http.createServer((req, res) => {
    console.log('Request=>', req.url)
    let pathName = req.url
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is overview')
    } else if (pathName === '/product') {
        res.end('This is product')
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text-html',
            'my-own-header': 'Hello world',
        })
        res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on server 8000')
})
