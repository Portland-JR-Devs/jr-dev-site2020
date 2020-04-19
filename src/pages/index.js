import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import About from "../components/about/About"
import CodeOfConduct from "../components/codeOfConduct/CodeOfConduct"

const IndexPage = () => (
  <Layout>
    <About title = "ABOUT US"/>
    <CodeOfConduct />
  </Layout>
)

export default IndexPage
