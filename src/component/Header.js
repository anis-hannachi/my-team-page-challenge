import React from 'react'
import '../style.css'

const Header = ({ title }) => {

    return (
        <header className='headerContainer'>
            <h1 className='header'>{title}</h1>
            <h3 className='head'>Who we are</h3>
            <p className='parag'>We are team of creatively diverse.
            driven. innovative individuals working in various locations from the world.
            </p>
        </header>
    )
}

Header.defaultProps = {
    title: 'The creative crew',
}



export default Header
