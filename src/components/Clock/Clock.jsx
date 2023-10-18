import React, { useState, useEffect } from "react";
import "./clock.css";
import Sun from "../../assets/icon-sun.svg";
import Moon from "../../assets/icon-moon.svg";

function Clock({ dark }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="greeting">
        {!dark ? (
          <img src={Sun} alt="sun-icon" />
        ) : (
          <img src={Moon} alt="moon-icon" />
        )}
        {!dark ? (
          <h1>
            Good Morning<span>, it's currently</span>
          </h1>
        ) : (
          <h1>
            Good Evening<span>, it's currently</span>
          </h1>
        )}
      </div>

      <div className="time">
        <span id="time">
          {time.toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        <span id="bst">BST</span>
      </div>

      <h3>IN LONDON, UK</h3>
    </div>
  );
}

export default Clock;
