import { Box, Flex } from "@chakra-ui/react"
import { UserContext } from "../UserContext.jsx";
import { useContext, useEffect } from "react";
import { db } from "../Firebase.js";
import { getDocs, collection, getFirestore,addDoc } from "firebase/firestore";


export default function Component() {
    const { userState, setUserState } = useContext(UserContext);
    useEffect(() => {
      const fetchTranscripts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "transcript"));
          const transcriptsData = querySnapshot.docs.map((doc) => doc.data());
          console.log(transcriptsData);
        } catch (error) {
          console.error("Error fetching transcripts:", error);
        }
      };
  
      fetchTranscripts();
    }, []);

    return (

        <Flex
        className="bg-gray-800 py-8 ml-16 pt-32"
        maxW={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
          <div className="container grid gap-6 px-4 md:gap-10 md:px-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">After Meeting Summary</h1>
            <p className="max-w-prose text-gray-400 md:text-lg">
              This meeting was held to discuss the progress of ongoing projects and to plan for future initiatives.
              Attendees included team members from various departments, including Marketing, Sales, and Product
              Development.
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key Points</h2>
            <ul className="grid gap-4">
              <li className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                <span>Discuss the new marketing strategy to increase customer engagement.</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                <span>Review the progress of the upcoming product launch.</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                <span>Plan the sales targets for the next quarter.</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                <span>Introduce the new customer support system.</span>
              </li>
            </ul>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm font-medium text-gray-400">Total Attendees</div>
              <div className="text-sm text-right">25</div>
              <div className="text-sm font-medium text-gray-400">Active Participants</div>
              <div className="text-sm text-right">20</div>
            </div>
          </div>
          <section className="grid gap-6 mt-8">
            <div className="grid gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Meeting Details</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium text-gray-400">Date</div>
                <div className="text-sm text-right">March 20, 2024</div>
                <div className="text-sm font-medium text-gray-400">Time</div>
                <div className="text-sm text-right">10:00 AM - 12:00 PM</div>
              </div>
            </div>
            <div className="grid gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Attendance</h2>
              <ul className="grid gap-4">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                  <span>Marketing Department</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                  <span>Sales Department</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2.5 text-green-500" />
                  <span>Product Development</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Statistics</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium text-gray-400">Total Projects Discussed</div>
                <div className="text-sm text-right">8</div>
                <div className="text-sm font-medium text-gray-400">Action Items Assigned</div>
                <div className="text-sm text-right">12</div>
              </div>
            </div>
          </section>
        </div>
      </Flex>
    )
  }
  
  function CheckCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )}
  