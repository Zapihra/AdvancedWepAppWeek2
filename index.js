const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

const list = [];


app.get('/hello', (req,res) => {
    res.json({
        "msg": "Hello world"
    })
})

app.get('/echo/:id', (req,res) => {
    res.json(req.params);
})

app.post('/sum', (req, res) => {
    
    const numb = req.body.numbers;
    let sum = 0;

    for (let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }

    res.json({"sum": sum})
})

app.post('/list', (req, res) => {
    console.log(req.body)

    list.push(req.body.new)

    res.json({"list": list})
})


app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})