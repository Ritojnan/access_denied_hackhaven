import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "../pages/Navbar.jsx"
import Footer from "../pages/Footer.jsx"

export default function RootLayout() {
  
  return (
    
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}