import { useState, useEffect, useRef } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import { Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";

function JoinForm() {
  const isWideScreen = useBreakpointValue({ base: false, lg: true });
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    roomCode: ""
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, roomCode } = inputValues;

    try {
      const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });
      await hmsActions.join({ userName: name, authToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-white min-h-screen flex flex-col items-center justify-center">
        <div className="p-6 rounded-lg w-full lg:w-[500px] lg:flex lg:flex-row lg:justify-between lg:items-start">
          <div className={`mb-6 ${isWideScreen ? 'mr-6' : 'lg:mb-0 lg:mr-0'}`}>
            <div className="bg-[#333333] p-4 rounded-lg flex flex-col items-center">
              <VideoStreamDisplay />
            </div>
          </div>
          <div className={`${isWideScreen ? 'w-full' : 'lg:w-auto'}`}>
            <div>
              <h2 className="text-xl font-semibold">Welcome kirigaya</h2>
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Join Room</h2>
              <div className="mb-4">
                <input
                  required
                  value={inputValues.name}
                  onChange={handleInputChange}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <input
                  id="room-code"
                  type="text"
                  name="roomCode"
                  placeholder="Room code"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Join
              </button>
              <p className="text-sm text-gray-400 my-2">Preview your video and audio before joining the stage</p>
              <div className="bg-[#333333] px-4 py-2 rounded-lg flex items-center justify-between my-4">
                <span className="text-white font-medium">kirigaya</span>
                <InfoIcon className="text-blue-500 h-4 w-4 mr-2" />
              </div>
              <p className="text-xs text-gray-400 flex items-center">Note: Your mic is on and video is off</p>
              <div className="flex justify-between items-center mt-4">
                <Button variant="ghost">Go back</Button>
                <Button className="bg-purple-600 text-white">Join Stage →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default JoinForm;

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
    <div className="rounded-lg overflow-hidden shadow-lg">
      <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted />
    </div>
  );
};
