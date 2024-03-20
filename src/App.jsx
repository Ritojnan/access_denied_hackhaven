import "./App.css";
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
// import Dashboard from "./components/Dashboard";
// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Signup from "./components/Signup";
import Disclaimer from "./pages/Disclaimer.jsx";
import Meet from "./pages/Meet.jsx";
import Meetframe from "./pages/Meetframe.jsx";
import MeetingDetails from "./pages/Agenda.jsx";
import Tasks from "./pages/Tasks.jsx";
import Report from "./pages/Report.jsx";
import { UserContext } from "./UserContext.jsx";
import { useContext, useEffect } from "react";
import { db } from "./Firebase.js";
import { getDocs, collection, getFirestore,addDoc } from "firebase/firestore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="authenticate" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="faq" element={<Faq />} />
        <Route path="Agenda" element={<MeetingDetails />} />
        <Route path="Frame" element={<Meetframe />} />
        <Route path="meet" element={<Meet />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Task" element={<Tasks />} />
        <Route path="report" element={<Report />}></Route>

        {/* <Route path="contact" element={<Contact />} action={contactAction} /> */}
      </Route>
      {/* <Route path="dashboard" element={<Dashboard />}>
      
      </Route> */}
    </Route>
  )
);

export default function App() {
  // console.log(userState.mod);
  return <RouterProvider router={router} />;
}
