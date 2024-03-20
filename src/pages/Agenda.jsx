import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const MeetingDetails = () => {
  const [title, setTitle] = useState("");
  const [agenda, setAgenda] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  async function generateAutoAgenda() {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/generation",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY",
      },
      data: {
        providers: "openai",
        text: `generate agenda with as the last meet was on genai`,
        temperature: 0.2,
        max_tokens: 1024,
        fallback_providers: "",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.openai.generated_text);
      setAgenda(response.data.openai.generated_text);
    } catch (error) {
      console.error(error);
    }
  }

  async function generateAgenda() {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/generation",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY",
      },
      data: {
        providers: "openai",
        text: `generate agenda with title ${title} and description ${description} and notes ${notes}`,
        temperature: 0.2,
        max_tokens: 1024,
        fallback_providers: "",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.openai.generated_text);
      setAgenda(response.data.openai.generated_text);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-32">
      <main className="flex-1 p-4 lg:p-6">
        <div className="mx-auto max-w-6xl grid gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-5xl text-purple-400">
                Agenda Creation
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
                Discuss upcoming campaigns and review social media strategy
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-[500px_1fr] bg-purple-400 border-2 rounded-lg mt-6 w-auto pl-6 py-6">
              <div className="flex items-center justify-around gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-3xl text-[#1a202c] dark:text-[#1a202c]"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <span className="font-bold text-5xl text-[#1a202c] mr-6">
                  Today
                </span>
                <span className="text-xl font-bold ml-auto w-full text-right text-[#1a202c]">
                  12:00pm - 1:00pm
                </span>
              </div>
              <div className="grid gap-7">
                <div className="grid gap-1">
                  <h2 className="font-semibold text-xl text-[#1a202c]">
                    Last Meet
                  </h2>
                  <p className="text-lg text-semibold">Gen AI</p>
                </div>
                <div className="grid gap-1">
                  <h2 className="font-semibold text-xl  text-[#1a202c]">
                    New Features
                  </h2>
                  <p className="text-lg text-semibold">Optimized Search</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h2 className="font-bold text-3xl mt-6 text-purple-400">
                Suggested Agenda Items
              </h2>
              <p className="text-lg mt-2">
                Enter the details of your meeting and we'll suggest agenda items
                based on your input.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg mt-8"
                  htmlFor="meeting-title"
                >
                  Meeting Title
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="meeting-title"
                  placeholder="Enter the meeting title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg mt-6"
                  htmlFor="meeting-description"
                >
                  Meeting Description
                </label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  id="meeting-description"
                  placeholder="Enter the meeting description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg mt-6"
                  htmlFor="meeting-notes"
                >
                  Additional Notes
                </label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  id="meeting-notes"
                  placeholder="Enter any additional notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-around items-center mt-9">
              <button
                className="bg-purple-400 hover:bg-purple-400 py-4 text-white px-4 rounded-md text-xl"
                onClick={generateAgenda}
              >
                Generate Agenda
              </button>
              <button
                className="bg-purple-400 hover:bg-purple-400 py-4 text-white px-4 rounded-md text-xl"
                onClick={generateAutoAgenda}
              >
                Auto Agenda
              </button>
              <ChangeRole agenda={agenda} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MeetingDetails;

function ChangeRole(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Change Role</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-[#1a1a1a] rounded-lg p-8 w-[800px]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white text-4xl font-semibold">Agenda</h2>
                  <Button colorScheme="whiteAlpha" variant="ghost">
                    <CloseIcon w={6} h={6} onClick={onClose} />
                  </Button>
                </div>
                <p className="text-gray-400 mb-4">{props.agenda}</p>
              </div>
            </div>{" "}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
