import React from 'react'
//permette la navigazione tra pagine
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar bg-primary mb-4'>
            <div className="container-fluid ">
                <ul className='list-unstyled d-flex gap-3'>
                    <li className='list-unstyled'><Link className='navbar-brand' to="/">BoolFlix</Link></li>
                </ul>


            </div>
        </nav>
    )
}

export default Header