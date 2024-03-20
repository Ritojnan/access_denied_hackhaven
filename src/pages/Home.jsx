import { Box, Container, Flex, Text, Link as ChakraLink, Link,useColorMode, useColorModeValue,Stack, Input, Button, Grid } from "@chakra-ui/react";
import Transcript from "../components/Transcript";
import FinalMeet from "../components/FinalMeet";
import Meet from "../pages/Meet";
import Conference from "../components/Conference";
import JoinForm from "../components/JoinForm";
import Meetframe from "./Meetframe";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab switched or window minimized
        alert('You switched tabs or minimized the window.');
      } else {
        // Tab brought into focus or window restored
        alert('You brought the tab into focus or restored the window.');
      }
    };

    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  return (
    <Box pt={10}>



      <main>
        <section className="py-6 md:py-12 lg:py-24 xl:py-32"
         style={{ 
        backgroundImage: `url(./bgimg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
          <Container  bg="rgba(0, 0, 0, 0.85)">
            <Flex direction="column" alignItems="center" textAlign="center" spaceY={4}>
              <Box>
                <Text fontSize="7xl" fontWeight="bold" letterSpacing="tighter">AI-Powered Video Conferencing</Text>
                <Text maxW="700px" mx="auto" fontSize={"xl"} color={useColorModeValue('gray.500', 'gray.400')}>The platform for seamless collaboration. Experience crystal clear video calls with intelligent features.</Text>
              </Box>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} mt={8}>
                <Button colorScheme="purple" bg={'purple.400'} _hover={{ bg: 'purple.600' }} size="lg">Sign Up</Button>
                <Button colorScheme="gray" variant="outline" size="lg">Learn More</Button>
              </Grid>
            </Flex>
          </Container>
        </section>

        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <Container maxW="6xl">
            <Stack spacing={10} px={4} md:px={6}>
              <Stack spacing={4} textAlign="center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-black">
                    New Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Introducing Video Conferencing with AI
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Trusted by the best teams in the world. We help teams of all sizes.
                  </p>
                </div>
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full h-full"
                    src="meet_bot.png"

                  />
                  <Stack spacing={4}>
                    <Feature title="Collaboration" description="Make collaboration seamless with built-in code review tools." />
                    <Feature title="Automation" description="Automate your workflow with continuous integration." />
                    <Feature title="Scale" description="Deploy to the cloud with a single click and scale with ease." />
                  </Stack>
              </Stack>
            </Stack>
          </Container>
        </section>
        {/* More sections here */}
      </main>

    </div>


    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Meet our Customers
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          Trusted by the best teams in the world. We help teams of all sizes.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center mt-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 sm:p-8"
            >
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="vite.svg"
                width="140"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="#"
            bgColor={"purple.400"}
            className="inline-flex items-center justify-center h-10 px-8 font-medium text-gray-50 bg-gray-900 rounded-md shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Contact Sales
          </Link>
          <Link
      href="#"
    className="inline-flex items-center
   justify-center h-10 px-8 font-medium text-black 
   bg-transparent border border-gray-200 rounded-md shadow-sm 
   transition-colors hover:bg-transparent hover:text-gray-500 
   focus-visible:outline-none focus-visible:ring-1 
   focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 
   dark:border-gray-800 dark:text-white dark:hover:text-gray-50 
   dark:hover:bg-transparent dark:focus-visible:ring-gray-300"
>
            Learn more
          </Link>
        </div>
      </div>
    </section>



      </main>
    </Box>
  )
}

function Feature({ title, description }) {
  return (
    <div className="grid gap-5">
      <Text className=" font-bold" fontSize={"4xl"}>{title}</Text>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
