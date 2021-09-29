import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ClientPage from "../components/Client1"
import Default from "../Components/DefaultClient"

const App = () => {
  return (
    <Layout>
        <div>
        <Link to="/app/page1">Go to Client Page 1</Link>

        </div>
      <Router basepath="/app">
        <ClientPage path="/page1" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App