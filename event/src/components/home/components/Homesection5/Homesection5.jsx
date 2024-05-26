import './Homesection5.css'
import atb from './atb.png'
import opus from './opus.png'
import uib from './UIB.jpg'
export default function Homesection5(){
    return(
        <div id='section5'>
            <h1>OUR VALUED ALLIES</h1>
            <h2>Shared Visions, Shared Success</h2>
            <div id='section51'>
                <img src={opus} alt="" />
                <img src={atb} alt="" />
                <img src={uib} alt="" />
            </div>
        </div>
    )
}