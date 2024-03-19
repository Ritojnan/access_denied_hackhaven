import './App.css'
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
import Dashboard from "./components/Dashboard";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Signup from "./components/Signup";
import Disclaimer from "./pages/Disclaimer.jsx";
import Meet from "./pages/Meet.jsx";
import Preview from './components/Preview.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
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
