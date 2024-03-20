import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToast, Button } from "@chakra-ui/react";

const Response = () => {
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [generatedActivities, setGeneratedActivities] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const toast = useToast();

  // Function to fetch detected objects and generate activities using Eden AI
  const generateActivities = async () => {
    setIsGenerating(true);
    try {
      // Fetch detected objects
      const response = await fetch("http://localhost:3001/detected-objects");
      if (!response.ok) {
        console.error("Failed to fetch detected objects");
        return;
      }
      const data = await response.json();
      setDetectedObjects(data);

      // Prepare request options
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/generation",
        headers: {
          authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY", // Replace YOUR_API_KEY with your actual API key
        },
        data: {
          providers: "openai",
          text: `These are the items detected in procturing: ${data
            .map((object) => object.class)
            .join(
              ", "
            )}. Make aN ALERT message to send to the user on procturing detection in a proffessional meeting as a soft  THAT IT CAUSES DISTRACTION including the list of objects DONT INCLUDE EXTRA OBJECTS.DONT INCLUDE NAMES `,
          temperature: 0.2,
          max_tokens: 1024,
          fallback_providers: "",
        },
      };

      // Send request to Eden AI to generate activities
      const aiResponse = await axios.request(options);
      setGeneratedActivities(aiResponse.data.openai.generated_text.split("\n"));
      console.log(aiResponse);

      // Show toast with generated activities
      toast({
        title: "Alert!",
        position:"top-right",
        description: (
          <ul>
            {generatedActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        ),
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error generating activities:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          generateActivities();
        }}
        colorScheme="purple"
        bg={"purple.400"}
        isLoading={isGenerating}
        loadingText="Generating..."
      >
        Notifications
      </Button>
    </div>
  );
};

export default Response;
