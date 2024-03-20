import { Button } from "@chakra-ui/button";
import { Link, VStack, IconButton } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/avatar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { Input } from "@chakra-ui/input";
import { Icon } from "@chakra-ui/icon";
import {
  FaEye,
  FaMicrophone,
  FaVideo,
  FaShareSquare,
  FaCog,
} from "react-icons/fa";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import Conference from "./Conference";
import { useHMSStore,selectPeers } from "@100mslive/react-sdk";
import Response from "../pages/HtmlResponse";
import ChangeRole from "./ChangeRole";
export default function Component() {
  const [inputValue, setInputValue] = useState("");
  const [arrayItems, setArrayItems] = useState([]);
  const [isMicOn, setIsMicOn] = useState(true);
  const peers = useHMSStore(selectPeers);
  const peerslen = peers.length;
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const toggleMic = () => {
    setIsMicOn(prevState => !prevState);
    // Simulate turning the microphone on/off
    if (isMicOn) {
        console.log("Microphone is now off");
    } else {
        console.log("Microphone is now on");
    }
};
const [brb,setbrb] = useState(false)
const [stream, setStream] = useState(null);
const [error, setError] = useState(null)
const handleShareScreen = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    setStream(mediaStream);
  } catch (err) {
    setError(err);
  }
};

const brbHandler = ()=>{
  setbrb(!brb)
}
const stopSharing = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    setStream(null);
  }
};

  const handleSubmit = () => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setArrayItems((prevItems) => [...prevItems, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <Flex direction="column" bg="#121212" minH="100vh" >
      <Flex p="4" borderBottom="1px" borderColor="gray.800">
        <Flex alignItems="center" mx="4">
          <Flex alignItems="center" mx="2">
            <Button bg="red.600" color="white" px="2" py="1" size="sm">
              LIVE
            </Button>
            
            {/* <span className="text-white text-sm">9:30 pm - 10:30 pm</span> */}
          </Flex>
          <Flex alignItems="center" mx="5" >
            <Icon as={FaEye} color="white" boxSize="5"className="ml-5" />
            <span className="text-white text-md ml-2">{peerslen} watching</span>
          </Flex>
        </Flex>
        <Spacer />

        <Flex alignItems="center" mx="4">
        <Response/>
        <ChangeRole/>
        </Flex>
      </Flex>
      <Flex>
        <Flex flexGrow="1" p="8" direction="column" align="center">
          <Flex
            rounded="lg"
            justify="center"
            align="center"
            mb="4"
            w="100%"
            h="80vh"
            
          >
            <Conference brb={brb} />
          </Flex>
          <Flex justify="center" mx="4">
            <Icon as={FaMicrophone} onClick={toggleMic} color={`${isMicOn ? 'white' : 'red'}`} boxSize="6" marginRight={4} />
            <Icon as={FaVideo} color="white" boxSize="6" marginRight={4} />
  <div onClick={brbHandler} className=" text-sm text-white p-2 border-white border-2 rounded-lg mx-3 mt-[-1vh]">BRB</div>
         
            {stream ? (
  <div style={{ position: 'relative' }}>
    <p>Screen is being shared:</p>
    <video
      src={stream}
      autoPlay
      style={{ width: '100%', height: 'auto', maxHeight: '100%',zIndex: "10" }}
    />
    <button onClick={stopSharing}>Stop Sharing</button>
  </div>
) : (
  <Icon onClick={handleShareScreen} as={FaShareSquare} color="white" boxSize="6" marginRight={4} />
)}

            <Icon as={FaCog} color="white" boxSize="6" marginRight={4} />
            <Button bg="red.600" color="white" px="3" py="1.5" size="sm">
              Leave
            </Button>
          </Flex>
        </Flex>

        <Flex w="350px" bg="#1F1F1F" p="4" direction="column">
          <Flex justify="space-between" mb="4">
            <Tabs>
              <TabList>
                <Tab>Chat</Tab>
                <Tab>Participants</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ul>
                    {arrayItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TabPanel>
                <TabPanel>{/* Participants content here */}</TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Flex direction="column" h="calc(100vh - 200px)">
            <Flex flexGrow="1" overflowY="auto">
              {/* Chat messages */}
            </Flex>
            <Flex mt="4">
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Input
                  variant="filled"
                  bg="#121212"
                  color="white"
                  placeholder="Send a message..."
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />
                <IconButton
                  icon={<IoSend />}
                  colorScheme="purple"
                  bgColor={"purple.400"}
                  p={2}
                  type="submit"
                  ml={2}
                />
              </form>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
