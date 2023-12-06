import { useContext, useEffect, useRef } from 'react'
import { FaBars } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { UserContext } from '../../context/UserContext';

const Navbar = () => {

    const {setUserInfo, userInfo} = useContext(UserContext)

    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const linkStyles = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
    }

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(res => {
            res.json().then(userInfo => {
            setUserInfo(userInfo)
            })
        })
    }, [])

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null)
    }

    const username = userInfo?.username;

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2 className="logo"><Link to="/">Akasa Blog</Link></h2>
                    <button className="nav-toggle"
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef} style={linkStyles}>
                    <ul className='links' ref={linksRef}>
                        {username && (
                            <>
                                <li className='title-case bold'>Hello <span className='username'>{username}!</span></li>
                                <li>
                                    <Link to='/create_post'>New Post</Link>
                                </li>
                                <a onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket fa-xl" style={{color: "#4b4b4b"}}></i></a>
                            </>
                        )}
                        {!username && (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

{/* <li>
    <Link to="/my_account">
        <i className="fa-solid fa-circle-user fa-2xl" style={{ color: "#d6d6d6" }}></i>
    </Link>
</li> */}