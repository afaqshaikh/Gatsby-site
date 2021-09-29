import React from "react";
import Layout from "../Components/layout";

function Dynamic({ pageContext }) {

    return (
        <Layout>
            <div>Hello Dynamic Page from {pageContext.name}</div>
            <div>This page is create dynamically at Build Time</div>
        </Layout>
    )
}

export default Dynamic