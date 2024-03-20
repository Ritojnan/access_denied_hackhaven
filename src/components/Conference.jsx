import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import { Grid ,Box, GridItem} from "@chakra-ui/layout";

function Conference({brb,peerslen}) {
  const peers = useHMSStore(selectPeers);
 

  return (
    <div className="conference-section relative">
          {brb ? (
  <div className="absolute text-4xl text-red-500 top-5 p-2 border-red-500 border-2 rounded-lg left-5">BRB.</div>
) : null}

      <div className="peers-container">
        {/* Use the DynamicGrid component */}
        <DynamicGrid className="" items={peers.map(peer => <Peer key={peer.id} peer={peer} />)} />
      </div>
    </div>
  );
}



function DynamicGrid({ items }) {
  const numRows = Math.ceil(items.length / 4); // Assuming 4 items per row
  const remainingItems = items.length % 4;

  // Function to generate grid items
  const generateGridItems = () => {
    const gridItems = [];
    let index = 0;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < 4; col++) {
        if (row === numRows - 1 && col >= remainingItems) {
          break; // Skip remaining empty cells in the last row
        }

        gridItems.push(
          <GridItem key={index} colSpan={1} rowSpan={1}>
            {items[index]}
          </GridItem>
        );
        index++;
      }
    }

    return gridItems;
  };

  return (
    <Grid
      templateColumns={`repeat(${Math.min(4, items.length)}, 1fr)`}
      gap={4}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      {generateGridItems()}
    </Grid>
  );
}



export default Conference;
