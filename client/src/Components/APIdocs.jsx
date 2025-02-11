import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import Footer from './Footer';

function APIdocs() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [MDvalue, setMDvalue] = useState(`
\`\`\`jsx
import axios from 'axios';

async function scrap() {
    const response = await axios.post('${BACKEND_URL}/scrap', {
        url: url,
        type: {
            image: true, //as per your need
            text: false,
            link: false,
            media: false,
            email: false
        }
    });
    console.log(response.data);
}
\`\`\`
    `);

    return (
        <div className="pl-5 pr-5">
            <div className="flex justify-center text-2xl pb-10">
                <div>Documentation</div>
            </div>
            <div className="bg-white text-black p-3">
                Developers can call our API and integrate the web scraping tool into their projects.
            </div>

            <div className="pt-2">
                <div className="bg-gray-700 rounded-t-sm w-20 flex justify-center p-2 cursor-pointer">
                    NodeJS
                </div>
                <div>
                    <MDEditor
                        value={MDvalue}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default APIdocs;