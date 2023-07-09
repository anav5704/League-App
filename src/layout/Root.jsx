import Sidebar from "../components/Sidebar"
import {   Outlet } from "react-router-dom"

function Root() {
    return (
    <main className="flex items-start h-screen">
        <Sidebar />
        <article className="p-2 ">
            <Outlet />
        </article>
      </main>
    )
}

export default Root