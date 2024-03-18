import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@chakra-ui/react'
import ChangeRole from './components/ChangeRole'
import LandingPage from './pages/LandingPage'
import Meet from './pages/LandingPage'



import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";


// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Faq from "./pages/help/Faq.jsx";
import NotFound from "./pages/NotFound.jsx";
// import Contact, { contactAction } from "./pages/help/Contact.jsx";
import Dashboard from "./pages/Dashboard";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Signup from "./components/Signup";
import Disclaimer from "./pages/Disclaimer.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="authenticate" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}/>
        <Route path="disclaimer" element={<Disclaimer />}/>
        <Route path="faq" element={<Faq />} />
        {/* <Route path="contact" element={<Contact />} action={contactAction} /> */}
      </Route>
      <Route path="dashboard" element={<Dashboard />}>

      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
