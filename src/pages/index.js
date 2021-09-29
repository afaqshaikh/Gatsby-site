import React from "react";
import Layout from "../Components/layout";
import { Link } from 'gatsby'

function Home() {
    return (
        <Layout>
            <h1>This is Hello Home Page</h1>
            <Link to="/my-dynamic-page/">Dynamically Created Page At Build Time</Link><br/><br/>

            <Link to="/app">Go to Client Page 1</Link>
        </Layout>
    )
}

export default Home