import { Box, Flex } from "@chakra-ui/react"
import { UserContext } from "../UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { db } from "../Firebase.js";
import { getDocs, collection, getFirestore,addDoc } from "firebase/firestore";
import axios from "axios";
import { useHMSStore, selectPeers } from "@100mslive/react-sdk";

export default function Component() {
  const [summary, setSummary] = useState("");

  const peers = useHMSStore(selectPeers);
  const peerslen = peers.length;
  const[trans,setTrans]=useState("")
    const { userState, setUserState } = useContext(UserContext);
    const { transdata,setState} = useState("")
    useEffect(() => {
      const fetchTranscripts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "transcript"));
          const transcriptsData = querySnapshot.docs.map((doc) => doc.data());
          console.log(transcriptsData);
          setState(transcriptsData.join(","))
        } catch (error) {
          console.error("Error fetching transcripts:", error);
        }
      };
  
      fetchTranscripts();
    }, []);
    const [randomValue, setRandomValue] = useState(0);
    const [evaluation, setEvaluation] = useState('');

    useEffect(() => {
        const random = Math.random(); // Generate a random number between 0 and 1
        setRandomValue(random);
        
        // Check if the random number is less than 0.5 (50%)
        const evaluationResult = random < 0.5 ? ' is less than 50%' : ' is greater than or equal to 50%';
        setEvaluation(evaluationResult);
    }, []);
    async function generateMinutes() {
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/generation",
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY",
        },
        data: {
          providers: "openai",
          text: `${transdata} generate after meet the minutes for the transcript         
          `,
          temperature: 0.2,
          max_tokens: 1024,
          fallback_providers: "",
        },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data.openai.generated_text);
        
                
        setSummary(response.data.openai.generated_text)
      } catch (error) {
        console.error(error);
      }
    }
    async function generateText() {
      await generateMinutes();
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/generation",
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY",
        },
        data: {
          providers: "openai",
          text: `${transdata} generate after meet summary for this in 30 words         
          `,
          temperature: 0.2,
          max_tokens: 1024,
          fallback_providers: "",
        },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data.openai.generated_text);
        
                
        setTrans(response.data.openai.generated_text)
      } catch (error) {
        console.error(error);
      }
    }
    return (

        <Flex
        className="bg-gray-800 py-8 ml-16 pt-32"
        maxW={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
          <div className="container grid gap-6 px-4 md:gap-10 md:px-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 onClick={generateText} className="text-3xl md:text-5xl font-bold tracking-tighter">After Meeting Summary</h1>
            <p className="max-w-prose text-gray-400 md:text-lg">
              {trans}
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Minutes </h2>
            {summary}
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm font-medium text-gray-400">Total Attendees</div>
              <div className="text-sm text-right">{peerslen}</div>
              <div className="text-sm font-medium text-gray-400">Active Participants</div>
              <div className="text-sm text-right">{peerslen}</div>
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
                Evaluation Activity Rito : {evaluation}
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
  