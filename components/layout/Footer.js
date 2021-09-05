import React from 'react'
import classes from './Footer.module.scss'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="">
                    <div className={classes.footer + " row"}>
                        <div className="col-4">a</div>
                        <div className="col-4">b</div>
                        <div className="col-4">c</div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
