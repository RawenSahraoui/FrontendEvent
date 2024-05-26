import './Footer.css'
import fb from './facebookicon.jpg'
import ig from './instagramicon.jpg'
import tk from './tiktokicon.jpg'
import logo from './logo.png'
export default function Footer(){
    return(
        <div id='footcontain'>
        <div id='foot'>
            <div id='foot1'>
                <div><img src={logo} alt="" /></div>
                <div><p>#Hack_The_Future</p></div>
            </div>
            <div id='foot2'>
                <h1>Pages</h1>
                <a href="/">Home</a>
                <a href="/agenda">Agenda</a>
                <a href="/contact">Contact Us</a>
                <a href="/registration">Registration</a>
            </div>
            <div id='foot3'>
                
                <h1>Contact Us</h1>
                <div id='foot31'>
                    <p>29 903 814</p>
                    <p>contact.junior.ensi@gmail.com</p>
                    <p>commercial.junior.ensi@gmail.com</p>
                </div>
                <div classname="footer-social">
                    <a href="#"><img className="icon" src={fb} alt="Facebook"/></a>
                    <a href="#"><img className="icon" src={ig} alt="Instagram"/></a>
                    <a href="#"><img className="icon" src={tk} alt="Tiktok"/></a>
                </div>
            </div>
        </div>
        <div id='foot12'>
            <p>© All rights reserved - ENSI JE 2024</p>
        </div>
        </div>
    )
}