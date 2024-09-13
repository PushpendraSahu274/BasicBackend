require('dotenv').config()

console.log("Wecome to backend ");
const express = require('express')

const app = express()
const port = 4000;

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('pushpendra.com');
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code </h1>');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Express app listening on port ${port}`);
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>chai aur code </h2>");
})