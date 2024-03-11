import { useState, useEffect } from "react";
import "./ProgressApp.css";
import ProgressBar from "./ProgressBar";

export default function ProgressApp() {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (bar < 100) {
        setBar((prev) => prev + 1);
      } else {
        clearInterval(interval);
        // setBar((prev) => 0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [bar]);
  const handleClick = () => {
    setBar(0);
  };
  return (
    <div className="ProgressApp">
      <h1 style={{ fontSize:"30px" }}>Progress Bar</h1>
      <ProgressBar bar={bar} />
      <button className="button" onClick={handleClick}>Re-Start</button>
    </div>
  );
}
