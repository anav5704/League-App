import Sidebar from "../components/Sidebar"
import {   Outlet } from "react-router-dom"

function Root() {
    return (
    <main className="flex flex-col-reverse lg:flex-row items-start h-screen">
        <Sidebar />
        <article className="w-full h-full">
            <Outlet />
        </article>
      </main>
    )
}

export default Root