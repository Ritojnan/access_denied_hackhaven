import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter';
import '@fontsource/inter/700.css'
import { useContext } from "react";
import { ChatProvider } from "./UserContext.jsx";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default theme
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatProvider>
    <ChakraProvider>
      <HMSRoomProvider>
        <App />
      </HMSRoomProvider>
    </ChakraProvider>
    </ChatProvider>
    
  </React.StrictMode>
);
