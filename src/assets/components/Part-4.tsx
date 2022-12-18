import Artista1 from "../images/artista-1.png";
import Artista2 from "../images/artista-2.png";
import Artista3 from "../images/artista-3.png";
import Artista4 from "../images/artista-4.png";
import Artista5 from "../images/artista-5.png";
import Artista6 from "../images/artista-6.png";
import { ImArrowUpRight2 } from "react-icons/im"

function Artista(Props:any){
    return<div>
        <div className="flex flex-row items-center justify-between bg-neutral-900 py-3 px-8 lg:w-72 hover:bg-red-500 text-orange-500 hover:text-white">
            <div>
                <img src={Props.image} className="w-24"></img>
            </div>
            <div className="flex flex-col">
                <a className="text-white">{Props.name}</a>
                <a>{Props.comment} Fotografias</a>
            </div>
        </div>
    </div>
}

function Part4(){
    return<div className="bg-black p-10">
        <div className="flex justify-center py-10">
        <a className="text-white text-3xl lg:text-5xl font-semibold">Melhores <a className="text-orange-600">artistas</a></a>
        </div>
        <div className="flex justify-center py-5 lg:py-10">
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
                <Artista image={Artista1} name="Mayk brito" comment="80"/>
                <Artista image={Artista2} name="Jakeliny G." comment="99"/>
                <Artista image={Artista3} name="João l. (Biro)" comment="50"/>
                <Artista image={Artista4} name="Tamires Santos" comment="43"/>
                <Artista image={Artista5} name="Ana Silva" comment="23"/>
                <Artista image={Artista6} name="Diego F." comment="20"/>
            </div>
        </div>
        <a href="/#" className="flex flex-row items-center justify-center space-x-3 py-5">
            <a className="text-gray-300 font-semibold">Ver todos os artistas</a>
            <a className="text-orange-500"><ImArrowUpRight2/></a>
        </a>
    </div>
}

export default Part4;