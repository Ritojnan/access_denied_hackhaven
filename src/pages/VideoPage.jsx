import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import { Tabs, TabList, TabsTrigger } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { MdMic, MdVideocam, MdScreenShare, MdSettings } from "react-icons/md";
import { useBreakpointValue } from "@chakra-ui/react";
import CallLayout from "./CallLayout";
import Call from "../components/Call";


export default function Component() {
  const isWideScreen = useBreakpointValue({ base: false, lg: true });
const randomNum=6;
  return (
    <div className="bg-black min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <header className="bg-[#1c1c1e] p-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Demo Event <span className="bg-red-600 text-sm px-2 py-1 rounded-full ml-2">LIVE</span>
          </h1>
          <div className="text-white">
            <span>9:30 pm - 10:30 pm</span>
          </div>
        </header>
        <main className="flex-1 flex justify-center items-center">
          <Avatar className="w-24 h-24 bg-purple-600 rounded-full flex justify-center items-center">
            <AvatarBadge boxSize="1.0em" bg="purple.500" />
          </Avatar>
        </main>
        <footer className="bg-[#1c1c1e] p-4 flex justify-between items-center">
          <div className="flex space-x-4 text-white">
            <MdMic className="w-6 h-6" />
            <MdVideocam className="w-6 h-6" />
            <MdScreenShare className="w-6 h-6" />
            <MdSettings className="w-6 h-6" />
          </div>
          <Button className="bg-red-600 text-white py-2 px-4 rounded-full">Leave</Button>
        </footer>
      </div>
      <aside className="w-full max-w-xs bg-[#1c1c1e] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="text-white">
            <span>0 watching</span>
          </div>
          <div className="space-x-2">
            <Button className="bg-gray-700 text-white py-1 px-3 rounded-md">Invite</Button>
            <Button className="bg-gray-700 text-white py-1 px-3 rounded-md">Change Role</Button>
          </div>
        </div>
        <div className="flex-1">
          {/* <Tabs className="border-b border-gray-700">
            <div className="flex justify-between">
              <TabList>
                <TabsTrigger className="text-white py-2 px-4">Chat</TabsTrigger>
                <TabsTrigger className="text-white py-2 px-4">Participants</TabsTrigger>
              </TabList>
--------------------------------------------------
              <Tabs variant='enclosed' >
           <TabList paddingTop={10}>
          <Tab>Chat</Tab>
          <Tab>Participants</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Call numDivs={randomNum} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
            </div>
          </Tabs> */}
          
          <div className="p-4 text-white">
            <p>
              Welcome to the Webinar. You can engage with the speaker and other participants through the chat below.
            </p>
          </div>
          <div className="p-4">
            <Input className="w-full bg-gray-800 text-white rounded-md py-2 px-4" placeholder="Send a message..." />
          </div>
        </div>
      </aside>
    </div>
  );
}
