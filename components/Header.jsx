import React from 'react'
//permette la navigazione tra pagine
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar  navbar-expand-lg mb-4' style={{ backgroundColor: '#000' }}>
            <div className="container-fluid ">
                <ul className='list-unstyled d-flex gap-3'>
                    <li className='list-unstyled'><Link className="navbar-brand" href="#" style={{ color: '#e50914', fontWeight: 'bold', fontSize: "3rem" }} to="/">BoolFlix</Link></li>
                </ul>


            </div>
        </nav>
    )
}

export default Header