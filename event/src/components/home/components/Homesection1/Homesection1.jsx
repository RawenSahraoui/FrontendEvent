import './Homesection1.css'
import './CountDown'
import i1 from './image0.jpg'
export default function Homesection1(){
    return(
        <div id='sect1'>
            <div id="sect11"><img src={i1} alt="" /></div>
            <div id='sect12'>
                <h1>INNOHACK</h1>
                <h3>#Hack_The_Future</h3>
                <div id='sect121'>
                    <p>Join the Data Science Fusion:</p>
                    <p>competition, workshops, and prizes, defining the forefront of innovation.</p>
                    <p>1st June ,The Dot</p>
                </div>   
                <div classname="timer">
                        <div classname="sub_timer">
                            <h1 id="day" class="digit">00</h1>
                            <p classname="digit_name">Jours</p>
                        </div>
                        <div classname="sub_timer">
                            <h1 id="hour" class="digit">00</h1>
                            <p classname="digit_name">H</p>
                        </div>
                        <div classname="sub_timer">
                            <h1 id="min" class="digit">00</h1>
                            <p classname="digit_name">Min</p>
                        </div>
                        <div classname="sub_timer">
                            <h1 id="sec" class="digit">00</h1>
                            <p classname="digit_name">Sec</p>
                        </div>
                    </div>   
            </div>
        </div>
    )
}