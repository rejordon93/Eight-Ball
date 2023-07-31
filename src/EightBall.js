import React, { useState } from "react";
import "./App.css"; // Importing the CSS file to apply styles
import allText from "./AllMsg";

const EightBall = () => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black"); // Default color

  const handleClick = () => {
    const randomAnswer = allText[Math.floor(Math.random() * allText.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div>
      <h1 onClick={handleClick} className={`ball ${color}`}>
        {msg}
      </h1>
    </div>
  );
};

export default EightBall;
