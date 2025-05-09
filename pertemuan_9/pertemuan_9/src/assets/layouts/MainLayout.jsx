import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Outlet />
        </>
    )
}