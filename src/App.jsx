import { Outlet } from "react-router-dom"
import NavBar from "./component/Shared/Navbar"
import Footer from "./component/Shared/Footer"


function App() {

  return (
    <div className=" overflow-hidden">
      <NavBar></NavBar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
