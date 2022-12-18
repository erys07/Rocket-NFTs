import Banner from "../images/banner2.png"

function Part2(){
    return<div>
        <div className="bg-black">
            <div className="grid grid-cols-4">
                <div className="flex flex-col px-16 md:py-36 border-r border-b border-white z-10 bg-black">
                    <div className="flex flex-col items-center mt-10">
                        <a className="text-white text-3xl lg:text-6xl font-semibold">10K+</a>
                        <a className="text-gray-500 font-semibold">Artes</a>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <a className="text-white text-3xl lg:text-6xl font-semibold">200+</a>
                        <a className="text-gray-500 font-semibold">Vendas</a>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <a className="text-white text-3xl lg:text-6xl font-semibold">20</a>
                        <a className="text-gray-500 font-semibold">Artistas</a>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex flex-col md:flex-row justify-between py-10 md:py-40 lg:py-20 px-10 lg:px-72 space-x-5">
                        <div className="flex flex-col w-11/12 lg:w-5/12 ml-6">
                            <a className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="/#" className="text-orange-500 underline">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</a>
                            <a href="" className="text-white mt-5 underline">Lorem ipsum</a>
                        </div>
                        <div className="flex flex-col mt-8 md:mt-0 w-11/12 lg:w-5/12">
                            <a className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <a href="/#" className="text-orange-500 underline">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</a>
                            <a href="/#" className="text-white mt-5 underline">Lorem ipsum</a>
                        </div>
                    </div>
                    <div className="">
                        <img src={Banner} className="border-b border-whtie"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Part2;