const app = require('express')();
const axios = require("axios")
const iplocate = require('node-iplocate');

app.get('/', async (req, res) => {

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    const apiKey = 'abb0cae033b33812aa6153dedabb57017e1ee677ff23aa30f48e74a5';
    const { data } = await axios.get(`https://api.ipdata.co/${ip}?api-key=${apiKey}`)
    return res.json({ data })
})

app.get('/ok', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    const data = await iplocate(ip)
    return res.json({ data })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});