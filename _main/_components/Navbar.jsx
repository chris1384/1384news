import './Navbar.css';
import imgLogo from "../_assets/logo-dark.png"
// eslint-disable-next-line
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '../_hooks/window';
import MenuIcon from '@mui/icons-material/Menu';

export function NavButton(prop) {
    const {name = "Category", link} = prop
    return (
        <>
            <Link   to={link} 
                    className='nav-link' 
                    style={useLocation().pathname === link ? {color: "pink"} : {color: "#FFFFFF"}}>
                    {name}
            </Link>
        </>
    )
}

function NavDropdown({children}){
    return (
        <>
            <div className='nav-drop-body'>
                {children}
            </div>
        </>
    )
}

export function Navbar({children}) {

    // eslint-disable-next-line
    const pageLocation = useLocation()
    const [ dropdownActive, setDropdownActive ] = useState(false)

    // eslint-disable-next-line
    const {width, height, mobileView} = useWindowSize()

    const handleClick = () => {
        setDropdownActive(!dropdownActive)
    }

    return (
        <>
            <div className="navbar-body">

                <div>
                    <img className="nav-logo" src={imgLogo} alt="logo"/>
                </div>

                {mobileView ? (
                    <>
                        <div style={{margin: "auto"}}></div>
                        <MenuIcon className='nav-drop-button' onClick={handleClick}/>
                    </>
                ) : (
                    <>
                    
                        <NavButton name="Home" link="/"/>
                        <NavButton name="LyricsGen" link="/lyrics"/>
                        <NavButton name="Contact" link="/contact"/>
                        <NavButton name="News Card" link="/news/404"/>

                        {children}

                    </>
                )}
            </div>

            {(mobileView && dropdownActive) && (
                <>

                    <NavDropdown>

                        <NavButton name="Home" link="/"/>
                        <NavButton name="LyricsGen" link="/lyrics"/>
                        <NavButton name="Contact" link="/contact"/>
                        <NavButton name="News Card" link="/news/404"/>

                        {children}

                    </NavDropdown>

                </>
            )}

        </>
    );
};