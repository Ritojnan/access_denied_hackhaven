import { Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Dictaphone from "./Dictaphone";


export default function Preview() {
  const isWideScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <>
    <Dictaphone/>
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[#1F1F1F] p-6 rounded-lg w-full lg:w-[500px] lg:flex lg:flex-row lg:justify-between lg:items-start">
        <div className={`mb-6 ${isWideScreen ? 'mr-6' : 'lg:mb-0 lg:mr-0'}`}>
          <div className="bg-[#333333] p-4 rounded-lg flex flex-col items-center">
            {/* <Avatar size="2xl">
              <AvatarBadge boxSize="1.0em" bg="purple.500" />
            </Avatar> */}
            <VideoStreamDisplay/>
            <div className="my-4">
              <SettingsIcon className="text-white h-6 w-6" />
            </div>
          </div>
        </div>
        <div className={`${isWideScreen ? 'w-full' : 'lg:w-auto'}`}>
          <div>
            <h2 className="text-xl font-semibold">Welcome kirigaya</h2>
            <p className="text-sm text-gray-400 my-2">Preview your video and audio before joining the stage</p>
            <div className="bg-[#333333] px-4 py-2 rounded-lg flex items-center justify-between my-4">
              <span className="text-white font-medium">kirigaya</span>
              <InfoIcon className="text-blue-500 h-4 w-4 mr-2" />
            </div>
            <p className="text-xs text-gray-400 flex items-center">
              Note: Your mic is on and video is off
            </p>
            <div className="flex justify-between items-center mt-4">
              <Button variant="ghost">Go back</Button>
              <Button className="bg-purple-600 text-white">Join Stage →</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



const VideoStreamDisplay = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getLocalVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing local video stream:", error);
      }
    };

    getLocalVideoStream();

    return () => {
      // Clean up by stopping the video stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div className=" rounded-lg overflow-hidden shadow-lg">
      <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted />
    </div>
  );
};

