import React, { useState, useEffect } from "react";
import "./clock.css";

function Currenttime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="time">{time}</div>
    </div>
  );
}

export default Currenttime;

