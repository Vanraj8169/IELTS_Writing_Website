import { useEffect, useState } from "react";

const Timer = ({ isRunning, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      onComplete();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return <div className="text-center text-7xl font-sans font-bold">{formatTime(timeLeft)}</div>;
};

export default Timer;
