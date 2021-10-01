import React from "react";
import Layout from "../Components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Dynamic({ pageContext }) {
    console.log(pageContext)
    const {itemDetails} = pageContext
    return (
        <Layout>
            <div>Title :  {itemDetails.title} </div>
            {/* <div>{documentToReactComponents(itemDetails.desc.raw)}</div> */}
        </Layout>
    )
}

export default Dynamic