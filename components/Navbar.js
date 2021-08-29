import React from 'react'
import Image from 'next/image'
import ricardo from '../images/ricardo.jpg';
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="ricardo"><Image src={ricardo} alt="ricardo" /></div>
                <div className="butao">Butao 1</div>
                <div className="butao">Butao 2</div>

            </div>

        </div>
    )
}

export default Navbar
