import * as React from "react"
// make navigation without lay out mean heder and footer nhai hai use link like ancer tag
// Lekin is ek masla hai if we search localhots8000/navigate tu ye page aaje ga so use layout 
import {Link} from 'gatsby' 

const Navigate = () => {
  return (
    <>
    <Link to="/">
        Home   
    </Link>
        <br />
    <Link to='/about'>About</Link>
    </>
  )
}

export default Navigate
