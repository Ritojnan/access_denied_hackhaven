import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Button,
  VStack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  FormControl, 
  FormLabel, 
  Divider,
} from "@chakra-ui/react";
import { redirect, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../Firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [formData, setFormData] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
  });

  const navigate = useNavigate();
  const handleSignup = () => {
    setIsLoading(true);
    
    try {
      createUserWithEmailAndPassword(auth,formData.signupEmail, formData.signupPassword).then(data => console.log(data));
      navigate("/dashboard")
        } catch (error) {
      setSignupMessage("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    try {
      setIsLoading(true);

          const userCredential = createUserWithEmailAndPassword(auth,formData.loginEmail, formData.loginPassword).then(data => console.log(data));
          const user = userCredential.user;
          // console.log('Successfully signed in:', user);
          navigate("/dashboard");
              
    } catch (error) {
      console.log(error);
      
    }finally {
      setIsLoading(false);
    }

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleGoogleSignup = async () => {

  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     console.log(result);
  //     localStorage.setItem("token", result.user.accessToken);
  //     localStorage.setItem("user", JSON.stringify(result.user));
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error);

  //   }
  //   // signInWithPopup(auth, provider).then((data) => {
  //   //   console.log(data);
  //   //   setValue(data.user.email);
  //   //   localStorage.setItem("email", data.user.email);
  //   //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   //   const credential = GoogleAuthProvider.credentialFromResult(data);
  //   //   const token = credential.accessToken;
  //   //   // The signed-in user info.
  //   //   const user = data.user;
  //   //   // ...
  //   //   console.log(user);
  //   // })

  // };

  return (
    <Box
      bgImage={"/hand.jpg"} // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Center h="100%">
        <Flex
          direction="column"
          bg="white"
          p="8"
          rounded="md"
          shadow="lg"
          maxW="400px"
          w="100%"
        >
          {/* <Image src="/logo.png" alt="Company Logo" mb="4" /> Replace with your logo */}
          <Tabs isFitted variant="enclosed" colorScheme="teal">
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Sign In</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing="4">
                  {/* <FormControl id="signupName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      name="signupName"
                      value={formData.signupName}
                      onChange={handleInputChange}
                    />
                  </FormControl> */}
                  <FormControl id="signupEmail" isRequired pb={2}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="signupEmail"
                      value={formData.signupEmail}
                      onChange={handleInputChange}
                      bg={"white"}
                    />
                  </FormControl>
                  <FormControl id="signupPassword" isRequired pb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="signupPassword"
                      value={formData.signupPassword}
                      onChange={handleInputChange}
                      bg={"white"}
                    />
                  </FormControl>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    onClick={handleSignup}
                    isLoading={isLoading}
                    width={"full"}
                  >
                    Sign Up
                  </Button>
                  {/* <Divider /> */}
                  <Text>OR</Text>
                  <Button
                    onClick={handleGoogleSignup}
                    bgColor={"black"}
                    _hover={{ bgColor: "gray.800" }}
                    color={"white"}
                    leftIcon={<FaGoogle />}
                    width={"full"}
                  >
                    Sign Up with Google
                  </Button>
                </VStack>
                {signupMessage && (
                  <Alert
                    status={
                      signupMessage.includes("successful") ? "success" : "error"
                    }
                    mt="4"
                  >
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {signupMessage.includes("successful")
                        ? "Success!"
                        : "Error!"}
                    </AlertTitle>
                    <AlertDescription>{signupMessage}</AlertDescription>
                    <CloseButton
                      onClick={() => setSignupMessage("")}
                      position="absolute"
                      right="8px"
                      top="8px"
                    />
                  </Alert>
                )}
              </TabPanel>
              <TabPanel>
                <VStack spacing="4">
                  {/* <FormControl id="signupName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      name="signupName"
                      value={formData.signupName}
                      onChange={handleInputChange}
                    />
                  </FormControl> */}
                  <FormControl id="loginEmail" isRequired pb={2}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="loginEmail"
                      value={formData.loginEmail}
                      onChange={handleInputChange}
                      bg={"white"}
                    />
                  </FormControl>
                  <FormControl id="loginPassword" isRequired pb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="loginPassword"
                      value={formData.loginPassword}
                      onChange={handleInputChange}
                      bg={"white"}
                    />
                  </FormControl>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    onClick={handleLogin}
                    isLoading={isLoading} 
                    width={"full"}
                  >
                    Sign In
                  </Button>
                  {/* <Divider /> */}
                  <Text>OR</Text>
                  <Button
                    onClick={handleGoogleSignup}
                    bgColor={"black"}
                    _hover={{ bgColor: "gray.800" }}
                    color={"white"}
                    leftIcon={<FaGoogle />}
                    width={"full"}
                  >
                    Sign In with Google
                  </Button>
                </VStack>
                {signupMessage && (
                  <Alert
                    status={
                      signupMessage.includes("successful") ? "success" : "error"
                    }
                    mt="4"
                  >
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {signupMessage.includes("successful")
                        ? "Success!"
                        : "Error!"}
                    </AlertTitle>
                    <AlertDescription>{signupMessage}</AlertDescription>
                    <CloseButton
                      onClick={() => setSignupMessage("")}
                      position="absolute"
                      right="8px"
                      top="8px"
                    />
                  </Alert>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </Box>
  );
};

export default Signup;