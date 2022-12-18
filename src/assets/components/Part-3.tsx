import Astronauta1 from "../images/astronauta-1.png";
import Astronauta2 from "../images/astronauta-2.png";
import Astronauta3 from "../images/astronauta-3.png";
import Astronauta4 from "../images/astronauta-4.png";
import { ImArrowUpRight2 } from "react-icons/im"

function Part3(){
    return<div className="flex items-center justify-center">
        <div>
        <div className="px-16 lg-px-0 py-20">
            <a className="text-white text-2xl lg:text-5xl font-semibold"><a className="text-orange-600">Populares</a> da semana</a>
        </div>
         <div className="grid grid-cols-2 gap-10 lg:gap-40 px-10 lg:px-56 mb-20">
            <div>
                <div className="flex flex-row items-center justify-between">
                    <a className="text-white text-xl font-semibold">Astronauta 1</a>
                    <a className="text-white text-xl"><ImArrowUpRight2></ImArrowUpRight2></a>
                </div>
                <div className="flex flex-row items-center justify-between py-5">
                    <a className="text-gray-500 font-semibold">Mayk brito</a>
                    <a className="text-orange-500">1.50 RKT</a>
                </div>
                <img src={Astronauta1}/>
            </div>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <a className="text-white text-xl font-semibold">Astronauta 1</a>
                    <a className="text-white text-xl"><ImArrowUpRight2></ImArrowUpRight2></a>
                </div>
                <div className="flex flex-row items-center justify-between py-5">
                    <a className="text-gray-500 font-semibold">Mayk brito</a>
                    <a className="text-orange-500">1.50 RKT</a>
                </div>
                <img src={Astronauta2}/>
            </div>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <a className="text-white text-xl font-semibold">Astronauta 1</a>
                    <a className="text-white text-xl"><ImArrowUpRight2></ImArrowUpRight2></a>
                </div>
                <div className="flex flex-row items-center justify-between py-5">
                    <a className="text-gray-500 font-semibold">Mayk brito</a>
                    <a className="text-orange-500">1.50 RKT</a>
                </div>
                <img src={Astronauta3}/>
            </div>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <a className="text-white text-xl font-semibold">Astronauta 1</a>
                    <a className="text-white text-xl"><ImArrowUpRight2></ImArrowUpRight2></a>
                </div>
                <div className="flex flex-row items-center justify-between py-5">
                    <a className="text-gray-500 font-semibold">Mayk brito</a>
                    <a className="text-orange-500">1.50 RKT</a>
                </div>
                <img src={Astronauta4}/>
            </div>
        </div>
        </div>
    </div>
}

export default Part3;