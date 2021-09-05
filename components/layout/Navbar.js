import React from 'react'
import Image from 'next/image'
import ricardo from '../../images/ricardo.jpg';
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import classes from './Navbar.module.scss';

const Navbar = () => {
    const { user, isLoading } = useUser()
    console.log(classes)
    return (
        <div className={classes.navbar + " "} >
            <Link href="/" passHref><div className={classes.ricardo}><Image src={ricardo} alt="ricardo" /></div></Link>
            <div className={classes.div1}>
                {/* <Link href="/Testebd" ><a className={classes.butao}>TesteBD</a></Link> */}
                {user ? (<>
                    <Link href="/posts" ><a className={classes.butao}>Posts</a></Link>

                    <Link href="/Profile" className={classes.butao} passHref><a className={classes.butao}>{user ? (user.name) : (null)}</a></Link>

                    <Link href="/api/auth/logout" className={classes.butao} passHref><a className={classes.butao}>Logout</a></Link>
                </>
                ) : (
                    <>
                        <Link href="/api/auth/login" className={classes.butao} passHref><a className={classes.butao}>Login</a></Link>
                        <Link href="/api/auth/login" className={classes.butao} passHref><a className={classes.butao}>Sign up</a></Link>
                    </>

                )}
            </div>
        </div>
    )
}

export default Navbar
