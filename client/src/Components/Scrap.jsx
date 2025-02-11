import { useState } from "react";
import ScrapType from "./ScrapType";

function Scrap() {
    const [type, setType] = useState({
        image: false,
        text: false,
        link: false,
        media: false,
        email: false
    });

    const [url, setUrl] = useState("");
    const [scrapData, setScrapData] = useState([]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setType((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    function SetScrapData(data) {
        setScrapData(data);
    }

    return (
        <div className="pb-10">
            <div className="flex justify-center text-black">
                <div className="flex flex-col justify-center items-center bg-white w-96 p-4 rounded-md gap-2">
                    <div className="font-bold text-3xl p-3">Puppeteer Scraper</div>
                    <input placeholder="Enter Url" value={url} onChange={(e) => setUrl(e.target.value)} className="w-[80%] outline-none border-b-2 border-black"></input>
                    <div className="flex gap-2">
                        <input type="checkbox" name="image" checked={type.image} onChange={handleCheckboxChange} /> Image
                        <input type="checkbox" name="text" checked={type.text} onChange={handleCheckboxChange} /> Text
                        <input type="checkbox" name="link" checked={type.link} onChange={handleCheckboxChange} /> Link
                        <input type="checkbox" name="media" checked={type.media} onChange={handleCheckboxChange} /> Media
                        <input type="checkbox" name="email" checked={type.email} onChange={handleCheckboxChange} /> Email
                    </div>
                    <ScrapType url={url} type={type} SetScrapData={SetScrapData} />
                </div>
            </div>
            <div className="p-6 bg-white text-black mt-5 mb-5  ml-20 mr-20 border-l-4 border-red-600">
                <p> <span className="font-bold text-red-600">Note : </span> Our scraping tool only extracts currently visible content from web pages. Dynamic elements, such as those loaded via JavaScript or infinite scrolling, may not be captured.
                    Additionally, some pages require login access, and websites with anti-bot protections may block automated scraping.</p>
            </div>

            {scrapData.length > 0 && <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center text-2xl mb-5">Scrapped Data</div>
                <div className="w-[95%] bg-white text-black rounded-sm p-2">
                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {JSON.stringify(scrapData, null, 2)}
                    </pre>
                </div>
            </div>}

        </div>
    );
}

export default Scrap;