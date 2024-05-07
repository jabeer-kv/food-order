import logo from '../assets/download (4).jpeg'
import { useState } from 'react'
function Header() {
    const [change,setchange]=useState("login")
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
                        about
                    </li>
                    <li>
                        contact
                    </li>
                    <li>
                        cart
                    </li>
                    <li>
                        <button onClick={ ()=>{
                            setchange("logout")
                        }}
                        >{change}</button>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Header