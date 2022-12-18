import Astronauta1 from "../images/astronauta-1.png";
import Astronauta2 from "../images/astronauta-2.png";
import Astronauta3 from "../images/astronauta-3.png";
import Astronauta4 from "../images/astronauta-4.png";
import { ImArrowUpRight2 } from "react-icons/im"

function Astronauta(Props:any){
    return<div>
        <div className="flex flex-row items-center justify-between">
            <a className="text-white text-xl font-semibold">{Props.title}</a>
            <a className="text-white text-xl"><ImArrowUpRight2></ImArrowUpRight2></a>
        </div>
        <div className="flex flex-row items-center justify-between py-5">
            <a className="text-gray-500 font-semibold">{Props.name}</a>
            <a className="text-orange-500">{Props.rkt} RKT</a>
        </div>
        <img src={Astronauta1}/>
    </div>
}

function Part3(){
    return<div className="flex items-center justify-center">
        <div>
        <div className="px-16 lg-px-0 py-20">
            <a className="text-white text-2xl lg:text-5xl font-semibold"><a className="text-orange-600">Populares</a> da semana</a>
        </div>
         <div className="grid grid-cols-2 gap-10 lg:gap-40 px-10 lg:px-56 mb-20">
            <Astronauta title="Astronauta 1" name="Mayk Brito" rkt="1.50"/>
            <Astronauta title="Astronauta 2" name="Jakeliny Gracielly" rkt="2.0"/>
            <Astronauta title="Astronauta 3" name="João Inácio(Biro)" rkt="3.75"/>
            <Astronauta title="Astronauta 4" name="Tamires Santos" rkt="4.30"/>
        </div>
        </div>
    </div>
}

export default Part3;