import { useVideo } from "@100mslive/react-sdk";
import { Box, Text } from "@chakra-ui/react";

function Peer({ peer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      rounded="md"
      boxShadow="md"
      width="100%"
      margin="auto"
    >
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
        style={{ borderRadius: "0.375rem" }}
      />
      <Text  fontWeight="bold">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </Text>
    </Box>
  );
}

export default Peer;
