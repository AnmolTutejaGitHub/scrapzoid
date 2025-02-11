import { useState } from "react";

function Footer() {
    const [year] = useState(new Date().getFullYear());
    return (
        <div className="p-4 flex justify-between pl-10 pr-10 border-b-1 border-t-1 border-[#1E1D1D] mb-1">
            <div className="text-[13px] text-gray-400">© {year} Scrapzoid. All rights reserved.</div>
            <div className="flex gap-2 text-[13px]">
                <div>Terms of Service</div>
                <div>Privacy</div>
            </div>
        </div>
    )
}
export default Footer;