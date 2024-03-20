// import "./styles.css";
import JoinForm from "../components/JoinForm";
// import Header from "./Header";
import Conference from "../components/Conference";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import axios from"axios"
import { v4 as uuidv4 } from 'uuid';
import ObjectDetection from "./Coco";
import FinalMeet from "../components/FinalMeet";
import Response from "./HtmlResponse";
import { div } from "@tensorflow/tfjs-core";

export default function Meetframe() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  const data = {
    "name": uuidv4(),
    "description": "This is a sample description for the room",
    "template_id": "65f6cdde48b3dd31b94ff15c"
};
  
  const config = {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTA2OTA2MDMsImV4cCI6MTcxMTI5NTQwMywianRpIjoiMGU3NzhmYmUtNzY5Mi00YjVmLTk4ZjctMTg2N2RiNjg3MjVmIiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJuYmYiOjE3MTA2OTA2MDMsImFjY2Vzc19rZXkiOiI2NWY2Y2MzYzFjNTBhMWQ2MjIzYWVmNzIifQ.3wdr-hzrlwfhIsVNP0q2LsVWKph39bJ4fVwRdHSlN10',
      'Content-Type': 'application/json'
    }
  };
  
  const generateRoom = async() =>{
    try {
      const response = await axios.post('https://api.100ms.live/v2/rooms', data, config);
      console.log(response.data.id);
    } catch (error) {
      console.error(error);
    }
  }

  const generateMeet = async () => {
    try {
      const response = await axios.post('https://api.100ms.live/v2/room-codes/room/65f7124d8dcaff587f11a474', data, config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="pt-32" >
      {/* <Header /> */}
      {isConnected ? (
        <div>
        <FinalMeet/>        
      </div>
      ) : (
        <div 
        style={{ 
            backgroundImage: `url(./bgimg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
          }}>
        <div className="pt-[28vh]">
        <JoinForm />
        </div>
        </div>
      )}
      {/* <div onClick={()=> generateRoom()}>
        Click me to generate code
      </div>
      <div>
      <Response/>
      </div> */}

    </div>
  );
}

