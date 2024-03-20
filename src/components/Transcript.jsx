import React, { useState, useEffect } from "react";
import { UserContext } from "../UserContext.jsx";
import { useContext } from "react";
import { db } from "../Firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";

const SpeechRecognitionComponent = () => {
  const [output, setOutput] = useState("");
  const [fulltext, setFullText] = useState("");
  let recognition = null;
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

  const addTranscript = async (transcript) => {
    try {
      const querySnapshot = await getDocs(collection(db, "transcript"));

      const transcriptData = {
        meetData: transcript,
        user: "Rito",
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
    <div className="p-10">
      <button id="startBtn" onClick={handleStart}>
        Start Listening (English)
      </button>
      <button
        id="startBtnHindi"
        onClick={() => {
          recognition.lang = "hi-IN";
          handleStart();
        }}
      >
        Start Listening (Hindi)
      </button>
      <button id="stopBtn" onClick={handleStop}>
        Stop Listening
      </button>
      <div id="output">{output}</div>
    </div>
  );
};

export default SpeechRecognitionComponent;
