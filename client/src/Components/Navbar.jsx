import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="fixed w-full bg-black">
            <div className="flex justify-around p-4 text-[#90959D] border-b-1 border-[#1E1D1D] text-[13px]">
                <Link to="/">Home</Link>
                <Link>API</Link>
                <Link to="/scrap">Scrap Website</Link>
            </div>
        </div >)
}
export default Navbar;