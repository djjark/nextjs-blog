import React from 'react'
import Image from 'next/image'
import ricardo from '../../images/ricardo.jpg';
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import classes from './Navbar.module.scss';

const Navbar = () => {
    const { user, isLoading } = useUser()
    return (
        <div className={classes.navbar + " "} >
            <Link href="/" className={classes.ricardo} passHref><span >EXAMPLE TEST</span></Link>
            <div className={classes.div1}>
                {/* <Link href="/Testebd" ><a className={classes.butao}>TesteBD</a></Link> */}
                {user ? (<>
                    <Link href="/posts" className={classes.butao}><span className={classes.butao}>Posts</span></Link>
                    <Link href="/shopping_list" className={classes.butao}><span className={classes.butao}>Shopping List</span></Link>

                    <Link href="/profile" className={classes.butao} passHref><span className={classes.butao}>{user ? (user.name) : (null)}</span></Link>

                    <Link href="/api/auth/logout" className={classes.butao} passHref><span className={classes.butao}>Logout</span></Link>
                </>
                ) : (
                    <>
                        <Link href="/api/auth/login" className={classes.butao} passHref><span className={classes.butao}>Login</span></Link>
                        <Link href="/api/auth/login" className={classes.butao} passHref><span className={classes.butao}>Sign up</span></Link>
                    </>

                )}
            </div>
        </div>
    )
}

export default Navbar
