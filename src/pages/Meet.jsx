// import "./styles.css";
import JoinForm from "../components/JoinForm";
// import Header from "./Header";
import Conference from "../components/Conference";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";

export default function Meet() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="p-16">
      {/* <Header /> */}
      {isConnected ? (
        <Conference />
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

