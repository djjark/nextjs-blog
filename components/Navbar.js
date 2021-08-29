import React from 'react'
import Image from 'next/image'
import ricardo from '../images/ricardo.jpg';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/" ><div className="ricardo"><Image src={ricardo} alt="ricardo" /></div></Link>
                <div className="div1">
                    <Link href="/Ricardo" ><a className="butao">Ricardo</a></Link>
                    <Link href="/Diogo" ><a className="butao">Diogo</a></Link>
                    <a className="butao">Butao 2</a>
                </div>


            </div>

        </div>
    )
}

export default Navbar
