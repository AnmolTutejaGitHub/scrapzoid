import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
function ScrapType({ type, url, SetScrapData }) {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [disable, setDisable] = useState(false);

    async function getScrapedData() {
        const toastId = toast.loading("scraping...");
        setDisable(true);
        try {
            console.log(type);
            const response = await axios.post(`${BACKEND_URL}/scrap`, {
                url: url,
                type: type
            })
            SetScrapData(response.data);
            console.log(response.data);
            toast.success("scraped!!");
        } catch (e) {
            toast.error("some error occurred");
            console.log(e);
        } finally {
            toast.dismiss(toastId);
            setDisable(false);
        }
    }
    return (<div>
        <button onClick={getScrapedData} className={`bg-black rounded-md text-white p-2 cursor-pointer ${disable ? 'bg-gray-800' : ''}`} disabled={disable}>Scrap</button>
    </div >)
}
export default ScrapType;