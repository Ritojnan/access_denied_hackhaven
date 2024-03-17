
// import JoinForm from "../components/JoinForm";
// // import Header from "./Header";
// import Conference from "../components/Conference";
// import { useEffect } from "react";
// import {
//   selectIsConnectedToRoom,
//   useHMSActions,
//   useHMSStore
// } from "@100mslive/react-sdk";

// export default function Meet() {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const hmsActions = useHMSActions();

//   useEffect(() => {
//     window.onunload = () => {
//       if (isConnected) {
//         hmsActions.leave();
//       }
//     };
//   }, [hmsActions, isConnected]);
// console.log(isConnected)
//   return (
//     <div className="meet">
//       {/* <Header /> */}
//       <h1>hi</h1>
      
//         <Conference />
      
//         <JoinForm />
      
//     </div>
//   );
// }

