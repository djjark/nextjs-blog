import React from 'react'
import Image from 'next/image'
import ricardo from '../images/ricardo.jpg';
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
const Navbar = () => {
    const { user, isLoading } = useUser()
    return (
        <div>
            <div className="navbar">
                <Link href="/" passHref><div className="ricardo"><Image src={ricardo} alt="ricardo" /></div></Link>
                <div className="div1">
                    <Link href="/posts" ><a className="butao">Posts</a></Link>
                    {/* <Link href="/Testebd" ><a className="butao">TesteBD</a></Link> */}
                    {user ? (<>
                        <Link href="/Profile" className="butao" passHref><a className="butao">{user ? (user.name) : (null)}</a></Link>

                        <Link href="/api/auth/logout" className="butao" passHref><a className="butao">Logout</a></Link>
                    </>
                    ) : (
                        <>
                            <Link href="/api/auth/login" className="butao" passHref><a className="butao">Login</a></Link>
                            <Link href="/api/auth/login" className="butao" passHref><a className="butao">Sign up</a></Link>
                        </>

                    )}
                </div>


            </div>

        </div>
    )
}

export default Navbar
