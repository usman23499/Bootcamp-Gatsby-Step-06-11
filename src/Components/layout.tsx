import * as React from "react"
import Nav from './navigation'
import Footer from "./footer";
const Layout = ({children}) => {
  return (
    <>
    <Nav />
    {children} 
    {/* malt lab ye as a component use ho baq kab is ke neche aae and you can aslo add footer here */}

    <Footer />
    </>
  )
}

export default Layout
