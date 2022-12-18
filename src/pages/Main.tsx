import Header from "../assets/components/Header"
import Part1 from "../assets/components/Part-1"
import Part2 from "../assets/components/Part-2"
import Part3 from "../assets/components/Part-3"
import Part4 from "../assets/components/Part-4"
import Footer from "../assets/components/Footer"

function Main(){
    return <div className="bg-[url('../assets/images/background.png')] bg-contain  h-11/12">
            <Header></Header>
            <Part1></Part1>
            <Part2></Part2>
            <Part3></Part3>
            <Part4></Part4>
            <Footer></Footer>
    </div>
}
export default Main;