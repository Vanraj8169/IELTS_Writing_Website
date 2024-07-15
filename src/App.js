import React, { useState } from "react";
import Timer from "./components/Timer";
import ImageUpload from "./components/ImageUpload";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleComplete = () => {
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="text-center mb-8">
        <Timer isRunning={isRunning} onComplete={handleComplete} />
      </div>
      <div className="flex flex-row w-full justify-center">
        <ImageUpload className="w-1/2" />
        <div className="w-1/2 p-4 flex flex-col">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded mb-8 self-center"
            onClick={handleStartPause}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <RichTextEditor />
        </div>
      </div>
    </div>
  );
};

export default App;
