import { Route,Routes } from "react-router-dom"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Contact from "../Screens/Contact"
import About from "../Screens/About"


const RoutesAll = ()=>{

    return(
       
        <Routes>
            <Route  exact path = "/" element={<Home/>}/>
            <Route  exact path = "/contact" element={<Contact/>}/>
            <Route  exact path = "/about" element={<About/>}/>
            <Route  exact path = "/profile" element={<Profile/>}/>
            <Route  exact path = "/*" element={<h2>Page Not found</h2>}/>
        </Routes>

    )
}
export default RoutesAll