import logo from '../assets/download (4).jpeg'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const [change,setchange]=useState("login")
    useEffect(()=>{
        console.log("its me use effect");
    },[change])
    return (
        <div className='header'>
            <div className='logo-container'>

                <img className='logo' src={logo} alt="" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        home
                    </li>
                    <li> 
                        <Link to="/about"> about</Link>
                       
                    </li>
                    <li>
                       <Link to="/contact">contact </Link>
                    </li>
                    <li>
                        cart
                    </li>
                    <li>
                        <button onClick={ ()=>{
                            change==="login"
                            ? setchange("logout")
                            : setchange("login")
                        }}
                        >{change}</button>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Header