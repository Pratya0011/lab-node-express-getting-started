
//Node Server
var http = require('http')

http.createServer((req,res)=>{
    res.write('Welcpme Pratya')
    res.end()
}).listen(3000,()=>console.log('server started at port 3000'))

//Express server
var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send('Welcome Prograd')
})
app.get('/sample',(req,res)=>{
    res.send('Sample express page')
})
app.listen(4000,()=>console.log('Express server started at port 4000'))