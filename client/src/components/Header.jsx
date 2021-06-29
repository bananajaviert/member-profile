import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <Link to='/' className='header-link title'>Members Profile</Link>
            <Link to='/create' className='header-link add'>Add New</Link>
        </header>
    )
}

export default Header
