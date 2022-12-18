import Group from "../images/group-avarts.png";
import Badge from "../images/badge.svg";
import Artista1 from "../images/galeria-1.png"
import Artista2 from "../images/galeria-2.png"
import Artista3 from "../images/galeria-3.png"
import Artista4 from "../images/galeria-4.png"
import Artista5 from "../images/galeria-5.png"
import Artista6 from "../images/galeria-6.png"
import Artista7 from "../images/galeria-7.png"
import Artista8 from "../images/galeria-8.png"

function Part1(){
        return <div>
            <div className="grid grid-row-3 lg:grid-cols-3 p-0 lg:p-20">
            <div>
                <div className="flex flex-col items-center">
                    <div className="w-6/12">
                        <a className="text-white">Mercado digital para colecionáveis em criptos e tokens não fungível(NFT). Compre, venda e descubra ativos digitais exclusivos para você.</a>
                    </div>
                    <div className="flex flex-row py-10">
                        <img src={Group}></img>
                        <div className="flex flex-col justify-end">
                            <a className="text-white font-semibold">+10</a>
                            <a className="text-white">Artistas selecionados</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-7/12">
                    <a className="text-white font-semibold text-5xl">Descubra a verdadeira arte digital e colecione diversas <a className="text-red-400">NFTs</a></a>   
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
                <img src={Badge} className="w-56 lg:w-80 h-auto mb-10 lg:mb-0"></img>
            </div>
            </div>
            <div className="flex items-center justify-center mb-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-10 lg:px-48">
                <img src={Artista1} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista2} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista3} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista4} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista5} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista6} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista7} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
                <img src={Artista8} className="shadow-md shadow-gray-300 hover:shadow-sm hover:shadow-white"/>
            </div>
            </div>
        </div>
}

export default Part1;