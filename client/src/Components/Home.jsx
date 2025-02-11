import Header from '../assets/header.png';
import HowItWorks from './HowItWorks';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="pl-20 flex justify-around">
                <div className='flex flex-col gap-3 pt-8'>
                    <p className="text-[#F7F8F8] font-inner text-5xl font-semibold">
                        Scrapzoid - The Ultimate <br /> Web  Scraping Tool. <br /> </p>
                    <p className='text-xl text-[#B5B6B6]'>Efficiently extract data from websites with ease</p>
                </div>
                <div>
                    <img src={Header} className=" h-auto object-cover header-img-display-none" />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-white items-center gap-1 p-2 rounded-md cursor-pointer text-black' onClick={() => navigate("/scrap")}>Get Started </button>
            </div>
            <HowItWorks />
        </div >
    )
}
export default Home;