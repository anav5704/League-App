import Sidebar from "../components/Sidebar"
import {   Outlet } from "react-router-dom"

function Root() {
    return (
    <main className="flex items-start h-screen">
        <Sidebar />
        <article className="w-full">
            <Outlet />
        </article>
      </main>
    )
}

export default Root