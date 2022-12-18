import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.svg";
import Mask from "../images/logo_MetaMask.svg";

function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    const handleChangeMenuOpen = () => setMenuOpen(!menuOpen)

    return<div id="header" className="flex flex-row justify-between lg:items-center p-6 lg:p-12">
        <div className="">
            <img src={Logo} className="mb-10 w-44 lg:w-72"></img>
        </div>
        <div>
            <button onClick={handleChangeMenuOpen} className="md:hidden ml-36 text-white">
                    {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={menuOpen ? "flex flex-col" : "hidden md:block"}>
            <div className="flex flex-col lg:flex-row items-center">
                <a className="text-white font-semibold lg:px-10">Comprar NFT</a>
                <a className="text-white font-semibold lg:px-10">Sobre</a>
                <a className="text-white font-semibold lg:px-10">FAQ</a>
                <a className="items-center flex px-2 lg:px-4 text-sm w-40 lg:w-48 lg:text-base py-2 bg-white font-bold lg:ml-72"><img src={Mask}/>Conectar carteira</a>
            </div>
            </nav>
        </div>
    </div>
}

export default Header;