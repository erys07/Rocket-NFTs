import Logo from "../images/logo.svg";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMail } from "react-icons/ai"
import{ FiTwitter } from "react-icons/fi"

function Footer(){ 
    return<div className="bg-neutral-900 py-5">
        <div className="flex flex-row justify-between p-10">
            <img src={Logo} className="w-56 lg:w-72"/>
            <a href="/#header" className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-red-500"><a className="text-2xl"><FaArrowUp/></a></a>
        </div>
        <div className="lg:grid lg:grid-cols-4 border border-gray-500">
            <div className="flex flex-col items-center justify-center px-40 lg:border-r border-b py-10 lg:py-0 border-gray-500">
                <div className="w-56 flex items-center text-center">
                    <a className="text-white text-2xl">Fique por dentro de <a className="text-orange-500">todas as novidades</a></a>
                </div>
                <div className="flex flex-row mt-5">
                    <input placeholder="email@gmail.com" className="h-12 bg-gray-900 px-2"></input>
                    <button className="w-16 h-12 bg-white font-bold">Enviar</button>
                </div>
            </div>
            <div className="lg:col-span-3">
                <div className="lg:grid lg:grid-cols-3 flex flex-col items-center justify-center lg:p-20 lg:ml-48">
                    <div className="grid grid-rows-5 mt-10 lg:mt-0">
                        <a href="/#" className=" text-white font-bold">Empresa</a>
                        <a href="/#" className=" text-gray-400">Sobre</a>
                        <a href="/#" className=" text-gray-400">Serviços</a>
                        <a href="/#" className=" text-gray-400">Time</a>
                        <a href="/#" className=" text-gray-400">Carreira</a>
                    </div>
                    <div className="grid grid-rows-5 mt-10 lg:mt-0">
                        <a href="/#" className=" text-white font-bold">Mapa</a>
                        <a href="/#" className=" text-gray-400">Galeria</a>
                        <a href="/#" className=" text-gray-400">Populares</a>
                        <a href="/#" className=" text-gray-400">Vendas</a>
                        <a href="/#" className=" text-gray-400">Contato</a>
                    </div>
                    <div className="grid grid-rows-5 mt-10 lg:mt-0 mb-5 lg:mb-0">
                        <a href="/#" className=" text-white font-bold">Links</a>
                        <a href="/#" className=" text-gray-400">FAQs</a>
                        <a href="/#" className=" text-gray-400">Termos</a>
                        <a href="/#" className=" text-gray-400">Política</a>
                        <a href="/#" className=" text-gray-400">Ajuda</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-between px-14 py-4 mt-5">
            <div>
                <a href="/#" className="text-gray-500">www.rocketseat.com.br</a>
            </div>
            <div className="flex flex-row space-x-8 mt-8 lg:mt-0">
                <a href="/#" className="text-gray-500 text-2xl"><AiOutlineInstagram/></a>
                <a href="/#" className="text-gray-500 text-2xl"><AiOutlineYoutube/></a>
                <a href="/#" className="text-gray-500 text-2xl"><FiTwitter/></a>
                <a href="/#" className="text-gray-500 text-2xl"><AiOutlineMail/></a>
            </div>
        </div>
    </div>
}

export default Footer;