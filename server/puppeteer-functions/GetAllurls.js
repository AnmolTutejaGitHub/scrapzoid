const puppeteer = require("puppeteer");

async function GetAllurls(baseUrl) {
    const browser = await puppeteer.launch({
        headless: true,
        timeout: 120000,
        protocolTimeout: 120000,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
        if (["image", "stylesheet", "font"].includes(req.resourceType())) {
            req.abort();
        } else {
            req.continue();
        }
    });
    const visited = new Set();
    const toVisit = new Set([baseUrl]);

    while (toVisit.size > 0) {
        const url = Array.from(toVisit).pop();
        toVisit.delete(url);
        if (visited.has(url)) continue;
        try {
            await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
            visited.add(url);
        } catch (error) {
            console.error(`Failed to load ${url}: ${error.message}`);
            continue;
        }

        try {
            const links = await page.evaluate((base) => {
                return Array.from(document.querySelectorAll("a[href]"))
                    .map(a => new URL(a.href, base).href)
                    .filter(link => link.startsWith(base));
            }, baseUrl);

            links.forEach(link => toVisit.add(link));
        } catch (error) {
            console.log(`Skipped link extraction on ${url}: ${error.message}`);
        }
    }
    await browser.close();
    return visited;
}
module.exports = GetAllurls;