import Homesection1 from "./components/Homesection1/Homesection1";
import Homesection2 from "./components/Homesection2/Homesection2";
import Homesection3 from "./components/Homesection3/Homesection3";
import Homesection4 from "./components/Homesection4/Homesection4";
import Banner from './components/Banner/Banner';
import Homesection5 from "./components/Homesection5/Homesection5";
export default function Home(){
    return(
        <div>
            <Homesection1 />
            <Homesection2 />
            <Homesection3 />
            <Homesection4 />
            <Banner />
            <Homesection5 />
        </div>
    )
}