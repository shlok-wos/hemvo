import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number; // Time in seconds
  onExpire: () => void; // Callback when timer expires
}

const Timer: React.FC<TimerProps> = ({ initialTime, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return <>{formatTime(timeLeft)}</>;
};

export default Timer;
