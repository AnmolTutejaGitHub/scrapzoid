const puppeteer = require("puppeteer");

async function scrapThis(url, type) {
    try {
        let response = [];
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url);
        if (type.image) {
            const imageUrl = await page.evaluate(() =>
                Array.from(document.querySelectorAll("img")).map(img => ({
                    src: img.src,
                    alt: img.alt
                }))
            );
            response.push({ type: "image", imageUrl: imageUrl });
        }
        if (type.text) {
            const textContent = await page.evaluate(() => document.body.innerText);
            response.push({ type: "text", textContent: textContent });
        }
        if (type.link) {
            const linkurls = await page.evaluate(() =>
                Array.from(document.querySelectorAll("a")).map(a => a.href)
            );
            response.push({ type: "link", linkurls: linkurls });
        }
        if (type.media) {
            const mediaArray = await page.evaluate(() => ({
                videos: Array.from(document.querySelectorAll("video source")).map(v => v.src),
                audios: Array.from(document.querySelectorAll("audio source")).map(a => a.src)
            }));
            response.push({ type: "media", mediaArray: mediaArray });
        }
        if (type.email) {
            const emails = await page.evaluate(() =>
                Array.from(document.querySelectorAll("a[href^='mailto:']"))
                    .map(a => a.href.replace("mailto:", ""))
            );
            response.push({ type: "email", emails: emails });

        }

        if (response.length == 0) throw Error("No Field Selected");
        return response;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
module.exports = scrapThis;