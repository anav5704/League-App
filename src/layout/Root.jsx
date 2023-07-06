
import { NavLink, Outlet } from "react-router-dom"

function Root() {
    return(
      <>
        <nav className="p-3 flex justify-around">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/api" >API</NavLink>
        </nav>
        <main className="p-5">
            <Outlet />
        </main>
      </>
    )
}

export default Root