const app = require('express')();
const axios = require("axios")

// source file is iso-8859-15 but it is converted to utf-8 automatically

app.get('/', async (req, res) => {
    const apiKey = 'abb0cae033b33812aa6153dedabb57017e1ee677ff23aa30f48e74a5';
    const { data } = await axios.get(`https://api.ipdata.co?api-key=${apiKey}`)
    return res.json({ data })
})

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})