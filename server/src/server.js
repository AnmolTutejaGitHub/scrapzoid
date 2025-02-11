const express = require("express");
const app = express();
const cors = require("cors");
const puppeteer = require("puppeteer");
const scrapThis = require("../puppeteer-functions/scarpThis");

app.use(cors({
    origin: '*',
    // credentials: true
}));
app.use(express.json());

app.post('/scrap', async (req, res) => {
    try {
        let puppeteerResponse = [];
        const { url, type } = req.body;
        puppeteerResponse = await scrapThis(url, type);
        res.status(200).send(puppeteerResponse);
    } catch (e) {
        console.log(e)
        res.status(400).send("some error occurred");
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})