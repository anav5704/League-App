import { useEffect } from "react";
import Sidebar from "../components/Sidebar"
import {   Outlet, useLocation } from "react-router-dom"

function Root() {

    const location = useLocation();
    const lastPage = location.pathname

    useEffect(() => {
        localStorage.setItem('lastPage', lastPage);
    }, [location])

    return (
    <main className="flex flex-col-reverse lg:flex-row items-start h-screen">
        <Sidebar />
        <article className="w-full overflow-y-scroll h-fit lg:h-full">
            <Outlet />
        </article>
      </main>
    )
}

export default Root