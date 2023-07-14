const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Ini Get')
})

app.post('/', (req, res) => {
    res.send('Ini Post')
})

app.get('/:nama', (req, res) => {
    res.send("Hello" + req.params.nama)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})