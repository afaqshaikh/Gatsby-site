import React from "react";
import Footer from "./footer";
import Nav from "./nav";
function Layout({ children }) {
    return (
        <>
            <Nav />
            <br/>
            {children}
            <br/>
            <Footer/>
        </>
    )
}

export default Layout