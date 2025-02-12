require('dotenv');
const express = require("express");
const app = express();
const cors = require("cors");
const puppeteer = require("puppeteer");
const scrapThis = require("../puppeteer-functions/scarpThis");
const GetAllurls = require("../puppeteer-functions/GetAllurls");

app.use(cors({
    origin: `*`,
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

app.post('/allUrls', async (req, res) => {
    try {
        const { url } = req.body;
        const response = await GetAllurls(url);
        console.log(response);
        res.status(200).send(response);
    } catch (err) {
        console.log(err)
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})