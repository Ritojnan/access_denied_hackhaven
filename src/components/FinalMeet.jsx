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
export default function Component() {
  const [inputValue, setInputValue] = useState("");
  const [arrayItems, setArrayItems] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setArrayItems((prevItems) => [...prevItems, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <Flex direction="column" bg="#121212" minH="100vh">
      <Flex p="4" borderBottom="1px" borderColor="gray.800">
        <Flex alignItems="center" spaceX="4">
          <Flex alignItems="center" spaceX="2">
            <Button bg="red.600" color="white" px="2" py="1" size="xs">
              LIVE
            </Button>
            <span className="text-white text-sm">9:30 pm - 10:30 pm</span>
          </Flex>
          <Flex alignItems="center" spaceX="2">
            <Icon as={FaEye} color="white" boxSize="5" />
            <span className="text-white text-sm">0 watching</span>
          </Flex>
        </Flex>
        <Spacer />

        <Flex alignItems="center" spaceX="4">
          <Button bg="gray.800" color="white" px="3" py="1.5" size="sm">
            Invite
          </Button>
          <Button bg="gray.800" color="white" px="3" py="1.5" size="sm">
            Change Role
          </Button>
        </Flex>
      </Flex>
      <Flex>
        <Flex flexGrow="1" p="8" direction="column" align="center">
          <Flex
            rounded="lg"
            justify="center"
            align="center"
            mb="4"
            w="60%"
            // h="60%"
            p={4}
          >
            <Conference />
          </Flex>
          <Flex justify="center" spaceX="4">
            <Icon as={FaMicrophone} color="white" boxSize="6" marginRight={4} />
            <Icon as={FaVideo} color="white" boxSize="6" marginRight={4} />
            <Icon
              as={FaShareSquare}
              color="white"
              marginRight={4}
              marginTop={1}
            />
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
