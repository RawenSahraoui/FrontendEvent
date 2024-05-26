import './Homesection2.css'
import thematic from './thematic.jpg'
import values from './values.jpg'
import information from './information.jpg'
export default function Homesection2(){
    return(
        <div id='section2'> 
            <h1>ABOUT THE EVENT</h1>
            <h2>Dive Deep Into The Event</h2>
            <div id='section21'>
                <div className='section210'>
                    <img src={values} alt="" />
                    <h3>Values</h3>
                    <p>Founded on purpose, we live by the principles of Empower, Innovate, Impact.</p>
                </div>
                <div className='section210'>
                    <img src={thematic} alt="" />
                    <h3>Thematic</h3>
                    <p>Innovation and entrepreneurship for a sustainable future.</p>

                </div>
                <div className='section210'>
                    <img src={information} alt="" />
                    <h3>Information</h3>
                    <p>A Hackathon for Young Project Creators.</p>
                </div>
            </div>
        </div>
    )
}