var path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`{
    allContentfulProduct {
      nodes {
        slug
        title
        desc {
          raw
        }
      }
    }
  }`)

  console.log(JSON.stringify(results))

  results.data.allContentfulProduct.nodes.forEach((obj)=>{
    createPage({
      path: `/products/${obj.slug}`,
      component: path.resolve("./src/templates/dynamic-page.tsx"),
      context: {
        itemDetails : obj
      }
    })
  })
}
/*
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
  }
*/
/*
exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Afaque Shaikh",
         },
    });
    console.log("End of Gatsby Node File");
}
*/