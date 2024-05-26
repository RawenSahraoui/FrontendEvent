import './Header.css'
import logo from './logo.png'
export default function Header(){
    return(
        <div id='head'>
            <div>
                <img id="image"src={logo} alt="" />
            </div>
            <div id='head1'>
                <a href="/">Home</a>
                <a href="/agenda">Agenda</a>
                <a href="/contact">Contact Us</a>
                <a href="/registration">Registration</a>
            </div>
        </div>
    )
}