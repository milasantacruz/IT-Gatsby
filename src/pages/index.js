import React from "react"
//import ReactPageScroller from 'react-page-scroller';
import Layout from "../components/layout"
import Seo from "../components/seo"
import About1 from "../components/about1"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
      <About1/>
  </Layout>
)

export default IndexPage
