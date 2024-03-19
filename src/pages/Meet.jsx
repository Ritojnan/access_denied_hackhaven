import React, { useState } from 'react';
import axios from 'axios';

function Meetings() {
  const [minutes, setMinutes] = useState("");
  const transcript = `John Doe: Good morning, everyone. Let's start with our updates. [10:00 AM]
Jane Smith: I finished implementing the login functionality. [10:05 AM]
Mike Brown: I worked on optimizing the database queries. [10:10 AM]
Emily Johnson: I encountered some issues with the API integration, but I'm working on resolving them. [10:15 AM]
John Doe: Great updates, everyone. Let's address any blockers and plan our tasks for today. [10:20 AM]`;

  async function generateText() {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/generation",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY",
      },
      data: {
        providers: "google",
        text: `${transcript} generate the meeting minutes`,
        temperature: 0.2,
        max_tokens: 1024,
        fallback_providers: "",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMinutes(response.data.google.generated_text);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Previous meetings
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Here are your previous meetings. You can chat with AI or get a summary of each meeting.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="space-y-1.5 p-6 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Stand-up meeting
                </h3>
                <p className="text-sm text-muted-foreground">Room code: 123 456</p>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-muted-foreground"><b>Participants</b></p>
                    <p className="text-sm text-muted-foreground">John Doe</p>
                    <p className="text-sm text-muted-foreground">Jane Smith</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-muted-foreground"><b>Start time</b></p>
                    <p className="text-sm text-muted-foreground">10:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="p-0">
                <div className="border-t border-gray-200 dark:border-gray-800">
                  <div className="grid gap-4 p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 self-end">
                      Chat with AI
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 self-end" onClick={generateText}>
                      AI Summary
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="space-y-1.5 p-6 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Design review
                </h3>
                <p className="text-sm text-muted-foreground">Room code: 987 654</p>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-muted-foreground"><b>Participants</b></p>
                    <p className="text-sm text-muted-foreground">Emily Johnson</p>
                    <p className="text-sm text-muted-foreground">Mike Brown</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-muted-foreground"><b>Start time</b></p>
                    <p className="text-sm text-muted-foreground">2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="p-0">
                <div className="border-t border-gray-200 dark:border-gray-800">
                  <div className="grid gap-4 p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 self-end">
                      Chat with AI
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 self-end">
                      AI Summary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
