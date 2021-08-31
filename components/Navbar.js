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
                    {/* <Link href="/Testebd" ><a className="butao">TesteBD</a></Link> */}
                    <Link href="/posts" ><a className="butao">Posts</a></Link>
                    <a href="posts" className="butao">Butao 2</a>
                </div>


            </div>

        </div>
    )
}

export default Navbar
