import { Box, Container, Flex, Text, Link as ChakraLink, Link,useColorMode, useColorModeValue,Stack, Input, Button, Grid } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

export default function Component() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box pt={10}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <ChakraLink className="flex items-center justify-center" href="#">
          <span>Acme Inc</span>
        </ChakraLink>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ChakraLink className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </ChakraLink>
          <ChakraLink className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </ChakraLink>
          <ChakraLink className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </ChakraLink>
          <ChakraLink className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </ChakraLink>
        </nav>
        <Box ml="auto">
          <Button onClick={toggleColorMode} size="sm" leftIcon={useColorModeValue(<FiMoon />, <FiSun />)}>
            {useColorModeValue('Dark', 'Light')}
          </Button>
        </Box>
      </header>
      <main>
        <section className="py-6 md:py-12 lg:py-24 xl:py-32">
          <Container>
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
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <Container maxW="6xl">
            <Stack spacing={10} px={4} md:px={6}>
              <Stack spacing={4} textAlign="center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    New Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Introducing Video Conferencing with AI
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Trusted by the best teams in the world. We help teams of all sizes.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full h-auto"
                    src="logo.png"
                  />
                  <Stack spacing={4}>
                    <Feature title="Collaboration" description="Make collaboration seamless with built-in code review tools." />
                    <Feature title="Automation" description="Automate your workflow with continuous integration." />
                    <Feature title="Scale" description="Deploy to the cloud with a single click and scale with ease." />
                  </Stack>
                </div>
              </Stack>
            </Stack>
          </Container>
        </section>
        {/* More sections here */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Text fontSize="xs" color="gray.500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</Text>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link fontSize="xs" color="gray.500 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link fontSize="xs" color="gray.500 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>


    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Customers</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best teams in the world. We help teams of all sizes.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        


      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Flex direction={{ base: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between">
          <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>© 2024 Acme Inc. All rights reserved.</Text>
          <Flex gap={4}>
            <ChakraLink fontSize="xs" href="#" _hover={{ textDecoration: 'underline', textDecorationOffset: '4px' }}>Terms of Service</ChakraLink>
            <ChakraLink fontSize="xs" href="#" _hover={{ textDecoration: 'underline', textDecorationOffset: '4px' }}>Privacy</ChakraLink>
          </Flex>
        </Flex>
      </footer>
    </Box>
  )
}

function Feature({ title, description }) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
