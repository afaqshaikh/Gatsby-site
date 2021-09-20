import React from "react";
import {Link} from "gatsby"
import {nav , navlinks } from './nav.module.css'

function Nav(){
    return(
        <div className={nav}>
            <Link className={navlinks} to="/">Home</Link>
            <Link className={navlinks} to="/about">About</Link>
            <Link className={navlinks} to="/contact">Contact</Link>

        </div>
    )
}

export default Nav