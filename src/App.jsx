import { createBrowserRouter, createRoutesFromElements, Route, Router, NavLink, Link, Routes, RouterProvider, Outlet } from 'react-router-dom'
import { apiLoader } from './pages/API'
import { detailsLoader } from './pages/Details'
import Home from "./pages/Home"
import About from "./pages/About"
import Account from './pages/Account'
import API from "./pages/API"
import Details from "./pages/Details"
import Events from "./pages/Events"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import Root from "./layout/Root"

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'  element={ <Root/>}>
                <Route index element={ <Home/> } />
                <Route path="about" element={ <About/> } />
                <Route path="account" element={ <Account/>} />
                <Route path="events" >
                    <Route path="all" element={ <Events/>}  />
                    <Route path="add" element={ <Account/>} />
                </Route>
                <Route path="api" element={ <API/> } loader={apiLoader}/>
                <Route path="api/:id" element={ <Details/> } loader={ detailsLoader } errorElement={<Error />}/>
                <Route path="*" element={ <NotFound/>}/>
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
