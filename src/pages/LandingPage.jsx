<<<<<<< HEAD

import React from "react";
import ChangeRole from "../components/ChangeRole";
import Preview from "../components/Preview";
import VideoPage from "../pages/VideoPage";
import CallLayout from "./CallLayout";
export default function LandingPage() {
  return <>
  
   <VideoPage/>
  </>;
}
{/*<<<<<<< HEAD
=======
>>>>>>> 50d0939dc0ab2181318791948ade8f19cb246e82
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, HStack, Text, VStack, Button,Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import WithSubnavigation from "../components/WithSubnavigation";
import TiltCard from "../components/TiltCard";
const MotionBox = motion(Box);
const MotionText = motion(Text);

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const timeout2 = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const timeout3 = setTimeout(() => {
      setIsVisible(true);
    }, 3100);

    const timeout4 = setTimeout(() => {
      setIsVisible(true);
    }, 4900);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Heading>The spectacle before us was indeed sublime.</Heading>

      <TiltCard/>
      <Box
        display="flex"
        justifyContent="center"
        paddingTop={100}
        height="100vh"
        width="100vw"
        backgroundColor="rgb(0, 0, 0)"
      >
        <VStack>
          <MotionText
            color="white"
            style={{
              fontSize: "70px",
              wordWrap: "break-word",
              maxWidth: "600px",
              fontWeight:"bold",
              visibility: isVisible ? "visible" : "hidden",
            }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.45 }}
          >
            Welcome to the Video Conference
          </MotionText>

        <HStack>
          <MotionText
            color={"purple.400"}
            style={{ fontSize: "20px", visibility: isVisible ? "visible" : "hidden" }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.45 }}
          >
            17 March 2024 |
          </MotionText>

          <MotionText
            color={"purple.400"}
            style={{ fontSize: "20px", fontWeight: "bold", visibility: isVisible ? "visible" : "hidden" }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.45 }}
          >
            ONLINE
          </MotionText>
        </HStack>
          <MotionBox
            bg="gray.800"
            p={2}
            marginTop={10}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width={"70%"}
            style={{ visibility: isVisible ? "visible" : "hidden" }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.45 }}
          >
            <Text flex="1" color="lightgray" textAlign="left">
              Enter email to register free
            </Text>
            <Button colorScheme="purple" ml={4}>
              Register
            </Button>
          </MotionBox>
        </VStack>
      </Box>
    </>
  );
};

export default LandingPage;
