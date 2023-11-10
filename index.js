const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/hello', (req,res) => {
    res.send({
        "msg": "Hello world"
    })
})

app.get('/echo/:id', (req,res) => {
    res.send(req.params);
})

app.post('/sum', (req, res) => {
    
    const numb = req.body.numbers;
    let sum = 0;

    for (let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }

    res.json({"sum": sum})
})

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})