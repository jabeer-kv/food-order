import logo from './assets/download (4).jpeg'
function Header() {
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
                </ul>
            </div>
        </div>

    )
}
export default Header