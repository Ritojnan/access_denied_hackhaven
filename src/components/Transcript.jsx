import React, { useState, useEffect } from "react";
import { UserContext } from "../UserContext.jsx";
import { useContext } from "react";
import { db } from "../Firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";
import {Link} from "react-router-dom";

const SpeechRecognitionComponent = () => {
  const [output, setOutput] = useState("");
  const [fulltext, setFullText] = useState("");
  let recognition = null;
  const { userState, setUserState } = useContext(UserContext);

  const addTranscript = async (transcript) => {
    try {
      const querySnapshot = await getDocs(collection(db, "transcript"));
      const name=localStorage.getItem("name")
      console.log(name)
      const transcriptData = {
        meetData: transcript,
        user: name,
        docNo: querySnapshot.docs.length + 1,
        // You can remove docNo from here, Firestore will automatically assign a unique ID
      };
      await addDoc(collection(db, "transcript"), transcriptData);
      console.log("Transcript added successfully!");
      fetchTranscripts();
    } catch (error) {
      console.error("Error adding transcript:", error);
    }
  };

  const handleStart = () => {
    recognition.start();
    setOutput("Listening...");
  };

  const handleStop = () => {
    recognition.stop();
    setOutput("Speech recognition stopped.");
  };

  // Check if SpeechRecognition is available
  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    // Create a new instance of SpeechRecognition
    recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    // Set recognition parameters
    recognition.continuous = true; // Keep listening until stopped
    recognition.lang = "en-US"; // Set default language to English

    // Event handler for when speech is recognized
    recognition.onresult = function (event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setOutput(transcript);
      addTranscript(transcript);
      setFullText((prevOutput) => prevOutput + transcript);
      console.log(fulltext);
    };

    // Event handler for errors
    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  } else {
    // SpeechRecognition not supported
    return <div>Speech recognition not supported in this browser.</div>;
  }

  return (
<<<<<<< HEAD
    <div className="p-10 ">
      <button id="startBtn" onClick={handleStart}
      style={{
         margin: "20px",
        backgroundColor: "green",
        borderRadius: "9999px", // A large value to make the button fully rounded
        padding: "0.5rem 1rem", // Adjust padding as needed
        color: "white", // Text color
        border: "none", // Remove border
        cursor: "pointer", // Show pointer cursor on hover
        marginRight: "5",
      }}
    >
      
        Start Listening 
=======
    <div className="p-10">
      <button id="startBtn" onClick={handleStart}>
        Start Listening
>>>>>>> 5af17caa4bf45e8e2e4115a73a8a0c594c8963e1
      </button>
      {/* <button
        id="startBtnHindi"
        onClick={() => {
          recognition.lang = "hi-IN";
          handleStart();
        }}
      >
        Start Listening (Hindi)
      </button> */}
      
     <button
  id="stopBtn"
  onClick={handleStop}
  style={{
    marginLeft: "5",
    marginRight: "5",
    backgroundColor: "red",
    borderRadius: "9999px", // A large value to make the button fully rounded
    padding: "0.5rem 1rem", // Adjust padding as needed
    color: "white", // Text color
    border: "none", // Remove border
    cursor: "pointer", // Show pointer cursor on hover
  }}
>
  Stop Listening
</button>
<Link to={"/report"}>
<button id="reportBtn" 
      style={{
         margin: "20px",
        backgroundColor: "blueviolet",
        borderRadius: "9999px", // A large value to make the button fully rounded
        padding: "0.5rem 1rem", // Adjust padding as needed
        color: "white", // Text color
        border: "none", // Remove border
        cursor: "pointer", // Show pointer cursor on hover
        marginRight: "5",
      }}
    >
      
        Generate Report
      </button></Link>
      <div id="output">{output}</div>
    </div>
  );
};

export default SpeechRecognitionComponent;
