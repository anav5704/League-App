import { createBrowserRouter, createRoutesFromElements, Route, Router, NavLink, Link, Routes, RouterProvider, Outlet } from 'react-router-dom'
import { apiLoader } from './pages/API'
import { detailsLoader } from './pages/Details'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import API from "./pages/API"
import Details from "./pages/Details"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import Root from "./layout/Root"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={ <Root/>}>
                <Route index element={ <Home/> } />
                <Route path="about" element={ <About/> } />
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
