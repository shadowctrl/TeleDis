"use client";
import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const Time = time.toLocaleTimeString([], { hour12: false });

  return Time;
};

export default Timer;
