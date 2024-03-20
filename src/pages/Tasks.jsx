import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Avatar } from "@chakra-ui/react";

export default function Tasks() {
  const { userState, setUserState } = useContext(UserContext);
  const knowTasks = () => {};
  const assignTask = () => {};
  
  // State to manage the checked state of the checkboxes
  const [isChecked, setIsChecked] = useState({
    task1: false,
    task2: false,
    task3: false,
  });
  
  // Function to handle the click event of the checkboxes
  const handleCheckboxClick = (task) => {
    setIsChecked({
      ...isChecked,
      [task]: !isChecked[task],
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="flex flex-col h-screen ">
        <header className="flex h-14 items-center border-b px-4 bg-gray-300 dark:bg-purple-500">
          <div className="flex items-center gap-2 font-semibold" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-gray-600 dark:text-gray-300" style={{ fontSize: "calc(100% + 20px)" }}>Tasks</span>
            {!userState.mod && (
              <button className="" onClick={knowTasks} style={{ fontSize: "calc(100% + 20px)" }}>
                Know my task
              </button>
            )}
            {userState.mod && (
              <button className="" onClick={assignTask}>
                Assign tasks
              </button>
            )}
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="sr-only">Add new task</span>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
              <Avatar
                src="/placeholder.svg"
                size="sm"
                alt="Avatar"
                css={{ aspectRatio: "1", objectFit: "cover" }}
              />
              <span className="sr-only">Toggle user menu</span>
            </button>
          </div>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-900" style={{ fontSize: "calc(100% + 20px)" }}>
          <div className="grid gap-2">
          <h1
          style={{ fontSize: "calc(100% + 5px)", marginBottom: "20px" }}
          className="font-semibold text-lg text-gray-600 dark:text-gray-300"
        >
          My Tasks
        </h1>

            <form className="flex items-center gap-4">
              <label
                style={{ paddingTop: "calc(100% + 10px)" }}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                htmlFor="search"
              >
                Search
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                id="search"
                placeholder="Search tasks..."
                type="search"
              />
            </form>
          </div>
          <div className="grid gap-4">
            {/* Task 1 */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={isChecked.task1}
                onChange={() => handleCheckboxClick("task1")}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer"
                  htmlFor="task-1"
                >
                  <span className="line-clamp-1 font-medium text-gray-800 dark:text-gray-200" style={{ fontSize: "calc(100% + 10px)" }}>
                    Update documentation
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400" style={{ fontSize: "calc(100% + 2px)" }}>
                    Update the documentation with the new features
                  </p>
                </label>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                  </svg>
                  <span className="sr-only">Edit task</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span className="sr-only">Delete task</span>
                </button>
              </div>
            </div>
            {/* Task 2 */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={isChecked.task2}
                onChange={() => handleCheckboxClick("task2")}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer"
                  htmlFor="task-2"
                >
                  <span className="line-clamp-1 font-medium text-gray-800 dark:text-gray-200" style={{ fontSize: "calc(100% + 10px)" }}>
                    Review wireframes
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400" style={{ fontSize: "calc(100% + 2px)" }}>
                    Provide feedback on the new wireframes
                  </p>
                </label>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                  </svg>
                  <span className="sr-only">Edit task</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span className="sr-only">Delete task</span>
                </button>
              </div>
            </div>
            {/* Task 3 */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={isChecked.task3}
                onChange={() => handleCheckboxClick("task3")}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer"
                  htmlFor="task-3"
                >
                  <span className="line-clamp-1 font-medium text-gray-800 dark:text-gray-200" style={{ fontSize: "calc(100% + 10px)" }}>
                    Fix styling issues
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400" style={{ fontSize: "calc(100% + 2px)" }}>
                    Address the UI bugs reported by the QA team
                  </p>
                </label>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                  </svg>
                  <span className="sr-only">Edit task</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-6 h-6 bg-purple-500 text-white dark:bg-purple-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span className="sr-only">Delete task</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
